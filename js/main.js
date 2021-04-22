/* function init() {
    var menu = document.querySelector('.menu');
    var menuHeight = document.querySelector('.menuHeight');
    var menuOffset = menu.offsetTop;

    function checkMenu() {
        var scrollTop = window.scrollY;
        var menuH = menu.offsetHeight;

        if (scrollTop >= menuOffset) {
            menu.classList.add('menu--fixed');

            menuHeight.style.height = menuH + 'px';
        } else {
            menu.classList.remove('menu--fixed');

            menuHeight.style.height = 0;
        }
    }

    window.addEventListener('scroll', checkMenu);
    window.addEventListener('resize', checkMenu);
}

window.addEventListener('load', init); */