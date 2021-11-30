import React from 'react';
import CardEditor from './CardEditor';
import CardViewer from './CardViewer';
import { Switch, Route } from 'react-router-dom';
import Homepage from './Homepage';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        { front: 'front1', back: 'back1'},
        { front: 'front2', back: 'back2'},
      ],
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

  render() {
    return (
      <Switch>
        <Route exact path = "/editor">
          <CardEditor 
            addCard ={this.addCard} 
            cards={this.state.cards} 
            deleteCard={this.deleteCard}
          />
        </Route>
        <Route exact path = "/viewer">
          <CardViewer 
              cards = {this.state.cards}
              flipCard = {this.flipCard}
              nextCard = {this.nextCard}
              previousCard = {this.previousCard}
          />
        </Route>
        <Route exact path = "/">
          <Homepage
          />
        </Route>
        
      </Switch>
    );
  }
}

export default App;
