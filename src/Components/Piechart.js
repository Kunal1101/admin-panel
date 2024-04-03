import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell, } from 'recharts';

const data = [
  { name: 'Group A', value: 200 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
];
const COLORS = ['#f13596', '#f0eefa', '#5831e8'];

export default class Piechart extends PureComponent {
  
  render() {
    return (
    <>
      <div className='pieChart-box'>
        <h2 className='pieChart-heading'>Customers</h2>
        <span className='pieChart-subheading'>Customers that buy products</span>
        <PieChart className='pieChart-main' width={300} height={300} onMouseEnter={this.onPieEnter}>
          <Pie
            data={data}
            // cx={150}
            // cy={150}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={0}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </div>
      </>
    )
  }
}

