import React, { Component } from 'react';
import { Card, CardHeader, CardBlock, Button, CardText, InputGroup, Input } from 'reactstrap';
import '../../css/react.scss';
import AudioPlayer from '../audioplayer/audioplayer';

export default class Console extends Component {
  render() {
    const { question } = this.props;
    console.log('inConsole:', this.props);

    return (
      <div className="container">
        <h1 className="title">Mondegreen</h1>
        <p className="subtitle">Guess the name of this song with this misheard lyrics.</p>
        <Card>
          <CardHeader>Guess the Misheard Lyric for Artist, {question.artist}</CardHeader>
          <CardBlock>
            <CardText>{question.misheard_lyric}</CardText>
          </CardBlock>
        </Card>
        <InputGroup>
          <Input placeholder="Write Your Guess Here" />
        </InputGroup>
        <Button className="btn btn-success" onClick={this.props.next} >Proceed</Button>
        <AudioPlayer
          audio_track={question.audio_track}
          start_time={question.start_time}
          duration={question.duration}
        />
      </div>
    );
  }
}
