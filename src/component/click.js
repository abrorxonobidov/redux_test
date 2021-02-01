import React, {Component} from 'react';

class Click extends Component {
    render() {
        const {click, restart, setNull} = this.props;
        return (
            <>
                <p>
                    {click}
                    <button onClick={setNull}> 0 </button>
                </p>
                <button onClick={restart}>Restart</button>
            </>
        );
    }
}

export default Click;