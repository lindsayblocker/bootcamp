import React from 'react';
import CardEditor from './CardEditor';
import CardViewer from './CardViewer';
//import logo from './logo.svg';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        { front: 'front1', back: 'back1'},
        { front: 'front2', back: 'back2'},
      ],
      editor: true, 
    };
  }

  addCard = card => {
  if (card.back && card.front) {
    const cards = this.state.cards.slice().concat(card);
    this.setState({ cards });
  }
  };

  deleteCard = index => {

      const cards = this.state.cards.slice();
      cards.splice(index, 1);
      this.setState({ cards });

  };


  nextCard = index => {
    const cards = this.state.cards(1);
  };

  previousCard = index => {
    const cards = this.state.cards(1);
  };

  switchMode = () => {
    if (this.state.cards.length > 0) {
      this.setState({ editor: !this.state.editor});
    }
    //this.setState({ editor: !this.state.editor});
  }

  render() {
    if (this.state.editor) {
      return (
        <CardEditor 
        addCard ={this.addCard} 
        cards={this.state.cards} 
        deleteCard={this.deleteCard}
        switchMode = {this.switchMode}
        />
      );
    } else {
        return (
          <CardViewer 
          switchMode={this.switchMode} 
          cards = {this.state.cards}
          flipCard = {this.flipCard}
          nextCard = {this.nextCard}
          previousCard = {this.previousCard}
          />
        );
    }  
  }
}

export default App;
