'use strict';

import React, { Component } from 'react';

class Video extends Component {
    constructor (props) {
        super(props);

        this.state = {
            videoURL: 'https://15-lvl3-pdl.vimeocdn.com/01/4246/4/121231934/342466861.mp4?expires=1506661749&token=0724c6beb6d3ebf873bde'
        }
    }

    render () {
        return (
            <video id="background-video" loop autoPlay>
                <source src={this.state.videoURL} type="video/mp4" />
                <source src={this.state.videoURL} type="video/ogg" />
                Your browser does not support the video tag.
            </video>
        )
    }
};

export default Video;