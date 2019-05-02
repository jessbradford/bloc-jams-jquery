class Helper {
  playPauseAndUpdate(song) {
    player.playPause(song);
    if (player.playPause !== 'playing') { return; }
    $('#time-control .total-time').text(totalTime);
  }
}

const helper = new Helper();
