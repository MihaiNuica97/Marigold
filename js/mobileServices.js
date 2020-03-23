function openPopup(parentDiv){
    const mobileSize = 992
    if(window.innerWidth <= mobileSize){
        let popupCon = parentDiv.find(".popup-outer-div");
        let popupBG = parentDiv.find(".popup-bg");
        let popupText = parentDiv.find(".popup-outer-div");
        console.log(parentDiv.find(".popup-outer-div"));
    }
}

// takes scrolbar into account
// console.log(document.documentElement.clientWidth);

// doesn't take scrollbar into account
// console.log(window.innerWidth);