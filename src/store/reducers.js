import {INPUT_CHANGE, ADD_ITEM, DELETE_ITEM, UPDATE_ITEM} from "./actionType";
const initState = {
  inputValue: '',
  list: ['dayNight']
}
export default (state = initState, action) => {
  if (action.type === INPUT_CHANGE) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.inputValue
    return newState
  }
  if (action.type === ADD_ITEM) {
    let newState = JSON.parse(JSON.stringify(state))
    if (newState.inputValue !== '') {
      newState.list.push(newState.inputValue)
      newState.inputValue = ''
      return newState
    }
  }
  if (action.type === DELETE_ITEM) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index, 1)
    return newState
  }
  if (action.type === UPDATE_ITEM) {
    let newState = JSON.parse(JSON.stringify(state))
    if (newState.inputValue !== '') {
      newState.list.splice(action.index, 1, newState.inputValue)
      return newState
    }
  }
  return state
}