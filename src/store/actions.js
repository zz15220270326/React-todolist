import {INPUT_CHANGE, ADD_ITEM, DELETE_ITEM, UPDATE_ITEM} from './actionType'

export const inputChangeAction = (inputValue) => {
  return {
    type: INPUT_CHANGE,
    inputValue
  }
}
export const addItemAction = () => {
  return {
    type: ADD_ITEM
  }
}
export const deleteItemAction = (index) => {
  return {
    type: DELETE_ITEM,
    index
  }
}
export const updateItemAction = (index) => {
  return {
    type: UPDATE_ITEM,
    index
  }
}