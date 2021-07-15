import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { getSize } from './helpers'

import './Spacer.css'

const Horizontal = ({ size, isVisible }) => (
  <div
    className={classNames('spacer', 'horizontal', {
      'is-visible': isVisible,
    })}
    style={{
      height: getSize(size),
    }}
  />
)

Horizontal.defaultProps = {
  size: 'none',
}

Horizontal.propTypes = {
  size: PropTypes.string.isRequired,
  isVisible: PropTypes.bool,
}

export default Horizontal
