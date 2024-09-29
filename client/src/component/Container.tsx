import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'

export class Container extends Component {
  render() {
    return (
        <div className="flex h-full flex-1 flex-col">
            <div className="flex h-full flex-col justify-between overflow-y-scroll">
            <div className="text-center text-xl">
                <Outlet />
            </div>
            </div>
        </div>
    )
  }
}

export default Container
