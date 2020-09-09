const media = window.matchMedia('(min-width: 768px)');
const changeSize = mql => {
    mql.matches 
    ? 
    document.querySelector('.hero__img').src = '../images/hero-desktop.jpg' 
    : 
    document.querySelector('.hero__img').src = '../images/hero-mobile.jpg' 
}


media.addListener(changeSize);
changeSize(media);
