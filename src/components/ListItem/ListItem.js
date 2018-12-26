import React from 'react'
import PropTypes from 'prop-types'
import './ListItem.scss'

 const showItem = (props) => {
  return(
    <li className="show-card" key={props.show.id}>
      <div>
        <img src={props.show.image.medium}/>
      </div>
      <div>
        <div className="title">{props.show.name}</div>
        <div >{props.show.genres.map((genre, index) =>(<span className="genre" key={index}>{genre}  </span>))}</div>
      </div>
    </li>
  )
}
showItem.propTypes = {
  show: PropTypes.object.isRequired, 
}
export default showItem;
