import React from 'react'
import { HashRouter, Route, Link, Switch } from 'react-router-dom'
import './css/style.css'

    // Redux things
import { Provider } from 'react-redux'
import { store } from './reduxFiles/01-Store'

 
import Home from './01-Home'
import Page2 from './02-P2'
import Page3 from './03-P3'
import Redux101 from './04-redux101'
import Page99 from './99-Page'
 
 
export default class extends React.Component{
    render(){
 
        return(
            <Provider store={ store } >
                <HashRouter>
                    <div className="MainContainer">
                
                        <div className="menu1">
                            <Link className="menuButton" to="/">HOME</Link>
                            <Link className="menuButton" to="/2">PAGE-2</Link>
                            <Link className="menuButton" to="/3">PAGE-3</Link>
                            <Link className="menuButton" to="/4">Redux-101</Link>
                        </div>
                
                        <hr/>
    
                        <Switch>
                            <Route exact path="/" component={Redux101}/>
                            <Route path="/2" component={Page2}/>
                            <Route component={Page99}/>
                        </Switch>
    
                        <br/>
                        <hr/>
                        <div>By: Edmundo</div>
                
                    </div>
                </HashRouter>
            </Provider>
        )
    }
}
