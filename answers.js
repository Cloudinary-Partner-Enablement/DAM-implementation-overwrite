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
// INSERT CODE BELOW
cloudinary.uploader
  .upload(
    "https://cdn.pixabay.com/photo/2024/04/06/09/18/highland-cow-8678950_1280.jpg",
    { public_id: "highland_cow", overwrite: true }
  )
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

////////////////////////////////////////////
// Step #3
// INSERT CODE BELOW
cloudinary.uploader
  .upload(
    "https://cdn.pixabay.com/photo/2014/08/30/18/19/cow-431729_1280.jpg",
    { public_id: "highland_cow", overwrite: true }
  )
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

////////////////////////////////////////////
// Step #4
// INSERT CODE BELOW
cloudinary.uploader
  .upload(
    "https://cdn.pixabay.com/photo/2022/02/25/02/26/highland-cattle-7033417_1280.jpg",
    { public_id: "highland_cow", overwrite: false }
  )
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

////////////////////////////////////////////
// Step #5
// INSERT CODE BELOW
cloudinary.uploader
  .upload(
    "https://cdn.pixabay.com/photo/2022/02/25/02/26/highland-cattle-7033417_1280.jpg",
    { public_id: "flowers", overwrite: false }
  )
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
