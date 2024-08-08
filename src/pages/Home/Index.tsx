import { Component } from 'react'
import TopBar from '../../layouts/TopBar/Index'
import Main from '../../layouts/Main/Index'

export default class Home extends Component {
  state = {}

  render() {
    return (
      <div>
        <TopBar />
        <Main title='Portfolio Home' />
      </div>
    )
  }
}