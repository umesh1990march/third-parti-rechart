// Write your code here

import {PieChart, Pie, ResponsiveContainer, Legend, Cell} from 'recharts'

const VaccinationByAge = props => {
  const {vaccinationByAge} = props
  console.log(vaccinationByAge)
  return (
    <>
      <h1>Vaccination by Age</h1>
      <ResponsiveContainer height={300} width="100%">
        <PieChart>
          <Pie
            cx="70%"
            cy="40%"
            data={vaccinationByAge}
            startAngle={90}
            endAngle={180}
            outerRadius="70%"
            dataKey="count"
          >
            <Cell name="18-44" fill="#fecba6" />
            <Cell name="45-60" fill="#b3d23f" />
            <Cell name="Above 60" fill="#a44c9e" />
          </Pie>
          <Legend layout="vertical" verticalAlign="middle" align="right" />
        </PieChart>
      </ResponsiveContainer>
    </>
  )
}

export default VaccinationByAge
