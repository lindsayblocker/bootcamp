import React from 'react';
import './CardViewer.css';

class CardViewer extends React.Component {
    render() {
        return (
            <div>
                <h2>
                    Card Viewer
                </h2>
                <hr/>
                cards
                <hr/>
                <button> Previous Card </button>
                <button> Next Card</button>
                <hr/>
                <button onClick={this.props.switchMode}> Go to Card Editor</button>
            </div>
        );
    }
}

export default CardViewer;