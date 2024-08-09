import { Component } from 'react'
import TopBar from '../../layouts/Header/Index'
import Main from '../../layouts/Main/Index'

export default class Categories extends Component {
  state = {}

  render() {
    return (
      <div className='flex flex-col h-screen'>
        <TopBar />
        <Main title="Categories Page"/>
      </div>
    )
  }
}