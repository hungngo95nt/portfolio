import { Component } from 'react'
import Header from '../../layouts/Header/Index'
import Main from '../../layouts/Main/Index'

export default class Home extends Component {
  state = {}

  render() {
    return (
      <>
        <Header />
        <Main title='Portfolio Home' />
      </>
    )
  }
}