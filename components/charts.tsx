'use client'
import { CartesianGrid, XAxis, YAxis, Tooltip, Bar, BarChart, Legend } from 'recharts';



export function CustomerCount() {
  const data = [
    { name: 'Ock', uv: 400, pv: 2400, amt: 2400 },
    { name: 'Sbt', uv: 600, pv: 2500, amt: 2500 },
    { name: 'Mrt', uv: 600, pv: 2600, amt: 2600 },
    { name: 'Nsn', uv: 700, pv: 2700, amt: 2700 },
    { name: 'May', uv: 400, pv: 2400, amt: 2400 },
    { name: 'Haz', uv: 600, pv: 2500, amt: 2500 },
    { name: 'Tem', uv: 600, pv: 2600, amt: 2600 },
    { name: 'Aus', uv: 700, pv: 2700, amt: 2700 },
    { name: 'Eyl', uv: 400, pv: 2400, amt: 2400 },
    { name: 'Ekm', uv: 600, pv: 2500, amt: 2500 },
    { name: 'Ksm', uv: 600, pv: 2600, amt: 2600 },
    { name: 'Ark', uv: 700, pv: 2700, amt: 2700 },
  ];


  return (
    <div>
      <BarChart
        width={800}
        height={200}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="uv" fill="#5e86cc" />
      </BarChart>
    </div>
  );
}

export function WorkersCount() {
  return (
    <div>
      18
    </div>
  )
}
