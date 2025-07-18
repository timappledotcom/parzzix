# Parzzix Theme Configuration Guide

This document explains all the configuration options available in the Parzzix Hugo theme.

## Basic Site Configuration

```yaml
baseURL: "https://example.com"
languageCode: "en-us"
title: "Your Site Title"
theme: "parzzix"
```

## Theme Parameters

### Site Metadata
Configure basic site information and branding:

```yaml
params:
  # Basic site information
  description: "Your site description for SEO and social sharing"
  author: "Your Name"
  email: "your.email@example.com"

  # Site branding (optional)
  logo: "/images/logo.png"  # Path to your logo image
  favicon: "/images/favicon.ico"  # Path to your favicon
```

### Social Media Links
Configure social media and contact links that appear in the footer:

```yaml
params:
  social:
    twitter: "https://twitter.com/yourusername"
    github: "https://github.com/yourusername"
    linkedin: "https://linkedin.com/in/yourusername"
    email: "mailto:your.email@example.com"
    rss: true  # Show RSS feed link
```

### Theme Customization
Control the appearance and behavior of various theme elements:

```yaml
params:
  theme:
    # Color scheme (future enhancement)
    colorScheme: "light"  # light/dark/auto

    # Post display options
    showReadingTime: true      # Show estimated reading time
    showPostDate: true         # Show publication date
    showPostAuthor: true       # Show post author
    showPostTags: true         # Show post tags
    showPostSummary: true      # Show post excerpts on list pages

    # Pagination
    postsPerPage: 10          # Number of posts per page

    # Edit links (for GitHub/GitLab integration)
    showEditLink: false       # Show "Edit this page" links
    editBaseURL: "https://github.com/username/repo/edit/main/content"
```

### SEO and Analytics
Configure search engine optimization and analytics:

```yaml
params:
  seo:
    # Analytics
    googleAnalytics: "GA-TRACKING-ID"

    # Site verification
    googleSiteVerification: "verification-code"
    bingSiteVerification: "verification-code"

    # Social media
    twitterHandle: "yourusername"  # Without @ symbol
```

### Comments System
Enable and configure comments (optional):

```yaml
params:
  comments:
    enabled: true
    provider: "utterances"  # disqus or utterances

    # For Disqus
    disqusShortname: "your-disqus-shortname"

    # For Utterances (GitHub-based comments)
    utterancesRepo: "username/repo"
    utterancesTheme: "github-light"  # github-light, github-dark, etc.
```

## Navigation Menu

Configure your site's main navigation:

```yaml
menu:
  main:
    - name: "Home"
      url: "/"
      weight: 10
    - name: "About"
      url: "/about/"
      weight: 20
    - name: "Posts"
      url: "/posts/"
      weight: 30
```

## Content Configuration

### Pagination
```yaml
paginate: 10  # This can be overridden by theme.postsPerPage
paginatePath: "page"
```

### Taxonomies
```yaml
taxonomies:
  tag: "tags"
  category: "categories"
```

### Output Formats
```yaml
outputs:
  home: ["HTML", "RSS", "JSON"]
  page: ["HTML"]
  section: ["HTML", "RSS"]
```

## Content Markup

### Syntax Highlighting
```yaml
markup:
  goldmark:
    renderer:
      unsafe: true  # Allow HTML in markdown
  highlight:
    style: github
    lineNos: false
    codeFences: true
    guessSyntax: true
    tabWidth: 2
```

## Privacy Settings

Configure privacy-compliant analytics and embeds:

```yaml
privacy:
  googleAnalytics:
    disable: false
    respectDoNotTrack: true
    anonymizeIP: true
  twitter:
    disable: false
    enableDNT: true
  youtube:
    disable: false
    privacyEnhanced: true
```

## Front Matter Options

### Post Front Matter
Individual posts can override theme settings:

```yaml
---
title: "Your Post Title"
date: 2023-01-01T00:00:00Z
description: "Post description for SEO"
author: "Post Author"  # Overrides site author
tags: ["tag1", "tag2"]
categories: ["category1"]
readingTime: 5  # Override calculated reading time
---
```

## Advanced Configuration

### Custom CSS
Add custom styles by creating additional SCSS files in `assets/css/` and importing them in `main.scss`.

### Custom JavaScript
Add custom JavaScript by creating files in `assets/js/` and including them in your templates.

### Template Overrides
Override any theme template by creating the same file structure in your site's `layouts/` directory.

## Migration from Other Themes

When migrating from other Hugo themes, pay attention to:

1. **Front matter compatibility**: Ensure your existing posts use compatible front matter fields
2. **Menu structure**: Update your menu configuration to match the expected format
3. **Asset paths**: Update any hardcoded asset paths to use Hugo's asset pipeline
4. **Custom CSS**: Migrate custom styles to the theme's SCSS structure

## Troubleshooting

### Common Issues

1. **Social links not appearing**: Ensure the `social` section is properly configured in `params`
2. **Reading time not showing**: Check that `theme.showReadingTime` is set to `true`
3. **Comments not loading**: Verify your comments provider configuration and that JavaScript is enabled
4. **Logo not displaying**: Ensure the logo path is correct and the image file exists

### Performance Optimization

1. **Image optimization**: Use WebP format for images when possible
2. **Asset minification**: The theme automatically minifies CSS and JavaScript in production
3. **Caching**: Configure appropriate cache headers for static assets