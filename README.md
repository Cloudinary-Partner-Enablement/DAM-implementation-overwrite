# Cloudinary Partners - Overwrite on Upload Practice

A small project to practice uploading assets to Cloudinary and handling overwrite instances.

## Prerequisites

1. A free Cloudinary account
2. Your Cloudinary URL from your dashboard and add your URL to `.env`
3. Review the [overwrite documentation](https://cloudinary.com/documentation/image_upload_api_reference#upload_optional_parameters)
4. Open the terminal to run the files and view the logged result
5. Open you asset library by logging in to your Cloudinary account to view the result of running each step

## Steps

---

### #1

Using the provided image in `app.js` , upload the file with the following parameters:

1. Set the public_id parameter to `"highland_cow"`
2. Set the overwrite parameter to `true`

### #2

Run the file again to upload the look for `existing: true` in the logged response.

`existing: true` means the binary matches so an overwrite of the file was not necessary.

### #3

Upload the next image with the same public_id of `highland_cow` and `overwrite: true`. Make sure to comment out all previous upload code.

In the logged response, look for `overwritten: true`. This means the file was overwritten as the binary was different.

### #4

Upload the image with a new `public_id` of your choice and `overwrite: false`. Make sure to comment out all previous upload code.

In the logged response, look for `existing : false` as this is a new `public_id` and no other asset exists with that new `public_id`.

### #5

Upload the next image with the same public_id from the previous step and `overwrite: false`. Make sure to comment out all previous upload code.

In the logged response, look for `existing: true`. This means a file with that `public_id` exists, but the file was not overwritten with this new image.
