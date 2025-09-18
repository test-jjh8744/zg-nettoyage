// Script to add animation CSS and JS to all pages except index.html
// This is a utility script to batch update all pages

const fs = require('fs');
const path = require('path');

const pages = [
  'about.html',
  'befor&after.html', 
  'blog.html',
  'contact.html',
  'faq.html',
  'protfolio.html'
  // Note: services.html is already updated manually
];

const animationCSS = '<link rel="stylesheet" href="style/animations.css">';
const animationJS = '<script src="script/animations.js"></script>';

pages.forEach(pageName => {
  const filePath = path.join(__dirname, '..', pageName);
  
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Add CSS link after the last existing CSS link
    if (!content.includes('style/animations.css')) {
      const lastCSSIndex = content.lastIndexOf('</head>');
      if (lastCSSIndex !== -1) {
        content = content.slice(0, lastCSSIndex) + 
                 '  ' + animationCSS + '\n' + 
                 content.slice(lastCSSIndex);
      }
    }
    
    // Add JS script before the closing body tag
    if (!content.includes('script/animations.js')) {
      const lastScriptIndex = content.lastIndexOf('</body>');
      if (lastScriptIndex !== -1) {
        content = content.slice(0, lastScriptIndex) + 
                 '  ' + animationJS + '\n' + 
                 content.slice(lastScriptIndex);
      }
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${pageName} with animations`);
    
  } catch (error) {
    console.error(`Error updating ${pageName}:`, error.message);
  }
});

console.log('Animation integration complete!');