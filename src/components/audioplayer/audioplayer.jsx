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
  }

  componentDidMount() {
    const $player = $('.player');

    // Event listeners
    $player.on('play', (e) => {
      e.preventDefault();
      this.playLocation();
    });
  }

  playLocation() {
    this.setState({ player: $('.player')[0] }, () => {
      const playbackTime = localStorage.getItem('ReactPlayer');

      if (playbackTime !== null) {
        this.state.player.currentTime = this.state.start_time;
      }

      this.state.player.play();

      const timeout = this.state.duration * 1000;

      setTimeout(() => {
        this.state.player.pause();
      }, timeout);
    });
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

