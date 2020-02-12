startSlideshow();

function startSlideshow(){

    getSlideshowImages();
    slideshowLoop();

}

function slideshowLoop()
{
    setInterval(()=>{
        let left = $('.slideshow-inner-div:first');
        let mid = left.next();
        
        mid.removeClass("right");
        left.addClass("left");
        // once the animation has ended bring the image underneath to the back of th queue
        setTimeout(()=>{
            left.addClass("right");
            left.removeClass("left");
            $('#slideshow-outer-div').append(left)
        },1000);
    }, 3000);
}

