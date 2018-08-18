import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { resetValue } from '../reduxFiles/02-Actions'

class ButtonReset extends React.Component{
    render(){

        const exeReset = () => {
            console.log("\n\n Reset Counter")
            this.props.resetValue()
        }

        return(
            <div className="reduxActionButton" >
                <button onClick={exeReset} >Reset</button>
            </div>
        )

    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ resetValue }, dispatch)
}

export default connect(null, mapDispatchToProps)(ButtonReset)
