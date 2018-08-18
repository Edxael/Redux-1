import React from 'react'
import { connect } from 'react-redux'
import { store } from './reduxFiles/01-Store'
import ButtonP from './components/01-button-plus'
import ButtonM from './components/02-button-minus'
import ButtonR from './components/03-button-reset'


class Redux101 extends React.Component{
    render(){
        
        let value1 = store.getState()
        console.log( "The state: ", value1.count )

        return(
            <div>
                <h1>Redux Counter ll</h1>
                <h3>The value is: { value1.count }</h3>
                <hr/>
                
                <div className="buttonsContainer" >
                    <ButtonP />
                    <ButtonM />
                    <ButtonR />
                </div>
                
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    console.log("The STATE in MapStateToProps(): ", state)
    return { myPropsTotal: state }
}


export default connect(mapStateToProps)(Redux101)


// More information on connect()
// https://redux.js.org/recipes/writingtests#connected-components

