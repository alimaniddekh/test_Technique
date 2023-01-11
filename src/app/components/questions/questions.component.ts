import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent {
  question = [
    {
      id: 1,
      question: 'A sequence diagram',
      response: {
        1: 'Allows to describe the possible sequences between the scenarios previously identified',
        2: 'Is a sequential representation of the processing sequence and the interactions between the elements of the system and/or its actors',
        3: 'Is a simplified representation of a sequence sequence focusing on message exchanges between objects',
        4: 'All Answers are Right',
      },
      right_response: 2,
      timing: 10,
    },

    {
      id: 2,
      question: 'In the UML language class diagram, an aggregation:',
      response: {
        1: 'Represents a symmetrical association in which both ends play the same role',
        2: 'Implies a coincidence of the lifespan of objects at both ends: the destruction of one automatically implies the destruction of the other',
        3: 'Represents a non-symmetrical association in which one end plays a predominant role over the other end',
        4: 'None of these answers',
      },
      right_response: 3,
      timing: 10,
    },
    {
      id: 3,
      question:
        'In a Use Case UML diagram, what is not true for the generalization?',
      response: {
        1: 'It can connect a use case and an actor',
        2: 'It can connect two actors',
        3: 'It can connect two use boxes',
        4: 'None of these answers',
      },
      right_response: 1,
      timing: 10,
    },
    {
      id: 4,
      question: 'In the UML Language Transition Status diagram:',
      response: {
        1: 'When an object reacts to an event, it triggers a single operation in response to that event',
        2: 'Unlike lasting events, a state is by nature instant information that must be processed without further delay',
        3: 'Any message is an event involved in the interaction of two objects',
        4: 'None of these answers',
      },
      right_response: 3,
      timing: 10,
    },
  ];


  /////////////////////////////
  Data;
  score : number = 0;
  radioId;
  counter = 0;
  finalscore = 0;

  getRadioID(e){
    this.radioId=e.target.id;
  }

  calculeScore(){
    this.finalscore=(this.score/4)*100;
  }

  checkRightAnswer(){
    if(this.radioId == this.Data.right_response){
      this.score+=1;
      console.log(this.score);
    }
  }

  changeMockData() {
    this.counter++;
    if(this.counter==5){
      this.calculeScore();
    }else {
      this.Data = this.question.find(x => x.id === this.counter);
      console.log(this.Data);
      this.elapsedTime = this.Data.timing;
      clearInterval(this.timer);
      this.countDown();
      this.checkRightAnswer();
    }
  }

  ///////////TIMER//////////
  timer: any;
  elapsedTime;

  countDown() {
    this.timer = setInterval(() => {
      if(this.elapsedTime > 0) {
        this.elapsedTime--;
      } else {
        this.checkRightAnswer()
        this.changeMockData()
      }
    },1000)
  }

  stopTimer() {
    clearInterval(this.timer);
  }
}
