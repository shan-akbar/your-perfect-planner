$('.diary-flip_next-btn').click(function(){
        let visible_pages = Number($(".diary-flip_page.last__page").data("pageindex"));

        let flipPage = $(this).closest('.diary-flip_page');
        let current_index = Number(flipPage.data("pageindex"));
    if(current_index <= visible_pages){
        flipPage.addClass('flipped');
        let current_zindex = flipPage.css('zIndex');
        flipPage.css('zIndex', 1000-Number(current_zindex));
        let page_index = Number(flipPage.data('pageindex'));
        let prev_index = page_index - 2;
        let next_index = page_index + 2;
        if(prev_index > 0){
            let prev_page = $(`.diary-flip_page__${prev_index}`);
            prev_page.addClass('display__none');
        }
        if(next_index < 1000){
            let next_page = $(`.diary-flip_page__${next_index}`);
            if(!(flipPage.hasClass("second_last__page") || flipPage.hasClass("last__page"))){
                next_page.removeClass('display__none');
            }
        }
    }

});

$('.diary-flip_back-btn').click(function(){
    let flipPage = $(this).closest('.diary-flip_page');
    flipPage.removeClass('flipped');
    let current_zindex = flipPage.css('zIndex');
    flipPage.css('zIndex', 1000-Number(current_zindex));
    let page_index = Number(flipPage.data('pageindex'));
    let prev_index = page_index - 2;
    let next_index = page_index + 2;
    if(prev_index > 0){
        let prev_page = $(`.diary-flip_page__${prev_index}`);
        prev_page.removeClass('display__none');
    }
    if(next_index < 1000){
        let next_page = $(`.diary-flip_page__${next_index}`);
        next_page.addClass('display__none');
    }
});