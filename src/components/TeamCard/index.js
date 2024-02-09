import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {eachTeam, index} = props
  const {id, teamName} = eachTeam
  return (
    <Link to={`/team-matches/${id}`} className="link-styles">
      <li className="border-for-team">
        <h1>
          {index + 1}.{teamName}
        </h1>
      </li>
    </Link>
  )
}

export default TeamCard
