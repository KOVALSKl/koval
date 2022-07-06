$(document).ready(function () {
    const menuLinks = document.querySelectorAll('.menu_link[data-goto]');
    console.log(`menuLinks: ${menuLinks}`);
    if (menuLinks.length > 0) {
        menuLinks.forEach(menuLink => {
            console.log(`menu: ${menuLink}`);
            menuLink.addEventListiner('click', (e) => {
                const menuItem = e.target;
                if (menuItem.dataset.goto && $(menuItem.dataset.goto)) {
                    const gotoBlock = $(menuItem.dataset.goto);
                    const gotoBlockWay = gotoBlock.getBoundingClientRect().top + scrollY - $(header).offsetHeight;

                    window.scrollTo({
                        top: gotoBlockWay,
                        behavior: "smooth"
                    });
                    e.preventDefault();
                }
            })
        })
    }
});