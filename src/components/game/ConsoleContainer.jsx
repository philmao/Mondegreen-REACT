import React, { Component } from 'react';
import API from '../../utils/API';

import Console from './Console';

export default class ConsoleContainer extends Component {
  constructor() {
    super();
    this.state = {
      currentQuestion: 1,
      question: [],
      userInput: '',
    };

    this.getQuestions = this.getQuestions.bind(this);
    this.getOneQuestion = this.getOneQuestion.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
    this.checkInput = this.checkInput.bind(this);
  }

  componentDidMount() {
    this.getOneQuestion();
  }

  getQuestions() {
    console.log('getQuestions');
    API.getQuestions().then((res) => {
      this.setState({ question: res.data[0] });
    });
  }

  getOneQuestion() {
    const { currentQuestion } = this.state;
    API.getOneQuestion(currentQuestion).then((res) => {
      this.setState({ question: res.data });
    });
  }

  nextQuestion() {
    const incrementQuestion = this.state.currentQuestion + 1;
    this.setState({ currentQuestion: incrementQuestion }, () => {
      this.getOneQuestion();
    });
  }

  checkInput(event) {
    console.log('Check');
    console.log(event);
  }

  render() {
    return (
      <div>
        <Console
          props={this.state}
          checkInput={this.checkInput}
          next={this.nextQuestion}
          question={this.state.question}
          userInput={this.state.userInput}
        />
      </div>
    );
  }
}
