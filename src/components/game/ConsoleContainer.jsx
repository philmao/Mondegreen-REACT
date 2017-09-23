import React, { Component } from 'react';
import Console from './Console';

export default class ConsoleContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <Console />
    );
  }
}
