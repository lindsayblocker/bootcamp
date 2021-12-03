import React, { isValidElement } from 'react';
import './CardEditor.css';

import { Link, withRouter, Redirect } from 'react-router-dom';
import { firebaseConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from 'react-redux';

class CardEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          cards: [
            { front: 'front1', back: 'back1' },
            { front: 'front2', back: 'back2' },
          ],
          front: '',
          back: '',
          name: '',
          private: false,
        };
      }

    /*addCard = () => {
        //console.log('clicked');
        this.state.addCard(this.state);
        this.setState({ front: '', back: ''});
    };*/

    addCard = () => {
        if (!this.state.front.trim() || !this.state.back.trim()) {
          alert('Cannot add empty card');
          return;
        }
    
        const newCard = { front: this.state.front, back: this.state.back };
        const cards = this.state.cards.slice().concat(newCard);
        this.setState({ cards, front: '', back: '' });
      };

    createDeck = () => {
        const deckId = this.props.firebase.push('/flashcards').key;
        const updates = {};
        const newDeck = {
          cards: this.state.cards,
          name: this.state.name,
          //owner: this.props.isLoggedIn,
          //visibility: this.state.private ? 'private' : 'public',
        };
        updates[`/flashcards/${deckId}`] = newDeck;
        updates[`/homepage/${deckId}`] = {
          name: this.state.name,
          //owner: this.props.isLoggedIn,
          //visibility: this.state.private ? 'private' : 'public',
        };
        const onComplete = () => 
        {
            console.log('database Updated');
            this.props.history.push(`/viewer/${deckId}`);
        };
        this.props.firebase.update(`/`, updates, onComplete);
      };

    /*deleteCard = index =>{
        //console.log('clicked', index);
        this.state.deleteCard(index);
    };*/

    deleteCard = index => {
        const cards = this.state.cards.slice();
        cards.splice(index, 1);
        this.setState({ cards });
    };
    
    //handleFrontChange = event =>{
    //    console.log(event.target.name);
    //    this.setState({ front: event.target.value});
    //}

    //handleBackChange = event =>{
    //    console.log(event.target.name);
    //    this.setState({ back: event.target.value});
    //}

    handleChange = event => this.setState({[event.target.name]: event.target.value});
    render () {
        const cards = this.state.cards.map((card, index) =>{
            return(
                <tr key = {index}>
                    <td> {card.front}</td>
                    <td> {card.back}</td>
                    <td><button
                    disabled={this.state.cards.length === 1}
                    onClick={() =>this.deleteCard(index)}> Delete Card</button></td>
                </tr>
            );
        });
        
        
        return (
            <div>
                <h2>Card Editor</h2>
                <div>
                    Deck Name:{' '}
                    <input
                        name="name"
                        onChange={this.handleChange}
                        placeholder="Name of deck"
                        value={this.state.name}
                    />
                </div>
                <table>
                    <thead>
                        <tr>
                            <th> Front </th>
                            <th> Back </th>
                            <th> Delete </th>
                        </tr>
                    </thead>
                    <tbody> {cards} </tbody>
                </table>
                <hr/>
                <input 
                name = "front"
                    onChange = {this.handleChange} 
                    placeholder= "Front of Card " 
                    value = {this.state.front}/>
                <input 
                name = "back"
                    onChange = {this.handleChange}
                    placeholder= "Back of Card" 
                    value = {this.state.back}/>
                <button onClick = {this.addCard}> Add Card</button>
                <hr/>
                <div>
                <button
                    disabled={!this.state.name.trim() || this.state.cards.length === 0}
                    onClick={this.createDeck}>
                    Create Deck
                </button>
                </div>
                <hr/>
                <Link to="/viewer">Go to Card Viewer</Link>
                <hr/>
                <Link to="/">Return to Homepage</Link>
            </div>
        );
    }
}

//export default firebaseConnect()(CardEditor);
export default compose(
    firebaseConnect(),
    //connect(mapStateToProps),
    withRouter)
    (CardEditor);