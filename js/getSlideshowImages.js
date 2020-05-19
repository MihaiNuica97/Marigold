function getSlideshowImages()
{
    // dynamically takes all images in the source folder and puts them in the slideshow
    let src = "getSlideshow.php";

    let imageTitles = [];
    $.get({
        url: src,
        success: function(data){
            let obj = JSON.parse(data);
            for(let elem in obj){
                console.log(obj[elem]);
                imageTitles.push("./img/slideshow/"+obj[elem]);
            }
            for(let i in imageTitles){
                let innerDiv = $('<div class="slideshow-inner-div right"> </div>');
                if(i==0){
                    // left img
                    innerDiv.removeClass("right");
                }
                let image = $('<img class="slideshow-img" src='+ imageTitles[i] +'>');
                image.appendTo(innerDiv);
                innerDiv.appendTo($('#slideshow-outer-div'));
            }
        }
    });
}