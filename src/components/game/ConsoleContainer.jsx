import React, { Component } from 'react';
import API from '../../utils/API';

import Console from './Console';

export default class ConsoleContainer extends Component {
  constructor() {
    super();
    this.state = {
      currentQuestion: 1,
      question: [],
      audio_track: '/audio/track_01.mp3',
      start_time: 74,
      duration: 4,
    };
    console.log(`Constructor == ${this.state.currentQuestion}`);

    this.getQuestions = this.getQuestions.bind(this);
    this.getOneQuestion = this.getOneQuestion.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
  }

  componentDidMount() {
    this.getOneQuestion();
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
    console.log(`Current == ${currentQuestion}`);

    API.getOneQuestion(currentQuestion).then((res) => {
      this.setState({ question: res.data });
    });
  }

  nextQuestion() {
    console.log(`Before == ${this.state.currentQuestion}`);
    const incrementQuestion = this.state.currentQuestion + 1;
    this.setState({ currentQuestion: incrementQuestion });
    console.log(`After == ${this.state.currentQuestion}`);
    this.getOneQuestion();
  }

  render() {
    return (
      <div>
        <Console
          next={this.nextQuestion}
          question={this.state.question}
          audio_track={this.state.audio_track}
          start_time={this.state.start_time}
          duration={this.state.duration}
        />
      </div>
    );
  }
}
