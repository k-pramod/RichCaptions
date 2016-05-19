$(document).ready(function() {
    $("#player-video-speed").change(function() {
        player.setPlaybackRate(parseFloat($(this).val()));
    });

    $("#player-play-toggle").click(function() {
        var playerState = player.getPlayerState();

        if (playerState === 1) {
            player.pauseVideo();
            $(this).html("<i class='glyphicon glyphicon-play'></i>");
        } else if (playerState === 2) {
            player.playVideo();
            $(this).html("<i class='glyphicon glyphicon-pause'></i>");
        }
    });

    $("#player-skip-backward").click(function() {
        player.seekTo(player.getCurrentTime() - 5, true);
    });

    $("#player-skip-forward").click(function() {
        player.seekTo(player.getCurrentTime() + 5, true);
    });
});

$(document).ready(function() {

    var elements = $(".panel-toggle-body");
    $.each(elements, function(index, element) {
        $(this).parent().next().slideUp();
    });

    $(".panel-toggle-body").click(function() {
        if ($(this).data("show-status") === "hidden") { // then show
            $(this).parent().next().slideDown();
            $(this).data("show-status", "shown");
            $(this).text("hide");
        } else {
            $(this).parent().next().slideUp();
            $(this).data("show-status", "hidden");
            $(this).text("show");
        }
    });
});