window.addEventListener('load', fn);
function fn() {
    // 点击播放按钮播放小视频
    var videoClose = document.querySelector('.video-close');
    var videoPlayer = document.querySelector('.video-player');
    var closePv = videoPlayer.querySelector('.close-pv');
    videoClose.addEventListener('click', function () {
        videoPlayer.style.display = 'block';
    })
    closePv.addEventListener('click', function () {
        videoPlayer.style.display = 'none';
    })
    var winkWrap = document.querySelector('.wink-wrap');
    var closeWink = document.querySelector('.close-wink');
    closeWink.addEventListener('click', function () {
        winkWrap.style.display = 'none';
    })
}