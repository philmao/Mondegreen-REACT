import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText, Input, FormGroup, Form, Label } from 'reactstrap';

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
    console.log(`%c User input string = ${userInput} `, 'color: white; background: blue;');
    console.log(`%c Song Title = ${songTitle} `, 'color: white; background: green;');
  }

  handleChange(event) {
    this.props.updateInput(event.target.value);
  }

  // catch enter clicks
  handleKeyPress(target) {
    if (target.charCode === 13) {
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
      </div>
    );
  }
}
