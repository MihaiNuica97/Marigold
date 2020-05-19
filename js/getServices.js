generateServices();

function generateServices(){
    let template = $(".services-outer-div").first();
    let pageContent = $("#page-content");
    pageContent.attr("style", "grid-template-rows: repeat("+services.length+", auto)")

    for(i in services){
        let service = services[i];
        let clone = template.clone();

        // alternate left and right column
        if(i % 2 != 0){
            clone.addClass("right");
        }
        let row = +i + +1;
        // row placement
        clone.attr("style","grid-row: " + row);


        // set image source
        clone.find(".services-img").attr("src","./img/services/" + service.img +  ".jpg" );

        // set service text
        clone.find(".services-text-div").html("<p>" + service.text +"</p>");

        // set popup  text
        let popupCon = clone.find(".services-popup-inner-div");
        for(j in service.popup){
            let item = $("<p>" + service.popup[j] + "</p>");
            popupCon.append(item);
        }

        clone.attr('onClick', 'openPopup($(this))')
        let popupOuter =  clone.find(".popup-outer-div");
        popupOuter.on('click', function(event){
            //stop the event bubbling up to the parent
            event.stopPropagation();
          });
        popupOuter.attr('onClick', 'closePopup($(this))');

        clone.appendTo(pageContent);
        clone.removeClass("hidden");

    }
    template.remove();
}
