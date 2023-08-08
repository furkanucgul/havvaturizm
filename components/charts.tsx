'use client'
import { CartesianGrid, XAxis, YAxis, Tooltip, Bar, BarChart, Legend, ResponsiveContainer } from 'recharts';



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
      <ResponsiveContainer width='100%' height='100%'>
      <BarChart
        width={300}
        height={200}
        data={data}
        margin={{
          top: 5,
          right: 5,
          left: 5,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <Tooltip />
        <Legend />
        <Bar dataKey="uv" fill="#5e86cc" />
      </BarChart>
      </ResponsiveContainer>
  );
}

export function WorkersCount() {
  return (
    <div>
      18
    </div>
  )
}
