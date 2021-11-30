import React from "react";
import { withRouter } from 'react-router-dom';

class Test extends React.Component {
    render() {
        return (
            <div>
                Test {this.props.match.prams.id}
                <br />
                <button onClick={() => this.props.history.push('/')}>
                    Go Home
                </button>
            </div>
        );
    }
}

export default withRouter(Test);