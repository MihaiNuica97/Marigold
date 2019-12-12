startSlideshow();

function startSlideshow()
{
getSlideshowImages();
slideshowLoop();

}

function slideshowLoop()
{
    setInterval(()=>{
        let firstImage = $('.slideshow-inner-div:first');
        let newFirstImage = firstImage.next();
        // bring in next image 
        newFirstImage.removeClass("hidden");
        // once the animation has ended bring the image underneath to the back of th queue
        setTimeout(()=>{
            firstImage.addClass("hidden");
            $('#slideshow-outer-div').append(firstImage)
        },1000);
    }, 3000);
}

function getSlideshowImages()
{
    // dynamically takes all images in the source folder and puts them in the slideshow
    let src = "./img/slideshow/";

    let imageTitles = [];
    $.ajax({
        url: src,
        success: function(data){
            $(data).find("a:contains(.jpg)").each(function () {
                imageTitles.push(this.title);
            });
            for(let i in imageTitles){
                let innerDiv = $('<div class="slideshow-inner-div hidden"> </div>');
                if(i==0){
                    innerDiv.removeClass("hidden");
                }
                let image = $('<img class="slideshow-img" src='+ src + imageTitles[i] +'>');
                image.appendTo(innerDiv);
                innerDiv.appendTo($('#slideshow-outer-div'));
            }
        }
    });
}