// Just layout of how the information should work
// The video for this example: https://www.youtube.com/watch?v=0ix_QLPkYhI


render(){

        // 01) Store: reducer & state
    const store = createStore(reducer, "Peace")     // <-- Note: the second argument for createStore() is usually an Object. 


        // 02) Reducer: state & action  Note: Always on top, and separate file. 
    const reducer = function(state, action){
        if(action.type  === "LAND_ATTACK"){ return action.payload }
        if(action.type  === "AIR_ATTACK"){ return action.payload }
        if(action.type  === "SEA_ATTACK"){ return action.payload }
        return state
    }


        // 03) Subcribe
    store.subscribe(() => {
        console.log("Store is now: ", store.getState())
    })


        // 4) Dispatch action
    store.dispatch({ type: "LAND_ATTACK", payload: "Deploy: Army" })
    store.dispatch({ type: "AIR_ATTACK", payload: "Deploy: Air-Force" })
    store.dispatch({ type: "SEA_ATTACK", payload: "Deploy: Navy" })

}