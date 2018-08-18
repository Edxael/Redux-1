import { INCREMENT, DECREMENT, RESET } from './04-Constants'

export const addOneToCount = () => {
    const action = {
        type: INCREMENT
    }

    console.log("Fire Action (+): ", action)
    return action
}


export const minusOneToCount = () => {
    const action = {
        type: DECREMENT
    }

    console.log("Fire Action (-): ", action)
    return action
}

export const resetValue = () => {
    const action = {
        type: RESET
    }

    console.log("Fire Action (r): ", action)
    return action
}
