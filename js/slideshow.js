startSlideshow();

function startSlideshow()
{
getSlideshowImages();
slideshowLoop();

}

function slideshowLoop()
{
    setInterval(()=>{
        // hide first image and put it at the end of the queue
        let firstImage = $('.slideshow-inner-div:first');
        let newFirstImage = firstImage.next();
        newFirstImage.removeClass("hidden");
        setTimeout(()=>{
            firstImage.addClass("hidden");
            $('#slideshow-outer-div').append(firstImage)
        },1000);


        // show new first image
        // let newFirstImage = $('.slideshow-inner-div:first');


        }, 3000);
}

function getSlideshowImages()
{
    // 
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