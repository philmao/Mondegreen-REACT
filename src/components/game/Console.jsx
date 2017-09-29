import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText, InputGroup, InputGroupButton, Input } from 'reactstrap';

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
          <InputGroup>
            <Input />
            <InputGroupButton
              color="success"
              value={this.props.userInput}
            >I'm a button</InputGroupButton>
          </InputGroup>
          <br />
          <Button onClick={this.props.next}>Button</Button>
        </Card>
      </div>
    );
  }
}
