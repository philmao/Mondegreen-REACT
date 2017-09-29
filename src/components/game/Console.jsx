import React, { Component } from 'react';
import { Card, CardHeader, CardBlock, CardFooter, Button, CardText, Input, FormGroup, Form } from 'reactstrap';
import '../../css/react.scss';
import AudioPlayer from '../audioplayer/audioplayer';

export default class Console extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.checkInput = this.checkInput.bind(this);
  }

  checkInput() {
    const { userInput } = this.props;
    const { misheard_string } = this.props.question;
    const { correct_lyrics } = this.props;


    if (userInput.indexOf(misheard_string) > -1) {
      console.log(true);
      this.props.next();
    }
    console.log(`User input string = ${userInput}`);
    console.log(`Misheard string = ${misheard_string}`);
    console.log(`Correct lyrics = ${correct_lyrics}`);
    console.log(`%c User input string = ${userInput} `, 'color: white; background: blue;');
    console.log(`%c Misheard string = ${misheard_string} `, 'color: white; background: green;');
  }

  handleChange(event) {
    this.props.updateInput(event.target.value);
  }

  render() {
    const { question } = this.props;
    console.log('inConsole:', this.props);

    return (
      <div className="container">
        <h1 className="title">Mondegreen</h1>
        <p className="subtitle">Guess the correct lyrics using the misheard lyrics.</p>
        <Card>
          <CardHeader>The Misheard Lyric by {question.artist}</CardHeader>
          <CardBlock>
            <CardText>{question.misheard_lyric}</CardText>
          </CardBlock>
          <CardFooter>
            <Form>
              <FormGroup>
                <Input type="text" autoComplete="off" name="userInput" id="userInput" value={this.props.userInput} onChange={this.handleChange} placeholder="Write Correct Lyrics Here" />
              </FormGroup>
            </Form>
            <Button className="btn btn-success float-left" onClick={this.checkInput}>Submit</Button>
            <Button className="btn btn-success float-right" onClick={this.props.next} >Next</Button>
          </CardFooter>
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
