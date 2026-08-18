const fs = require('fs');
const path = require('path');

const servicesPath = path.join(__dirname, 'src', 'app', 'services', 'page.tsx');
const aboutPath = path.join(__dirname, 'src', 'app', 'about', 'page.tsx');

const servicesContent = fs.readFileSync(servicesPath, 'utf8');
const aboutContent = fs.readFileSync(aboutPath, 'utf8');

// Extract from "      {/* Fourth Section: Industries We Serve */}" to "          </div>\n\n          {/* CTA Banner */}"
const startIndex = servicesContent.indexOf('      {/* Fourth Section: Industries We Serve */}');
const endIndex = servicesContent.indexOf('          {/* CTA Banner */}');

if (startIndex !== -1 && endIndex !== -1) {
  // We want the section closing tag as well
  // The CTA banner is inside the section, so we should extract until just before CTA banner, 
  // then close the div and section, OR we can extract the whole section and trim CTA.
  
  // Actually, the section ends at line 386 in services/page.tsx (after CTA).
  // Let's just extract the section and rebuild it without the CTA banner.
  
  const sectionStart = servicesContent.indexOf('      {/* Fourth Section: Industries We Serve */}');
  const endOfGrid = servicesContent.indexOf('          </div>\n\n          {/* CTA Banner */}');
  
  if (sectionStart !== -1 && endOfGrid !== -1) {
    let snippet = servicesContent.substring(sectionStart, endOfGrid) + '        </div>\n      </section>\n';
    
    // Insert into about/page.tsx before Footer
    const footerIndex = aboutContent.indexOf('      {/* Footer is pushed to the bottom of the page */}');
    
    if (footerIndex !== -1) {
      const newAboutContent = aboutContent.substring(0, footerIndex) + snippet + '\n' + aboutContent.substring(footerIndex);
      fs.writeFileSync(aboutPath, newAboutContent);
      console.log('Successfully copied Industries We Serve section.');
    } else {
      console.log('Could not find Footer in about page.');
    }
  } else {
    console.log('Could not find section boundaries in services page.');
  }
} else {
  console.log('Could not find indices.');
}
