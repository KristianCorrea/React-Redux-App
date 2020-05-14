import React from 'react';

import {connect} from 'react-redux';
import {fetchInsult} from '../actions/action'

const mapStateToProps=state=>{
    return{
        insult: state.insult,
    }
}

const Insult = props =>{
    console.log(props)
    return (
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
            <button style={{backgroundColor: 'pink', fontFamily: 'serif', fontSize: '30px'}} onClick={props.fetchInsult}>Generate Insult</button>
            <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                <p style={{width: '50%', fontSize: '20px'}}>{props.insult}</p>
            </div>
        </div>
    )
}
export default connect(
    mapStateToProps,
    {fetchInsult},
)(Insult)