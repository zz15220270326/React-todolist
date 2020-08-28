note:
  1. react-redux基本使用:
    1. npm install --save react-redux
       npm install --save redux
    2. 创建store和reducer
    3. 引入并配置组件基本信息
  2.Provider 和 Connect
    1. Provider(index.js)
      React ReactDOM
      import {Provider} from 'react-redux'
      import store from './store'
      import Todolist from '...'
      const App = (
        <Provider store={store}>
          <Todolist />
        </Provider>
      )
      ReactDOM.render(App, getElementById("root"))
    2. connect(Todolist.js)
      1. 引入
        import {connect} from "react-redux"
      2. export default connect(stateToProps, dispatchToProps)(Todolist)
      3. this.state... -> this.props...
  3. react-redux改变store中的state
    
  