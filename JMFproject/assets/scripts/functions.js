/*UPDATE FRONT END*/
/******************************/
function updateLayout() {

    updateIsotope();
}




/**/
/*******************************/
function verticalAlign() {
    $(".js-vertical-center").flexVerticalCenter();
}


/*ISOTOPE*/
/*******************************/
function bindIsotope() {
    $('.js-isotope-wrapper').isotope({ itemSelector: '.js-isotope-item' });
}

function bindIsotope() {
    $('.js-isotope-container').isotope({
        itemSelector: '.js-isotope-item',
        layoutMode: 'packery'
    });

    $('.js-isotope-filters').on('click', '.js-filter', function () {
        var filterValue = $(this).attr('data-filter');
        // use filterFn if matches value

        $('.js-isotope-container').isotope({ filter: filterValue });
    });
}



