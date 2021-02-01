import {connect} from 'react-redux'
import Click from '../component/click'

const mapStateToProps = (state) => {
    return {
        click: state.click
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        restart: () => dispatch({type: 'RESTART'}),
        setNull: () => dispatch({type: 'SET_NULL'}),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Click);