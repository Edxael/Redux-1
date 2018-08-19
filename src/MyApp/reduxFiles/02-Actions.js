import { INCREMENT, DECREMENT, RESET } from './04-Constants'


export const addOneToCount = () => {
    return { type: INCREMENT }
}

export const minusOneToCount = () => {
    return { type: DECREMENT  }
}

export const resetValue = () => {
    return { type: RESET }
}
