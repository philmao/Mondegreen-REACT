import React from 'react';
import $ from 'jquery';

class AudioPlayer extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      player: false,
      audio_track: props.audio_track,
      start_time: props.start_time,
      duration: props.duration,
    };
    console.log(this.state.audio_track);
    console.log(this.state.start_time);
    console.log(this.state.duration);
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

    // $player.on('pause', (e) => {
    //   e.preventDefault();
    //   this.pause();
    // });

    $player.on('ended', (e) => {
      e.preventDefault();
      this.ended();
    });

    // $('.audio-player').bind('timeupdate', () => {
    //   console.log(this.currentTime); // jumps to 29th secs
    // });

    // $(document).on('keydown', (e) => {
    //   // Move currentTime forward and backward via arrow keys and play/pause via spacebar.
    //   if (e.keyCode === 39) {
    //     this.state.player.currentTime += 1;
    //   } else if (e.keyCode === 37) {
    //     this.state.player.currentTime -= 1;
    //   } else if (e.keyCode === 32 && this.state.player.paused === true) {
    //     e.preventDefault();
    //     this.state.player.play();
    //   } else if (e.keyCode === 32 && this.state.player.paused === false) {
    //     e.preventDefault();
    //     this.state.player.pause();
    //   }
    // });

    // $player.on('wheel', (e) => {
    //   e.preventDefault();
    //   e.stopPropagation();
    //   if (e.originalEvent.wheelDelta > 0) {
    //     this.state.player.currentTime += 1;
    //   } else {
    //     this.state.player.currentTime -= 1;
    //   }
    // });
  }

  // componentWillUnmount() {
  //   const $player = $('#' + this.props.id);
  //   $player.off('play');
  //   $player.off('pause');
  //   $(document).off('keydown');
  //   $player.off('wheel');
  // }

  getPlaybackTime(time) {
    // let hours = Math.floor(time / 3600);
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

  playLocation() {
    this.setState({ player: $('.player')[0] }, () => {
      // let playbackTime = this.getPlaybackTime(this.state.player.currentTime);
      const playbackTime = localStorage.getItem('ReactPlayer');

      if (playbackTime !== null) {
        this.state.player.currentTime = this.state.start_time;
      }
      this.state.player.play();
      const timeout = this.state.duration * 1000;
      console.log(timeout);
      // setTimeout(console.log('done'), timeout);
      setTimeout(() => {
        this.state.player.pause();
        console.log('done');
      },
      timeout);
    });
  }

  ended() {
    this.state.player.pause();

    const playbackTime = this.state.start_time;
    console.log(playbackTime);

    localStorage.setItem('ReactPlayer', playbackTime);
  }

  render() {
    return (
      <div className="audio-player">
        <audio controls className="player" preload="false">
          <source src={this.props.audio_track} type="audio/mp3" />
          <track kind="captions" />
        </audio>
      </div>
    );
  }
}

export default AudioPlayer;

