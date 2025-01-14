document.addEventListener("DOMContentLoaded", function() {
    const imageContainer = document.querySelector(".image-container");
    const prevButton = document.querySelector(".prev-button");
    const nextButton = document.querySelector(".next-button");

    let currentIndex = 0;

    // Array of image sources
    const images = ["image1.jpg", "image2.jpg" ,"image3.jpg", "image4.jpg" ,"image5.jpg", "image6.jpg" ,"image7.jpg", "image8.jpg" ,"image9.jpg", "image10.jpg" ,"image11.jpg", "image12.jpg" ,"image13.jpg", "image14.jpg" ,"image15.jpg", "image16.jpg" ,"image17.jpg", "image18.jpg" ,"image19.jpg", "image20.jpg" , "image21.jpg" , ];

    function showImage(index) {
        imageContainer.style.transform = `translateX(-${index * 100}%)`;
    }

    prevButton.addEventListener("click", function() {
        if (currentIndex > 0) {
            currentIndex--;
            showImage(currentIndex);
        }
    });

    nextButton.addEventListener("click", function() {
        if (currentIndex < images.length - 1) {
            currentIndex++;
            showImage(currentIndex);
        }
    });

    showImage(currentIndex);
});
