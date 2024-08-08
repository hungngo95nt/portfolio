import { Component } from 'react'
import { Link } from 'react-router-dom'

export default class TopBar extends Component {
  state = {}

  render() {
    return (
        <nav className="top-0 z-100 flex justify-around fixed w-full bg-blue-600 py-5 px-10">
            <Link to="home" className="text-white font-bold">Home</Link>
            <Link to="categories" className="text-white font-bold">Categories</Link>
        </nav>
    )
  }
}