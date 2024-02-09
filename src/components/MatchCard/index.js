// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TeamMatches from '../TeamMatches'
import './index.css'

class MatchCard extends Component {
  state = {teamFullDetails: [], loading: true}

  componentDidMount() {
    this.getSingleTeamDetails()
  }

  getSingleTeamDetails = async () => {
    // console.log(this.props)
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/ipl/${id}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    if (response.ok) {
      const updatedData = {
        umpires: data.latest_match_details.umpires,
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        date: data.latest_match_details.date,
        firstInnings: data.latest_match_details.first_innings,
        id: data.latest_match_details.id,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        matchStatus: data.latest_match_details.match_status,
        result: data.latest_match_details.result,
        secondInnings: data.latest_match_details.second_innings,
        venue: data.latest_match_details.venue,
        teamBannerUrl: data.team_banner_url,
        recentMatches: data.recent_matches.map(eachRecentMatch => ({
          competingTeam: eachRecentMatch.competing_team,
          competingTeamLogo: eachRecentMatch.competing_team_logo,
          date: eachRecentMatch.date,
          firstInnings: eachRecentMatch.first_innings,
          id: eachRecentMatch.id,
          manOfTheMatch: eachRecentMatch.man_of_the_match,
          matchStatus: eachRecentMatch.match_status,
          result: eachRecentMatch.result,
          secondInnings: eachRecentMatch.second_innings,
          umpires: eachRecentMatch.umpires,
          venue: eachRecentMatch.venue,
        })),
      }
      console.log(updatedData)
      this.setState({teamFullDetails: updatedData, loading: false})
    }
  }

  displayIndividualTeamDetails = () => {
    const {teamFullDetails} = this.state
    const {
      recentMatches,
      teamBannerUrl,
      competingTeam,
      date,
      venue,
      result,
      firstInnings,
      secondInnings,
      manOfTheMatch,
      umpires,
    } = teamFullDetails
    return (
      <div>
        <img src={teamBannerUrl} alt="myTeam" />
        <h1>Latest Matches</h1>
        <div>
          <h1>{competingTeam}</h1>
          <p>{date}</p>
          <p>{venue}</p>
          <p>{result}</p>
          <hr />
          <h3>FIRST INNINGS</h3>
          <h3>{firstInnings}</h3>
          <h3>SECOND INNINGS</h3>
          <h3>{secondInnings}</h3>
          <h3>MAN OF THE MATCH</h3>
          <h3>{manOfTheMatch}</h3>
          <h3>UMPIRES</h3>
          <h3>{umpires}</h3>
        </div>
        <ul className="unorderedMAtchCArd">
          {recentMatches.map(eachRecent => (
            <TeamMatches eachRecent={eachRecent} key={eachRecent.id} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {loading} = this.state
    return (
      <div>
        {loading ? (
          <Loader type="Bars" color="green" width={50} height={50} />
        ) : (
          this.displayIndividualTeamDetails()
        )}
      </div>
    )
  }
}

export default MatchCard
