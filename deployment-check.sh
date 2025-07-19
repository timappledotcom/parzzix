#!/bin/bash

# Hugo Theme Deployment Troubleshooting Script
# This script helps diagnose why your Hugo site isn't rendering properly on your server

echo "🔍 Hugo Theme Deployment Troubleshooting"
echo "========================================"
echo ""

echo "📋 Checking build environment..."
echo "Hugo version:"
hugo version

echo ""
echo "📁 Current directory structure:"
echo "--------------------------------"
ls -la

echo ""
echo "🏗️  Building site with verbose output..."
echo "----------------------------------------"
hugo --cleanDestinationDir --logLevel info

echo ""
echo "📝 Generated files in public directory:"
echo "---------------------------------------"
ls -la public/

echo ""
echo "🔗 Checking key asset files:"
echo "-----------------------------"

if [ -f "public/index.html" ]; then
    echo "✅ index.html exists"
    echo "First 10 lines of index.html:"
    head -10 public/index.html
else
    echo "❌ index.html missing!"
fi

echo ""

if [ -f "public/css/main.min.css" ]; then
    echo "✅ CSS file exists"
    echo "CSS file size: $(du -h public/css/main.min.css | cut -f1)"
else
    echo "❌ CSS file missing!"
fi

echo ""

if [ -f "public/js/main.min.*.js" ]; then
    echo "✅ JS file exists"
    ls -la public/js/
else
    echo "❌ JS file missing!"
fi

echo ""
echo "🌐 Checking URLs in HTML:"
echo "-------------------------"
echo "BaseURL references in index.html:"
grep -n "blog\.timapple\.com\|yoursite\.com\|example\.com" public/index.html || echo "No domain references found"

echo ""
echo "CSS and JS references:"
grep -n "href=\|src=" public/index.html | head -5

echo ""
echo "🔧 Configuration check:"
echo "-----------------------"
echo "Current config.yaml baseURL:"
grep -n "baseURL" config.yaml || echo "baseURL not found in config.yaml"

echo ""
echo "📤 Deployment checklist:"
echo "------------------------"
echo "1. ✅ Build completed"
echo "2. [ ] Upload all files from 'public/' directory to your web server"
echo "3. [ ] Ensure your domain matches the baseURL in config.yaml"
echo "4. [ ] Check that CSS/JS files are accessible via browser"
echo "5. [ ] Verify file permissions on your server (644 for files, 755 for directories)"

echo ""
echo "🐛 Common issues and solutions:"
echo "------------------------------"
echo "• Site shows blank/unstyled: Check if CSS file is loading (check browser dev tools)"
echo "• 404 errors: Verify baseURL matches your actual domain"
echo "• Permission errors: Set proper file permissions (chmod 644 *.html, chmod 755 directories)"
echo "• Mixed content: Ensure HTTPS/HTTP scheme matches your server setup"

echo ""
echo "🧪 To test your deployment:"
echo "--------------------------"
echo "1. Open your site in a browser"
echo "2. Press F12 to open developer tools"
echo "3. Check the Console tab for errors"
echo "4. Check the Network tab to see if CSS/JS files are loading"
echo "5. Look for 404 errors or failed requests"
