// hideShow.js

const hideShow = () => {
    const recentList = document.getElementsByClassName('recentlyViewed');
    const screenDark = document.getElementsByClassName('screenDark');
    // changing viewed or hidden based on className
    recentList[0].classList.toggle('recentlyViewedHidden');
    recentList[0].classList.toggle('recentlyViewedShow');
    screenDark[0].classList.toggle('screenDarkHidden');
    screenDark[0].classList.toggle('screenDarkShow');
}

export default hideShow;