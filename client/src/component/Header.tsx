import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export class Header extends Component {
    render() {
        return (
            <div className="flex h-full flex-1 flex-col">
                <div className="flex justify-left">
                    <NavLink to="/" className={({ isActive }) => (isActive ? 'py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold' : 'py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300')}>Player Board</NavLink>
                    <NavLink to="/game" className={({ isActive }) => (isActive ? 'py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold' : 'py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300')}>Game Configuration</NavLink>
                </div>
            </div>
        )
    }
}

export default Header
