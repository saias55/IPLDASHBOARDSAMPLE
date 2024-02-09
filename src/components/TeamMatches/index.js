import './index.css'

const TeamMatches = props => {
  const {eachRecent} = props
  const {competingTeam, result, matchStatus} = eachRecent
  return (
    <li className="border-recebt-matches">
      <h1>{competingTeam}</h1>
      <p>{result}</p>
      <p>{matchStatus}</p>
    </li>
  )
}

export default TeamMatches
