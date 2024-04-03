import React from 'react'
import { BarChart, Bar, XAxis, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Feb',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Mar',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Apr',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Jun',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Jul',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Aug',
    uv: 4000,
    pv: 2400,
    amt: 2400,
    fill:"#5a32ea"
  },
  {
    name: 'Sept',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Oct',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Nov',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Dec',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
];

function Barchart() {
  return (
    <>
    <div className='barchart-box'>
      <div className='bar-heading mb-3 d-flex justify-content-between'>
        <div>
          <h2 className='chart-heading poppins-semobold'>Overview</h2>
          <span className='chart-sub-heading d-block'>Monthly Earning</span>
        </div>
        <div class="dropdown">
          <button style={{backgroundColor: "#f9fafe", border: "none", color: "#0a0a0a"}} class="btn btn-sm btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Quaterly
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/">Quaterly</a></li>
            <li><a class="dropdown-item" href="/">Haly Yearly</a></li>
            <li><a class="dropdown-item" href="/">Yearly</a></li>
          </ul>
        </div>
      </div>
      <ResponsiveContainer>
        <BarChart data={data}>
          <XAxis dataKey="name" style={{borderRadius: "8px"}} />
          <Bar dataKey="uv" fill="#f2efff" />
        </BarChart>
      </ResponsiveContainer>
    </div>
    </>
  )
}

export default Barchart