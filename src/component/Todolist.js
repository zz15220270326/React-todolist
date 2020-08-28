import React from "react"
// antd
import {Input, Button, List} from "antd"
import "antd/dist/antd.css"
// store  TRAN
// import store from "../store"
import {
  inputChangeAction,
  addItemAction,
  deleteItemAction,
  updateItemAction
} from "../store/actions"
// connect
import {connect} from "react-redux"
// class Todolist extends React.Component {
//   /*constructor(props) {
//     super(props);
//     // this.state = store.getState()  // TRAN
//   }*/
//   render() {
//     let {inputValue, inputChange, addItem, deleteItem, updateItem} = this.props
//     return (
//       <div>
//         <div className="header">
//           <Input
//             placeholder="Write something"
//             style={{width: '250px'}}
//             value={inputValue}
//             onChange={inputChange}
//           />
//           <Button type="default" onClick={addItem}>增加</Button>
//         </div>
//         <div className="content">
//           <List
//             bordered
//             style={{width:'300px', marginRight: '10px', cursor: 'pointer'}}
//             dataSource={this.props.list}
//             renderItem={(item, index) => {
//               return (
//                 <List.Item>
//                   {item}
//                   <Button
//                     danger
//                     type="primary"
//                     onClick={() => {deleteItem(index)}}
//                     style={{marginLeft: '10px'}}
//                   >
//                     删除
//                   </Button>
//                   <Button
//                     type="primary"
//                     style={{marginLeft: '10px'}}
//                     onClick={() => {updateItem(index)}}
//                   >
//                     更新
//                   </Button>
//                 </List.Item>
//               )
//             }}
//           />
//         </div>
//       </div>
//     )
//   }
// }
const Todolist = (props) => {
  let {inputValue, inputChange, addItem, list, deleteItem, updateItem} = props
  return (
    <div>
      <div className="header">
        <Input
          placeholder="Write something"
          style={{width: '300px'}}
          value={inputValue}
          onChange={inputChange}
        />
        <Button type="default" onClick={addItem}>增加</Button>
      </div>
      <div className="content">
        <List
          bordered
          style={{width:'365px', marginRight: '10px', cursor: 'pointer'}}
          dataSource={list}
          renderItem={(item, index) => {
            return (
              <List.Item>
                {item}
                <Button
                  danger
                  type="primary"
                  onClick={() => {deleteItem(index)}}
                  style={{marginLeft: '10px'}}
                >
                  删除
                </Button>
                <Button
                  type="primary"
                  style={{marginLeft: '10px'}}
                  onClick={() => {updateItem(index)}}
                >
                  更新
                </Button>
              </List.Item>
            )
          }}
        />
      </div>
    </div>
  )
}
const stateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}
const dispatchToProps = (dispatch) => {
  return {
    inputChange(e) {
      const action = inputChangeAction(e.target.value)
      dispatch(action)
    },
    addItem() {
      const action = addItemAction()
      dispatch(action)
    },
    deleteItem(index) {
      const action = deleteItemAction(index)
      dispatch(action)
    },
    updateItem(index) {
      const action = updateItemAction(index)
      dispatch(action)
    }
  }
}
export default connect(stateToProps, dispatchToProps)(Todolist)