import React from 'react';
import CardEditor from './CardEditor';
import CardViewer from './CardViewer';
import { Switch, Route } from 'react-router-dom';
import Homepage from './Homepage';
//import Test from './Test';


/*class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  


  nextCard = index => {
    const cards = this.state.cards(1);
  };

  previousCard = index => {
    const cards = this.state.cards(1);
  };

  render()*/
  const App = () => {
    return (
      <Switch>
        <Route exact path = "/editor">
          <CardEditor 
          />
        </Route>
        <Route exact path = "/viewer/:deckId">
          <CardViewer />
        </Route>
        <Route exact path = "/">
          <Homepage
          />
        </Route>
        <Route>
          <div>Page not found!</div>
        </Route>
      </Switch>
    );
  }


export default App;
