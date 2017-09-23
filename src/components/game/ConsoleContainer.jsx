import React, { Component } from 'react';
import Console from './Console';

export default class ConsoleContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
    };
  }

  async componentDidMount() {
    const res = await fetch('http://localhost:3000/api/questions/all');
    console.log(JSON.stringify(res));

    // this.setState({ questions: data });
    // console.log(this.state.questions);
  }

  render() {
    return (
      <Console />
    );
  }
}
