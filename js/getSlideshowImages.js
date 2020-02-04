function getSlideshowImages()
{
    // dynamically takes all images in the source folder and puts them in the slideshow
    let src = "img/slideshow/";

    let imageTitles = [];
    $.ajax({
        url: src,
        success: function(data){
            $(data).find("a:contains(.jpg)").each(function () {
                let filename = this.href.replace(window.location.host, "").replace("http://", "");
                imageTitles.push(filename);
            });
            for(let i in imageTitles){
                let innerDiv = $('<div class="slideshow-inner-div right"> </div>');
                if(i==0){
                    // left img
                    innerDiv.removeClass("right");
                    innerDiv.addClass("left");
                }
                if(i==1){
                    // mid img
                    innerDiv.removeClass("right");
                }
                let image = $('<img class="slideshow-img" src='+ imageTitles[i] +'>');
                image.appendTo(innerDiv);
                innerDiv.appendTo($('#slideshow-outer-div'));
            }
        }
    });
}