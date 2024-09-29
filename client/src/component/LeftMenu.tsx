import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export class LeftMenu extends Component {
  render() {
    return (
       <div className="hidden h-full flex-[0.2] md:block">
        <div className="grid h-full place-content-center bg-cyan-200">
          <h1 className="text-xl">
            <Link to="/admin">Admin</Link>
          </h1>
          <h1 className="text-xl">
            <Link to="/setup">Setup Game</Link>
          </h1>
        </div>
      </div>
    )
  }
}

export default LeftMenu
