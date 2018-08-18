import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addOneToCount } from '../reduxFiles/02-Actions'

class ButtonP extends React.Component{
    render(){

        const execAction = () => {
            console.log("\n Add One Clicked...")
            this.props.addOneToCount()
        }

        return(
            <div className="reduxActionButton" >
                <button onClick={execAction} >Plus 1</button>
            </div>
        )
    }
}



const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ addOneToCount }, dispatch)
}
 
 
export default connect(null, mapDispatchToProps)(ButtonP)