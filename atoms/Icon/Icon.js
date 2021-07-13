import React from 'react'
import PropTypes from 'prop-types'
import { mapType } from './helpers'

import './Icon.css'

const Icon = ({ type }) => (
  <div>
    <img src={mapType(type)} />
  </div>
)

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
}

Icon.defaultProps = {
  size: 'md',
}

export default Icon
