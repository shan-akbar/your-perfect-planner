/**
 * Navigates the diary forward by one physical page (2 diary data pages)
 * @param {Event} e - The native browser click event payload
 */
function handleNextPage(e) {
    if (e) {
        e.preventDefault();
        e.stopPropagation();
    }

    let total_physical_pages = Math.ceil(diary_pages.length / 2);
    
    // Animation lock & boundaries protection
    if (is_animating || current_physical_page >= total_physical_pages - 1) return;

    is_animating = true;

    // The middle item (index 2) in our 5-element viewport is always the upcoming page facing right
    let activePage = document.querySelectorAll('.diary-flip_page')[2];
    if (activePage) {
        activePage.classList.add('flipped');
    }

    // Delay data shift until the 3D CSS transition finishes flipping
    setTimeout(() => {
        current_physical_page++;
        updateDOMWindow();
        is_animating = false;
    }, FLIP_ANIMATION_SPEED);
}

/**
 * Navigates the diary backward by one physical page (2 diary data pages)
 * @param {Event} e - The native browser click event payload
 */
function handlePrevPage(e) {
    if (e) {
        e.preventDefault();
        e.stopPropagation();
    }

    // Animation lock & boundary protection
    if (is_animating || current_physical_page <= 0) return;

    is_animating = true;

    // The item at index 1 is always the immediate previous left page waiting to turn back
    let prevPage = document.querySelectorAll('.diary-flip_page')[1];
    if (prevPage) {
        prevPage.classList.remove('flipped');
    }

    // Delay data shift backward until the element settles
    setTimeout(() => {
        current_physical_page--;
        updateDOMWindow();
        is_animating = false;
    }, FLIP_ANIMATION_SPEED);
}