// Write your code here
import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import VaccinationByAge from '../VaccinationByAge'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationCoverage from '../VaccinationCoverage'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}

export default class CowinDashboard extends Component {
  state = {vaccinationCategory: {}, apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getVaccinations()
  }

  getVaccinations = async () => {
    this.setState({apiStatus: apiStatusConstants.loading})

    const response = await fetch('https://apis.ccbp.in/covid-vaccination-data')
    const data = await response.json()
    const updatedData = {
      vaccinationByDate: data.last_7_days_vaccination,
      vaccinationByAge: data.vaccination_by_age,
      vaccinationByGender: data.vaccination_by_gender,
    }
    if (response.ok === true) {
      this.setState({
        vaccinationCategory: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoadingView = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  renderFailureView = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
      />
      <h1>Something went wrong</h1>
    </div>
  )

  renderChartingView = () => {
    const {vaccinationCategory} = this.state
    const {
      vaccinationByAge,
      vaccinationByDate,
      vaccinationByGender,
    } = vaccinationCategory

    // console.log(vaccinationCategory)

    return (
      <div>
        <h1>Vaccination Coverage</h1>
        <VaccinationCoverage vaccinationByDate={vaccinationByDate} />
        <VaccinationByGender vaccinationByGender={vaccinationByGender} />
        <VaccinationByAge vaccinationByAge={vaccinationByAge} />
      </div>
    )
  }

  getRenderCase = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.loading:
        return this.renderLoadingView()
      case apiStatusConstants.success:
        return this.renderChartingView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="co-win-app-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
          />
          <p>co-win</p>
        </div>
        <h1>CoWIN Vaccination in India</h1>
        {this.getRenderCase()}
      </div>
    )
  }
}
