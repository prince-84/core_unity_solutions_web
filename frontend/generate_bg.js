const fs = require('fs');
let paths = '';
for(let i=-20; i<40; i++) {
  let yOffset = i * 25;
  // A wave that goes down, then up, then down
  let d = `M0,${100 + yOffset} C300,${250 + yOffset*1.15} 700,${-50 + yOffset*0.85} 1000,${150 + yOffset} L1000,${165 + yOffset} C700,${-35 + yOffset*0.85} 300,${265 + yOffset*1.15} 0,${115 + yOffset} Z`;
  paths += `<path d="${d}" fill="#f3f4f6"/>`;
}
const svg = `<svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><rect width="100%" height="100%" fill="white"/>${paths}</svg>`;
fs.writeFileSync('public/zebra_bg.svg', svg);
console.log('Done!');
