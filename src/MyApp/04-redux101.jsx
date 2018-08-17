import React from 'react'
import { connect } from 'react-redux'
import { addOneToCount, minusOneToCount, resetValue } from './reduxFiles/02-Actions'
import { store } from './reduxFiles/01-Store'


class Redux101 extends React.Component{
    render(){
        
        let value1 = store.getState()
        console.log( "The state: ", value1.count )

        return(
            <div>
                <h1>Redux 101</h1>
                <h3>The value is: { value1.count }</h3>

                <button onClick={ () => { addOneToCount() } } >Plus 1</button>
                <button onClick={ () => { minusOneToCount() } } >Less 1</button>
                <button onClick={ () => { resetValue() } } >Reset</button>
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










// import React from 'react'
// import { createStore } from 'redux'

//     // Setting up the store
// const store = createStore((state = { count: 0 }, action) => {
//     console.log("running...")

//     switch (action.type){
//         case 'INCREMENT': return { count: state.count + 1  }
//         case 'DECREMENT': return { count: state.count - 1  }
//         case 'RESET': return { count: 0  }
//         default: return state;
//     }

// })
 

//     // Setting the Actions

// // store.dispatch( { type: 'INCREMENT' } )
// // store.dispatch( { type: 'INCREMENT' } )
// // store.dispatch( { type: 'INCREMENT' } )

// // store.dispatch( { type: 'DECREMENT' } )


// class Redux101 extends React.Component{
//     render(){
        
//         let value1 = store.getState()
//         console.log( "The state: ", value1.count )

//         return(
//             <div>
//                 <h1>Redux 101</h1>
//                 <h3>The value is: { value1.count }</h3>

//                 <button onClick={ () => { store.dispatch( { type: 'INCREMENT' } ) } } >Plus 1</button>
//                 <button onClick={ () => { store.dispatch( { type: 'DECREMENT' } ) } } >Less 1</button>
//                 <button onClick={ () => { store.dispatch( { type: 'RESET' } ) } } >Reset</button>
//             </div>
//         )
//     }
// }

// export default Redux101