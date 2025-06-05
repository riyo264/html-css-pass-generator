const avatar = document.getElementById("avatar");
const imageView = document.getElementById("img-view");
const uploadIcon = document.getElementById("upload-icon");
const uploadGuide = document.getElementById("upload-guide");
const removeImage = document.getElementById("rmv-img");

avatar.addEventListener("change", uploadImage);
removeImage.addEventListener("click", removesImage);

function uploadImage() {
    let imgLink = URL.createObjectURL(avatar.files[0]);
    
    // Hide the upload icon
    uploadIcon.style.display = "none";
    uploadGuide.style.visibility = "hidden";
    removeImage.style.visibility = "visible";
    
    // Set uploaded image as background

    imageView.style.backgroundImage = `url(${imgLink})`;
    imageView.style.backgroundSize = "cover";
    imageView.style.backgroundPosition = "center";
}

function removesImage() {
    uploadGuide.style.visibility = "visible";
    removeImage.style.visibility = "hidden";
    uploadIcon.style.display = "block";
    imageView.style.backgroundImage = "none";
}
