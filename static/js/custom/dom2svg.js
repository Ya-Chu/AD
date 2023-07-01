import { documentToSVG, elementToSVG, inlineResources, formatXML } from 'dom-to-svg';

// Capture the whole document
const svgDocument = documentToSVG(document);

// Capture specific element
// const svgDocument = elementToSVG(document.querySelector('#my-element'));

// Inline external resources (fonts, images, etc) as data: URIs
await inlineResources(svgDocument.documentElement);

// Get SVG string
const svgString = new XMLSerializer().serializeToString(svgDocument);
console.log(svgString);