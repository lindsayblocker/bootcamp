
import React from 'react';
import { Link } from 'react-router-dom';
import { firebaseConnect, isLoaded } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';

class Homepage extends React.Component {

    render() {
        if (!isLoaded(this.props.data)) 
        {
            return <div>Loading...</div>;
        }

        const decks = Object.keys(this.props.data).map(deckId => 
        {
            const deck = this.props.data[deckId];
            return (
              <div key={deckId}>
                <Link to={`/viewer/${deckId}`}>{deck.name}</Link>
              </div>
            );
        });

        return (
            <div>
              <h2>Homepage</h2>
              <Link to="/editor">go to card editor</Link>
              <h3>Flashcards</h3>
              {decks}
            </div>
          );
    }
}


const mapStateToProps = (state) =>
{
    const data = state.firebase.data.homepage;
    return {data};
}
export default compose(
    firebaseConnect([`/homepage`]), connect(mapStateToProps),   
)(Homepage);