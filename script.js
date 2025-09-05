const imageContainer=document.querySelectorAll(".images");
const mainFrameImg = document.querySelector(".display .show-image");

imageContainer.forEach( (img)=>{
        img.addEventListener("mouseover",evt=>{
            
            mainFrameImg.src=img.src;

        });
});

