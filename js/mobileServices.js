function openPopup(parentDiv){
    const mobileSize = 992
    if(window.innerWidth <= mobileSize){
        let popupCon = parentDiv.find(".popup-outer-div");
        let popupBG = parentDiv.find(".popup-bg");
        let popupText = parentDiv.find(".popup-outer-div");

        popupCon.addClass("open");
        $("body").addClass("popup-open");

        console.log(parentDiv.find(".popup-outer-div"));
    }
}
function closePopup(parentDiv){

        parentDiv.removeClass("open");
        $("body").removeClass("popup-open");

}

// takes scrolbar into account
// console.log(document.documentElement.clientWidth);

// doesn't take scrollbar into account
// console.log(window.innerWidth);