const images = document.querySelectorAll(".image-box img");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentIndex = 0;

// Open Lightbox
images.forEach((img, index) => {

    img.addEventListener("click", () => {
        currentIndex = index;
        showImage();
        lightbox.style.display = "flex";
    });

});

// Show Current Image
function showImage(){
    lightboxImg.src = images[currentIndex].src;
}

// Next Image
nextBtn.addEventListener("click", () => {

    currentIndex++;

    if(currentIndex >= images.length){
        currentIndex = 0;
    }

    showImage();
});

// Previous Image
prevBtn.addEventListener("click", () => {

    currentIndex--;

    if(currentIndex < 0){
        currentIndex = images.length - 1;
    }

    showImage();
});

// Close Lightbox
closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

// Close when clicking outside
lightbox.addEventListener("click",(e)=>{

    if(e.target !== lightboxImg &&
       e.target !== nextBtn &&
       e.target !== prevBtn){

        lightbox.style.display = "none";
    }

});

// Filter Functionality

const filterButtons = document.querySelectorAll(".filter-buttons button");
const imageBoxes = document.querySelectorAll(".image-box");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        document.querySelector(".active").classList.remove("active");
        button.classList.add("active");

        const filter = button.getAttribute("data-filter");

        imageBoxes.forEach(box => {

            if(filter === "all" || box.classList.contains(filter)){
                box.style.display = "block";
            }

            else{
                box.style.display = "none";
            }

        });

    });

});