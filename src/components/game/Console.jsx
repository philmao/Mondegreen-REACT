import React, { Component } from 'react';
import { Card, CardTitle, Label, Button, CardText, Input, FormGroup, Form } from 'reactstrap';
import '../../css/react.scss';
import AudioPlayer from '../audioplayer/audioplayer';

export default class Console extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.checkInput = this.checkInput.bind(this);
  }

  checkInput() {
    const { userInput } = this.props;
    const songTitle = this.props.question.song_title;
    console.log(songTitle);


    if (userInput.toLowerCase().indexOf(songTitle.toLowerCase()) > -1) {
      console.log(true);
      this.props.next();
    }
    console.log(`User input string = ${userInput}`);
    console.log(`Misheard string = ${misheard_string}`);
    console.log(`Correct lyrics = ${correct_lyrics}`);
    console.log(`%c User input string = ${userInput} `, 'color: white; background: blue;');
    console.log(`%c Song Title = ${songTitle} `, 'color: white; background: green;');
  }

  handleChange(event) {
    this.props.updateInput(event.target.value);
  }

  // catch enter clicks
  handleKeyPress(event) {
    // event.preventDefault();
    if (event.which === 13) {
      event.preventDefault();
      this.checkInput();
    }
  }

  render() {
    const { question } = this.props;
    console.log('inConsole:', this.props);

    return (
      <div className="container">
        <Card block inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
          <h3>Identfy the song this misheard lyric belongs to</h3>
          <br />
          <CardTitle>Misheard Lyric: {question.misheard_lyric}</CardTitle>
          <CardText>Artist: {question.artist}
          </CardText>
          <br />
          <Form>
            <FormGroup>
              <Label for="userInput">Input Answer Below</Label>
              <Input type="text" autoComplete="off" name="userInput" id="userInput" onKeyPress={this.handleKeyPress} value={this.props.userInput} onChange={this.handleChange} />
            </FormGroup>
            <Button onClick={this.checkInput}>Submit</Button>
          </Form>
        </Card>
        <AudioPlayer
          audio_track={question.audio_track}
          start_time={question.start_time}
          duration={question.duration}
        />
      </div>
    );
  }
}
