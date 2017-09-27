import React from 'react';

class AudioPlayer extends React.Component {

  static getPlaybackTime(time) {
    // const hours = Math.floor(time / 3600);
    let minutes = Math.floor(time / 60);
    if (minutes > 59) {
      minutes = Math.floor(time / 60) - 60;
    }

    let seconds = Math.round(time - (minutes * 60));
    if (seconds > 3599) {
      seconds = Math.round(time - (minutes * 60)) - 3600;
    }

    return time;
  }

  static ended() {
    // Set playback_time to 0.
    localStorage.setItem('ReactPlayer', 0);
  }

  constructor(props) {
    super(props);
    this.state = {
      player: false,
    };
  }

  componentDidMount() {
    const $player = $('.player');

    /**
      * Have to add media event listeners here.
      *
    */
    $player.on('play', (e) => {
      e.preventDefault();
      this.playLocation();
    });

    $player.on('pause', (e) => {
      e.preventDefault();
      this.pause();
    });

    $player.on('ended', (e) => {
      e.preventDefault();
      this.ended();
    });

    $(document).on('keydown', (e) => {
      // Move currentTime forward and backward via arrow keys and play/pause via spacebar.
      if (e.keyCode === 39) {
        this.state.player.currentTime += 1;
      } else if (e.keyCode === 37) {
        this.state.player.currentTime -= 1;
      } else if (e.keyCode === 32 && this.state.player.paused === true) {
        e.preventDefault();
        this.state.player.play();
      } else if (e.keyCode === 32 && this.state.player.paused === false) {
        e.preventDefault();
        this.state.player.pause();
      }
    });

    $player.on('wheel', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (e.originalEvent.wheelDelta > 0) {
        this.state.player.currentTime += 1;
      } else {
        this.state.player.currentTime -= 1;
      }
    });
  }

  componentWillUnmount() {
    const $player = $('player');
    $player.off('play');
    $player.off('pause');
    $(document).off('keydown');
    $player.off('wheel');
  }

  playLocation() {
    this.setState({ player: $('.player')[0] }, () => {
      // const playbackTime = this.getPlaybackTime(this.state.player.currentTime);
      const playbackTime = localStorage.getItem('ReactPlayer');

      if (playbackTime !== null) {
        this.state.player.currentTime = playbackTime;
      }
      this.state.player.play();
    });
  }

  pause() {
    const playbackTime = this.getPlaybackTime(this.state.player.currentTime);

    localStorage.setItem('ReactPlayer', playbackTime);
  }

  render() {
    return (
      <audio controls className="player" preload="false">
        <source src="http://www.nihilus.net/soundtracks/Static%20Memories.mp3" />
        <track kind="captions" />
      </audio>
    );
  }
}

export default AudioPlayer;

