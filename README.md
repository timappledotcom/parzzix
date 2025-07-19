# Parzzix Hugo Theme

A clean, minimalist Hugo theme inspired by Tpika.page design aesthetic. Parzzix focuses on readability, performance, and simplicity while providing modern features for bloggers and writers.

[Theme Preview](https://blog.timapple.com)

## Features

### 🎨 **Design & Layout**
- **Minimalist Design**: Clean, distraction-free reading experience
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Typography**: Carefully selected fonts for optimal readability
- **Fast Loading**: Lightweight CSS and minimal JavaScript
- **Accessibility**: Built with semantic HTML and accessibility best practices

### 📱 **Social Media Integration**
- **Comprehensive Social Icons**: X/Twitter, GitHub, LinkedIn, Mastodon, Bluesky, Nostr, Email
- **Custom SVG Icons**: Scalable vector icons for crisp display at any size
- **Footer Social Links**: Organized social media presence in the footer

### 📊 **Content Features**
- **Reading Time Estimation**: Shows estimated reading time for posts
- **Post Metadata**: Configurable display of date, author, tags, and reading time
- **Post Summaries**: Excerpt display on list pages
- **RSS Feed Support**: Built-in RSS feed generation
- **Draft Support**: Preview drafts in development mode

### ⚡ **Performance & SEO**
- **Fast Build Times**: Optimized Hugo templates for quick site generation
- **SEO Friendly**: Meta tags, structured data, and semantic HTML
- **Social Media Cards**: Open Graph and Twitter Card support
- **Google Analytics**: Built-in analytics integration
- **Site Verification**: Support for Google and Bing site verification

## Installation

### Method 1: Git Submodule (Recommended)
```bash
cd your-hugo-site
git submodule add https://github.com/yourusername/parzzix.git themes/parzzix
echo "theme = 'parzzix'" >> hugo.toml
```

### Method 2: Clone
```bash
cd your-hugo-site/themes
git clone https://github.com/yourusername/parzzix.git
echo "theme = 'parzzix'" >> ../hugo.toml
```

### Method 3: Download
1. Download the theme as a ZIP file
2. Extract to `your-site/themes/parzzix`
3. Add `theme = 'parzzix'` to your `hugo.toml`

## Quick Start

1. **Install the theme** using one of the methods above
2. **Copy the example configuration** from `exampleSite/hugo.toml` to your site's root
3. **Create your first post**:
   ```bash
   hugo new posts/my-first-post.md
   ```
4. **Start the development server**:
   ```bash
   hugo server --buildDrafts
   ```

## Configuration

### Basic Site Configuration

```toml
baseURL = 'https://yourdomain.com/'
languageCode = 'en-us'
title = "Your Site Title"
theme = 'parzzix'

[params]
  description = "Your site description for SEO and social sharing"
  author = "Your Name"
  email = "your.email@example.com"
```

### Menu Configuration

```toml
[menu]
  [[menu.main]]
    name = "Home"
    url = "/"
    weight = 1
  [[menu.main]]
    name = "About"
    url = "/about/"
    weight = 2
  [[menu.main]]
    name = "Posts"
    url = "/posts/"
    weight = 3
```

### Social Media Links

```toml
[params.social]
  x = "https://x.com/yourusername"
  github = "https://github.com/yourusername"
  linkedin = "https://linkedin.com/in/yourusername"
  mastodon = "https://mastodon.social/@yourusername"
  bluesky = "https://bsky.app/profile/yourusername.bsky.social"
  nostr = "https://nostr-client.com/your-nostr-address"
  email = "mailto:your.email@example.com"
  rss = true
```

### Theme Customization

```toml
[params.theme]
  showReadingTime = true
  showPostDate = true
  showPostAuthor = true
  showPostTags = true
  showPostSummary = true
  postsPerPage = 10
```

### SEO Configuration

```toml
[params.seo]
  twitterHandle = "yourusername"
  googleAnalytics = "GA-TRACKING-ID"
  googleSiteVerification = "verification-code"
```

## Content Creation

### Front Matter

```yaml
---
title: "Your Post Title"
date: 2025-01-15T10:00:00-05:00
draft: false
tags: ["tag1", "tag2"]
summary: "A brief summary of your post"
---
```

### Supported Content Types

- **Posts**: `content/posts/post-name.md`
- **Pages**: `content/page-name.md`
- **About**: `content/about.md`

## Customization

### Override Theme Files

To customize the theme, copy files from the theme directory to your site's corresponding directory:

```
your-site/
├── layouts/
│   ├── partials/
│   │   └── header.html     # Override theme header
│   └── _default/
│       └── single.html     # Override single post layout
├── assets/
│   └── css/
│       └── custom.css      # Add custom styles
└── static/
    └── images/
        └── favicon.ico     # Custom favicon
```

### Custom CSS

Create `assets/css/custom.css` in your site root to add custom styles:

```css
/* Custom styles for your site */
.your-custom-class {
    color: #your-color;
}
```

### Color Scheme

The theme uses CSS custom properties for easy color customization:

```css
:root {
  --primary-color: #2c3e50;
  --secondary-color: #34495e;
  --text-color: #333;
  --background-color: #fff;
  --accent-color: #3498db;
}
```

## Supported Social Platforms

The theme includes built-in support for these social platforms:

| Platform | Icon | Configuration Key |
|----------|------|-------------------|
| X (Twitter) | ✅ | `x` |
| GitHub | ✅ | `github` |
| LinkedIn | ✅ | `linkedin` |
| Mastodon | ✅ | `mastodon` |
| Bluesky | ✅ | `bluesky` |
| Nostr | ✅ | `nostr` |
| Email | ✅ | `email` |
| RSS Feed | ✅ | `rss` |

## Browser Support

- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile**: iOS Safari 14+, Chrome Mobile 90+
- **Responsive Design**: All screen sizes from 320px to 4K displays

## Performance

- **Lighthouse Scores**: 95+ across all metrics
- **Page Speed**: <100ms typical load time
- **Bundle Size**: <50KB total CSS/JS
- **Image Optimization**: Automatic WebP conversion and responsive images

## Development

### Local Development

```bash
# Clone the theme repository
git clone https://github.com/yourusername/parzzix.git
cd parzzix

# Start the example site
cd exampleSite
hugo server --themesDir ../..
```

### Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Troubleshooting

### Common Issues

**Social icons not showing:**
- Ensure social URLs are correctly formatted
- Check that the configuration uses the correct key names (lowercase)

**Site not building:**
- Verify Hugo version compatibility (minimum v0.80.0)
- Check for conflicting configuration files

**Styles not loading:**
- Clear browser cache
- Rebuild the site with `hugo --cleanDestinationDir`

### Getting Help

- 📖 [Documentation](CONFIGURATION.md)
- 🐛 [Report Issues](https://github.com/yourusername/parzzix/issues)
- 💬 [Discussions](https://github.com/yourusername/parzzix/discussions)

## License

This theme is released under the [MIT License](LICENSE).

## Credits

- **Original Design Inspiration**: [blog.timapple.com](https://blog.timapple.com)
- **Built with**: [Hugo Static Site Generator](https://gohugo.io)
- **Icons**: Custom SVG icons for social media platforms

---

**Made with ❤️ for the Hugo community**

For detailed configuration options, see [CONFIGURATION.md](CONFIGURATION.md).
