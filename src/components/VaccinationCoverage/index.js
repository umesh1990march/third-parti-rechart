// Write your code here
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
} from 'recharts'

const VaccinationCoverage = props => {
  const {vaccinationByDate} = props

  const Dataformatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}K`
    }
    return `${number.toString()}k`
  }

  console.log(vaccinationByDate)
  return (
    <>
      <ResponsiveContainer width="100%" height={500}>
        <BarChart data={vaccinationByDate} margin={{top: 5}}>
          <XAxis
            dataKey="vaccine_date"
            tick={{
              stroke: 'gray',
              strokeWidth: 1,
            }}
          />
          <YAxis tickFormatter={Dataformatter} />

          <Legend
            wrapperStyle={{
              padding: 30,
            }}
          />
          <CartesianGrid strokeDasharray="3 3" />

          <Bar dataKey="dose_1" name="Dose 1" fill="red" />
          <Bar dataKey="dose_2" name="Dose 2" fill="green" />
        </BarChart>
      </ResponsiveContainer>
    </>
  )
}

export default VaccinationCoverage
