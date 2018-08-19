import { INCREMENT, DECREMENT, RESET } from './04-Constants'

export const reducer =  ( state = { count: 0 }, action ) => {
    console.log("Runing the Reducer....")

    switch (action.type){
        case INCREMENT: return { count: state.count + 1  }
        case DECREMENT: return { count: state.count - 1  }
        case RESET: return { count: 0  }
        default: return state;
    }
} 
