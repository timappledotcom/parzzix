// Main JavaScript file for Hugo Tim Apple Theme

// Enhanced Mobile Navigation and Touch Interactions
document.addEventListener('DOMContentLoaded', function() {
    // =============================================================================
    // Mobile Navigation Toggle with Enhanced Touch Support
    // =============================================================================

    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const body = document.body;

    if (navToggle && navMenu) {
        // Initialize aria-expanded to false
        navToggle.setAttribute('aria-expanded', 'false');

        // Enhanced touch event handling
        let touchStartY = 0;
        let touchEndY = 0;

        // Touch start handler for swipe detection
        navMenu.addEventListener('touchstart', function(e) {
            touchStartY = e.changedTouches[0].screenY;
        }, { passive: true });

        // Touch end handler for swipe to close
        navMenu.addEventListener('touchend', function(e) {
            touchEndY = e.changedTouches[0].screenY;
            handleSwipeGesture();
        }, { passive: true });

        function handleSwipeGesture() {
            const swipeThreshold = 50;
            const swipeDistance = touchStartY - touchEndY;

            // Swipe up to close menu
            if (swipeDistance > swipeThreshold && navMenu.classList.contains('nav-menu-open')) {
                closeMenu();
            }
        }

        // Enhanced click handler with touch feedback
        navToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();

            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';

            // Add haptic feedback for supported devices
            if ('vibrate' in navigator) {
                navigator.vibrate(50);
            }

            // Toggle aria-expanded attribute
            navToggle.setAttribute('aria-expanded', !isExpanded);

            // Toggle menu visibility with smooth animation
            navMenu.classList.toggle('nav-menu-open');

            // Prevent body scroll when menu is open (mobile)
            if (!isExpanded && window.innerWidth <= 768) {
                body.style.overflow = 'hidden';
            } else {
                body.style.overflow = '';
            }

            // Manage outside click listener
            if (!isExpanded) {
                // Add slight delay to prevent immediate closing
                setTimeout(() => {
                    document.addEventListener('click', closeMenuOnOutsideClick);
                    document.addEventListener('touchstart', closeMenuOnOutsideClick, { passive: true });
                }, 10);
            } else {
                document.removeEventListener('click', closeMenuOnOutsideClick);
                document.removeEventListener('touchstart', closeMenuOnOutsideClick);
            }

            // Focus management for accessibility
            if (!isExpanded) {
                // Focus first nav link when menu opens
                const firstNavLink = navMenu.querySelector('.nav-link');
                if (firstNavLink) {
                    setTimeout(() => firstNavLink.focus(), 150);
                }
            }
        });

        // Enhanced touch feedback for nav toggle
        navToggle.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.95)';
        }, { passive: true });

        navToggle.addEventListener('touchend', function() {
            this.style.transform = '';
        }, { passive: true });

        // Close menu when clicking on nav links (mobile)
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    closeMenu();
                }
            });

            // Enhanced touch feedback for nav links
            link.addEventListener('touchstart', function() {
                if (window.innerWidth <= 768) {
                    this.style.backgroundColor = 'var(--color-background-alt)';
                }
            }, { passive: true });

            link.addEventListener('touchend', function() {
                if (window.innerWidth <= 768) {
                    setTimeout(() => {
                        this.style.backgroundColor = '';
                    }, 150);
                }
            }, { passive: true });
        });

        // Handle escape key to close menu
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && navMenu.classList.contains('nav-menu-open')) {
                closeMenu();
                navToggle.focus();
            }
        });
    }

    function closeMenu() {
        const navToggle = document.querySelector('.nav-toggle');
        const navMenu = document.querySelector('.nav-menu');

        if (navToggle && navMenu) {
            navToggle.setAttribute('aria-expanded', 'false');
            navMenu.classList.remove('nav-menu-open');
            body.style.overflow = '';
            document.removeEventListener('click', closeMenuOnOutsideClick);
            document.removeEventListener('touchstart', closeMenuOnOutsideClick);
        }
    }

    function closeMenuOnOutsideClick(event) {
        const navToggle = document.querySelector('.nav-toggle');
        const navMenu = document.querySelector('.nav-menu');

        if (navToggle && navMenu &&
            !navToggle.contains(event.target) &&
            !navMenu.contains(event.target)) {
            closeMenu();
        }
    }

    // =============================================================================
    // Enhanced Responsive Behavior
    // =============================================================================

    // Handle window resize with debouncing
    let resizeTimer;
    let currentBreakpoint = getBreakpoint();

    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            const newBreakpoint = getBreakpoint();

            // Reset mobile menu state when switching to desktop
            const navToggle = document.querySelector('.nav-toggle');
            const navMenu = document.querySelector('.nav-menu');

            if (newBreakpoint !== 'mobile' && navToggle && navMenu) {
                closeMenu();
            }

            // Update current breakpoint
            if (newBreakpoint !== currentBreakpoint) {
                currentBreakpoint = newBreakpoint;
                handleBreakpointChange(currentBreakpoint);
            }
        }, 150);
    });

    function getBreakpoint() {
        const width = window.innerWidth;
        if (width < 480) return 'xs';
        if (width < 640) return 'sm';
        if (width < 768) return 'mobile';
        if (width < 1024) return 'md';
        if (width < 1280) return 'lg';
        return 'xl';
    }

    function handleBreakpointChange(breakpoint) {
        // Add breakpoint-specific optimizations
        document.body.setAttribute('data-breakpoint', breakpoint);

        // Optimize touch targets for mobile
        if (breakpoint === 'xs' || breakpoint === 'sm' || breakpoint === 'mobile') {
            optimizeForTouch();
        } else {
            resetTouchOptimizations();
        }
    }

    function optimizeForTouch() {
        // Ensure all interactive elements meet touch requirements
        const interactiveElements = document.querySelectorAll('button, a, input, select, textarea');
        interactiveElements.forEach(element => {
            if (!element.classList.contains('touch-optimized')) {
                element.classList.add('touch-target');
                element.classList.add('touch-optimized');
            }
        });
    }

    function resetTouchOptimizations() {
        const touchElements = document.querySelectorAll('.touch-optimized');
        touchElements.forEach(element => {
            element.classList.remove('touch-target');
            element.classList.remove('touch-optimized');
        });
    }

    // =============================================================================
    // Enhanced Smooth Scrolling with Mobile Optimization
    // =============================================================================

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();

                // Close mobile menu if open
                if (navMenu && navMenu.classList.contains('nav-menu-open')) {
                    closeMenu();
                }

                // Enhanced smooth scroll with mobile considerations
                const isMobile = window.innerWidth <= 768;
                const offset = isMobile ? 80 : 100; // Account for mobile header height

                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Focus target for accessibility
                setTimeout(() => {
                    target.focus({ preventScroll: true });
                }, 500);
            }
        });
    });

    // =============================================================================
    // Touch-Friendly Interactions for Post Elements
    // =============================================================================

    // Enhanced touch feedback for post summaries and links
    const postSummaries = document.querySelectorAll('.post-summary');
    postSummaries.forEach(summary => {
        let touchTimer;

        summary.addEventListener('touchstart', function() {
            touchTimer = setTimeout(() => {
                this.style.transform = 'scale(0.98)';
                this.style.transition = 'transform 0.1s ease';
            }, 100);
        }, { passive: true });

        summary.addEventListener('touchend', function() {
            clearTimeout(touchTimer);
            this.style.transform = '';
        }, { passive: true });

        summary.addEventListener('touchcancel', function() {
            clearTimeout(touchTimer);
            this.style.transform = '';
        }, { passive: true });
    });

    // Enhanced pagination button interactions
    const paginationButtons = document.querySelectorAll('.pagination-prev, .pagination-next');
    paginationButtons.forEach(button => {
        button.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.95)';
        }, { passive: true });

        button.addEventListener('touchend', function() {
            this.style.transform = '';
        }, { passive: true });
    });

    // =============================================================================
    // Performance Optimizations for Mobile
    // =============================================================================

    // Lazy load images on mobile for better performance
    if ('IntersectionObserver' in window && window.innerWidth <= 768) {
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }

    // Optimize scroll performance on mobile
    let ticking = false;

    function updateScrollPosition() {
        // Add scroll-based optimizations here if needed
        ticking = false;
    }

    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateScrollPosition);
            ticking = true;
        }
    }, { passive: true });

    // =============================================================================
    // Accessibility Enhancements for Mobile
    // =============================================================================

    // Announce breakpoint changes to screen readers
    function announceBreakpointChange(breakpoint) {
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.className = 'sr-only';
        announcement.textContent = `Layout changed to ${breakpoint} view`;
        document.body.appendChild(announcement);

        setTimeout(() => {
            document.body.removeChild(announcement);
        }, 1000);
    }

    // Initialize on load
    handleBreakpointChange(currentBreakpoint);

    // Reduce motion for users who prefer it
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.documentElement.style.setProperty('--transition-base', '0.01ms');
        document.documentElement.style.setProperty('--transition-fast', '0.01ms');
        document.documentElement.style.setProperty('--transition-slow', '0.01ms');
    }
});

console.log('Hugo Tim Apple Theme with enhanced mobile support loaded');