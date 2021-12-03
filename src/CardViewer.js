import React from 'react';
import './CardViewer.css';
import cards from './CardEditor.css';
import { Link, withRouter } from 'react-router-dom';
import {firebaseConnect, isLoaded, isEmpty} from 'react-redux-firebase';
import {connect} from 'react-redux';
import {compose} from 'redux';

class CardViewer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          displayFront: true, 
          cardIndex : 0,
        };
      }

    progressBar = () => {
        console.log('clicked');
    }
    /*nextCard = () => {
        console.log('clicked');
        if (this.state.cardIndex < this.props.cards.length - 1) {
            this.setState({ cardIndex: this.state.cardIndex + 1 })
        } else {
            this.setState({ cardIndex: 0 })
        }
    };

    previousCard = () => {
        if (this.state.cardIndex > 0) {
            this.setState({ cardIndex: this.state.cardIndex - 1 })
        } else {
            this.setState({ cardIndex: this.props.cards.length - 1 })
        }
    };*/
    
    nextCard = () => {
        if (this.state.cardIndex < this.props.cards.length - 1) {
          this.setState({
            cardIndex: this.state.cardIndex + 1,
            displayFront: true,
          });
        }
      };
    
      prevCard = () => {
        if (this.state.cardIndex > 0) {
          this.setState({
            cardIndex: this.state.cardIndex - 1,
            displayFront: true,
          });
        }
      };

    flipCard = () => this.setState({ displayFront: !this.state.displayFront});


    render() {

        if(!isLoaded(this.props.cards))
        {
            return<div>Loading...</div>;
        }

        if (isEmpty(this.props.cards)) {
            return <div>Page not found!</div>;
        }

        if (this.state.displayFront) {
            return (
                <div>
                <h2>
                    Card Viewer
                </h2>
                <hr/>
                <button class="button" onClick = {this.flipCard}> {this.props.cards[this.state.cardIndex].back} </button>
                <hr/>
                <p> index: {this.state.cardIndex + 1} / {this.props.cards.length} </p>
                <button onClick = {this.previousCard}> Previous Card </button>
                <button onClick = {this.nextCard}> Next Card</button>
                <hr/>
                <Link to="/editor">Go to Card Editor</Link>
                <hr/>
                <Link to="/">Return to Homepage</Link>
            </div>
            )
        }
        return (
            <div>
                <h2>
                    Card Viewer
                </h2>
                <hr/>
                <button class="button" onClick = {this.flipCard}> {this.props.cards[this.state.cardIndex].front} </button>
                <hr/>
                <p> index: {this.state.cardIndex + 1} / {this.props.cards.length} </p>
                <button onClick = {this.previousCard}> Previous Card </button>
                <button onClick = {this.nextCard}> Next Card</button>
                <hr/>
                <Link to="/editor">Go to Card Editor</Link>
                <hr/>
                <Link to="/">Return to Homepage</Link>
            </div>
        );
    }
}

const mapStateToProps = (state, props) =>
{
    console.log(state);
    const deck = state.firebase.data[props.match.params.deckId];
    const name = deck && deck.name;
    const cards = deck && deck.cards;
    return { cards: cards, name: name };
}

export default compose(
    withRouter,
    firebaseConnect(props => {
        console.log('props', props);
        const deckId = props.match.params.deckId;
        return [{ path: `/flashcards/${deckId}`, storeAs: deckId }];
    }),
    connect(mapStateToProps),
)(CardViewer);

/*export default compose(
    withRouter,
    firebaseConnect(props => {
      const deckId = props.match.params.deckId;
      return [{ path: `/flashcards/${deckId}`, storeAs: deckId, populates }];
    }),
    connect(mapStateToProps),
  )(CardViewer);*/
