import React, { Component } from 'react';
import API from '../../utils/API';

import Console from './Console';

export default class ConsoleContainer extends Component {
  constructor() {
    super();
    this.state = {
      currentQuestion: '1',
      question: [],
    };

    this.getQuestions = this.getQuestions.bind(this);
    this.getOneQuestion = this.getOneQuestion.bind(this);
  }

  componentDidMount() {
    this.getQuestions();
    // this.getOneQuestion();
    console.log('Mounted');
  }

  getQuestions() {
    console.log('getQuestions');
    API.getQuestions().then((res) => {
      this.setState({ question: res.data[0] });
      // console.log(res);
    });
  }

  getOneQuestion() {
    const { currentQuestion } = this.state;
    console.log(`Current ${currentQuestion}`);

    console.log('getOneQuestion');
    API.getOneQuestion(currentQuestion).then((res) => {
      this.setState({ question: res.data });
      // console.log(res);
    });
  }

  render() {
    console.log(this.state.question);

    return (
      <div>
        <Console question={this.state.question} />
      </div>
    );
  }
}
