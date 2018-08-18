import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { minusOneToCount } from '../reduxFiles/02-Actions'

class ButtonM extends React.Component{
    render(){

        const execAction = () => {
            console.log("\n Substract One Clicked...")
            this.props.minusOneToCount()
        }

        return(
            <div className="reduxActionButton" >
                <button onClick={execAction} >Minus 1</button>
            </div>
        )
    }
}



const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ minusOneToCount }, dispatch)
}
 
 
export default connect(null, mapDispatchToProps)(ButtonM)