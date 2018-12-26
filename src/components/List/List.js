import React from 'react';
import PropTypes from 'prop-types'
import ListItem from '../ListItem/ListItem'
import './List.scss'

const List = (props) => {
  return (
    <ul className="list-page">
      {props.shows.map((show, index) => {
          return <ListItem key={index +1} show={show.show} />
        }) 
      }
    </ul>
  )
}
List.propTypes = {
  shows: PropTypes.array.isRequired, 
}
export default List
