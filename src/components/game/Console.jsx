import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import AudioPlayer from '../audioplayer/audioplayer';

export default class Console extends Component {
  render() {
    const { question } = this.props;
    console.log(this.props);

    return (
      <div className="container">
        <Card block inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
          <CardTitle>Misheard Lyric: {question.misheard_lyric}</CardTitle>
          <CardText>Artist: {question.artist}
          </CardText>
          <Button onClick={this.props.next} >Button</Button>
        </Card>
        <AudioPlayer />
      </div>
    );
  }
}

