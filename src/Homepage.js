import React from 'react';
//import CardEditor from './CardEditor';
//import CardViewer from './CardViewer';
//import { Switch, Route } from 'react-router-dom';

import { Link } from 'react-router-dom';

class Homepage extends React.Component {

    render()
    {
        return (
            <div>
                <h2>Homepage</h2>
                <Link to="/viewer">Go to card viewer</Link>
                <hr/>
                <Link to="/editor">Go to card editor</Link>
            </div>
        );
    }
}
export default Homepage;