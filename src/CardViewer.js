import React from 'react';
import './CardViewer.css';
import cards from './CardEditor.css';
import { Link } from 'react-router-dom';

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
    nextCard = () => {
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
    };
    
    flipCard = () => this.setState({ displayFront: !this.state.displayFront});


    render() {
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
                <Link to="/editor">Go to card editor</Link>
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

export default CardViewer;