// generate-logo.js
const { createCanvas } = require("canvas");
const fs = require("fs");

// Image size (ideal for OG preview: 1200x630)
const width = 1200;
const height = 630;

const canvas = createCanvas(width, height);
const ctx = canvas.getContext("2d");

// Transparent background
ctx.clearRect(0, 0, width, height);

// Gradient colors (matching your Tailwind gradient)
const gradient = ctx.createLinearGradient(0, 0, width, 0);
gradient.addColorStop(0, "rgba(251,191,36,0.4)"); // amber-500/40
gradient.addColorStop(1, "rgba(251,191,36,0.9)"); // amber-500/90

// Apply gradient to text
ctx.fillStyle = gradient;

// Set font (bold, center aligned)
ctx.font = "bold 180px Arial"; // Adjust font size for width
ctx.textAlign = "center";
ctx.textBaseline = "middle";

// Draw the text in the center
ctx.fillText("Keplinus", width / 2, height / 2);

// Save as PNG in /public folder
const buffer = canvas.toBuffer("image/png");
fs.writeFileSync("public/logo-og.png", buffer);

console.log("✅ Keplinus gradient logo generated: public/logo-og.png");
