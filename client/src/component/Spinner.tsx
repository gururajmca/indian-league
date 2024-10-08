import React, { Component } from 'react'

export class Spinner extends Component {
  render() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-white">
            <div className="flex flex-col">
                <div className="flex space-x-24">
                    <div className="container space-y-10 relative">
                        <div className="flex flex-col">
                            <div className="flex flex-row space-x-16">
                                <div className="flex">
                                    <div className="relative">
                                        <div className="w-12 h-12 rounded-full absolute border-8 border-dashed border-gray-200"></div>
                                        <div className="w-12 h-12 rounded-full animate-spin absolute border-8 border-dashed border-purple-500 border-t-transparent"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default Spinner
