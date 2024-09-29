import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { PieChart } from 'react-minimal-pie-chart'

// export default class Playerchart extends Component {
const Playerchart = ({ data }: any) => {
    console.log('Chart dta', data);
    return (
      <div>
        <h3>Player's level chart</h3>
        <PieChart data={data} radius="40"/>
      </div>
    )
}
export default Playerchart;
