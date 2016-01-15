



/**/
/*******************************/
function verticalAlign() {
    $(".js-vertical-center").flexVerticalCenter();
}




function startMap() {
    if ($("#js-map").length) {
        var map = new google.maps.Map(document.getElementById('js-map'), {
            center: new google.maps.LatLng(44.5403, -78.5463),
            zoom: 8,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false
        });
    }


}

