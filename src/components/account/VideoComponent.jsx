'use strict';

import React, { Component } from 'react';
import '../../css/react.scss';

class Video extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videoURL: 'http://philipmao.com/video/632333283.mp4',
    };
  }

  render() {
    return (
      <video id="background-video" loop autoPlay>
        <source src={this.state.videoURL} type="video/mp4" />
        <track kind="captions" />
      </video>
    );
  }
}

export default Video;
