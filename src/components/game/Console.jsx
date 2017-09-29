import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText, InputGroup, InputGroupButton, Input, FormGroup, Form, Label } from 'reactstrap';

export default class Console extends Component {

  render() {
    const { question } = this.props;
    console.log('inConsole:', this.props);

    return (
      <div className="container">
        <Card block inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
          <CardTitle>Misheard Lyric: {question.misheard_lyric}</CardTitle>
          <CardText>Artist: {question.artist}
          </CardText>
          <br />
          <Form>
            <FormGroup>
              <Label for="userInput">Email</Label>
              <Input type="text" name="userInput" id="userInput" value={this.props.userInput} />
            </FormGroup>
            <Button onClick={this.props.checkInput}>Submit</Button>
          </Form>
          <br />
          <InputGroup>
            <Input
              name="userInputx"
              value={this.props.userInput}
            />
            <InputGroupButton
              color="success"
              onClick={this.props.checkInput}
            >I'm a button</InputGroupButton>
          </InputGroup>
          <br />
          <Button onClick={this.props.next}>Button</Button>
        </Card>
      </div>
    );
  }
}
