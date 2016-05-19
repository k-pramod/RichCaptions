function onYouTubeIframeAPIReady() {
    player = new YT.Player("player", {
        height: "390",
        width: "640",
        videoId: $("#player").data("resource-id"),
        events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange
        }
    })
}

function stopVideo() {
    player.stopVideo()
}

function onPlayerReady(e) {
    e.target.playVideo()
}

function onPlayerStateChange(e) {
    e.data != YT.PlayerState.PLAYING || done
}
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player, done = !1;