// Require Dotenv
require("dotenv").config();
// Require the cloudinary library
const cloudinary = require("cloudinary").v2;

// Return "https" URLs by setting secure: true
cloudinary.config({
  secure: true,
});

////////////////////////////////////////////
// Step #1 & #2
// Step 1 should result: overwritten: undefined, existing: undefined
// Step 2 should result: overwritten: undefined, existing: true
// IMAGE: https://cdn.pixabay.com/photo/2024/04/06/09/18/highland-cow-8678950_1280.jpg
// INSERT CODE BELOW

////////////////////////////////////////////
// Step #3
// Step 3 should result: overwritten: true,      existing: undefined
// IMAGE: https://cdn.pixabay.com/photo/2014/08/30/18/19/cow-431729_1280.jpg
// INSERT CODE BELOW

////////////////////////////////////////////
// Step #4
// Step 4: overwritten: undefined, existing: false
// IMAGE: https://cdn.pixabay.com/photo/2022/02/25/02/26/highland-cattle-7033417_1280.jpg
// INSERT CODE BELOW

////////////////////////////////////////////
// Step #5
// Step 5: overwritten: undefined, existing: true
// IMAGE: https://cdn.pixabay.com/photo/2022/02/25/02/26/highland-cattle-7033417_1280.jpg
// INSERT CODE BELOW
