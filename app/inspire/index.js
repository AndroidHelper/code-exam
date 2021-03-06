import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Questions from './pages/questions'
import Question from './pages/question'
import Papers from './pages/papers'
import Paper from './pages/paper'
import './styl/index.styl'

import Header from '../common/component/Header'
import { Menu, Icon } from 'antd'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;



class App extends Component {

  constructor(){
    super()

    /**
     * 计算当前应该是哪个菜单
     */
    const key = window.location.pathname.replace(/\/inspire(\/?)/, '')
      || 'my-question'

    console.debug('route-key:', key)
    this.state = {
      routeKey : key
    }
  }


  render(){
    return (
      <Router>
        <div className='router-wrapper'>
          <Header />
          <div className='page'>
            <Menu
              defaultSelectedKeys={[this.state.routeKey]}
              defaultOpenKeys={['creative']}
              mode='inline'
              style={{width : 300}} >
               <SubMenu key='creative' title='创作'>
                <Menu.Item key='questions' ><Link to='/inspire/questions'>我出的题目</Link></Menu.Item>
                <Menu.Item key='question' ><Link to='/inspire/question'>出题</Link></Menu.Item>
                <Menu.Item key='papers'><Link to='/inspire/papers'>我出的试卷</Link></Menu.Item>
                <Menu.Item key='paper'><Link to='/inspire/paper'>出卷</Link></Menu.Item>

              </SubMenu>
            </Menu>
            <div className='page-content'>
              <Route path='/inspire' exact component={Questions} />
              <Route path='/inspire/questions' exact component={Questions} />
              <Route path='/inspire/question' exact component={Question} />
              <Route path='/inspire/question/:id' exact component={Question} />
              <Route path='/inspire/papers' exact component={Papers} />
              <Route path='/inspire/paper/:id' exact component={Paper} />
              <Route path='/inspire/paper' exact component={Paper} />
            </div>

          </div>
        </div>
      </Router>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'))
