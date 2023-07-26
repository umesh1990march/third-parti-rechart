// Write your code here
import {ResponsiveContainer, Cell, Legend, PieChart, Pie} from 'recharts'

const VaccinationByGender = props => {
  const {vaccinationByGender} = props
  console.log(vaccinationByGender)

  return (
    <>
      <h1>Vaccination by gender</h1>
      <ResponsiveContainer height={300} width="100%">
        <PieChart>
          <Pie
            cx="30%"
            cy="70%"
            startAngle={0}
            endAngle={180}
            data={vaccinationByGender}
            dataKey="count"
          >
            <Cell name="Male" fill="green" />
            <Cell name="Female" fill="#3fe " />
            <Cell name="Others" fill="#887687" />
          </Pie>
          <Legend align="middle" />
        </PieChart>
      </ResponsiveContainer>
    </>
  )
}

export default VaccinationByGender
