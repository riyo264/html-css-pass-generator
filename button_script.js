const avatar = document.getElementById("avatar");
const imageView = document.getElementById("img-view");
const uploadIcon = document.getElementById("upload-icon");

avatar.addEventListener("change", uploadImage);

function uploadImage() {
    let imgLink = URL.createObjectURL(avatar.files[0]);
    
    // Hide the upload icon
    uploadIcon.style.display = "none";
    
    // Set uploaded image as background
    imageView.style.backgroundImage = `url(${imgLink})`;
    imageView.style.backgroundSize = "cover";
    imageView.style.backgroundPosition = "center";
}
