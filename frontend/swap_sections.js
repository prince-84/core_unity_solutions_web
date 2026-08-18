const fs = require('fs');
const path = require('path');

const aboutPath = path.join(__dirname, 'src', 'app', 'about', 'page.tsx');
let content = fs.readFileSync(aboutPath, 'utf8');

const clientsStartStr = '      {/* Our Clients Section */}';
const industriesStartStr = '      {/* Fourth Section: Industries We Serve */}';

const clientsStart = content.indexOf(clientsStartStr);
const industriesStart = content.indexOf(industriesStartStr);

if (clientsStart !== -1 && industriesStart !== -1) {
  // Extract clients section
  const clientsEndStr = '      </section>\n\n      {/* Fourth Section';
  let clientsEnd = content.indexOf('</section>', clientsStart) + 10;
  
  // It's possible that the next section starts right after, let's find the exact end of clients section
  // It ends right before Industries section starts.
  let clientsContent = content.substring(clientsStart, industriesStart);
  
  // Extract industries section
  const footerStart = content.indexOf('      {/* Footer is pushed to the bottom of the page */}');
  let industriesContent = content.substring(industriesStart, footerStart);
  
  // Now reconstruct
  const prefix = content.substring(0, clientsStart);
  const suffix = content.substring(footerStart);
  
  const newContent = prefix + industriesContent + '\n' + clientsContent + suffix;
  
  fs.writeFileSync(aboutPath, newContent);
  console.log('Successfully swapped sections.');
} else {
  console.log('Could not find sections.');
}
