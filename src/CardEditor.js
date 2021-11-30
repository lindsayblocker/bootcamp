import React, { isValidElement } from 'react';
import './CardEditor.css';

import { Link } from 'react-router-dom';

class CardEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {front: '', back: ''};
    }

    addCard = () => {
        //console.log('clicked');
        this.props.addCard(this.state);
        this.setState({ front: '', back: ''});
    };

    deleteCard = index =>{
        //console.log('clicked', index);
        this.props.deleteCard(index);
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
        const cards = this.props.cards.map((card, index) =>{
            return(
                <tr key = {index}>
                    <td> {card.front}</td>
                    <td> {card.back}</td>
                    <td><button onClick={() =>this.deleteCard(index)}> Delete Card</button></td>
                </tr>
            );
        });
        
        
        return (
            <div>
                <h2>Card Editor</h2>
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
                <Link to="/viewer">Go to card viewer</Link>
                <hr/>
                <Link to="/">Return to Homepage</Link>
            </div>
        );
    }
}

export default CardEditor;