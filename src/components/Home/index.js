// Write your code here
import {Component} from 'react'

import {Link} from 'react-router-dom'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {iplList: [], loading: true}

  componentDidMount() {
    this.getIPLDetails()
  }

  getIPLDetails = async () => {
    const url = 'https://apis.ccbp.in/ipl'
    const response = await fetch(url)
    console.log(response)
    const data = await response.json()
    console.log(data)
    if (response.ok) {
      const updatedData = data.teams.map(eachTeam => ({
        id: eachTeam.id,
        teamName: eachTeam.name,
        teamUrl: eachTeam.team_image_url,
      }))

      this.setState({loading: false, iplList: updatedData})
    }
  }

  getTeamDetails = () => {
    const {iplList} = this.state
    return (
      <ul className="unorderedList">
        {iplList.map((eachTeam, index) => (
          <TeamCard eachTeam={eachTeam} key={eachTeam.id} index={index} />
        ))}
      </ul>
    )
  }

  render() {
    const {loading} = this.state
    return (
      <Link to="/">
        <div>
          {loading ? (
            <Loader type="BallTriangle" color="green" width={50} height={50} />
          ) : (
            this.getTeamDetails()
          )}
        </div>
      </Link>
    )
  }
}

export default Home
