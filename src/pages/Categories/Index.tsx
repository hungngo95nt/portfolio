import { Component } from 'react'
import TopBar from '../../layouts/TopBar/Index'
import Main from '../../layouts/Main/Index'

export default class Categories extends Component {
  state = {}

  render() {
    return (

      <div>
        <TopBar />
        <Main title="Categories Page"/>
      </div>
    )
  }
}