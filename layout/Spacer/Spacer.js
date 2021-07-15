import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Horizontal from './Horizontal'
import Vertical from './Vertical'
import { getSize } from './helpers'
import './Spacer.css'

const Spacer = ({ size, isVisible }) => (
  <div
    className={classNames('spacer', {
      'is-visible': isVisible,
    })}
    style={{
      display: 'inline-block',
      width: getSize(size),
      height: getSize(size),
    }}
  ></div>
)

Spacer.defaultProps = {
  size: 'none',
}

Spacer.propTypes = {
  size: PropTypes.number.isRequired,
  isVisible: PropTypes.bool,
}

Spacer.Horizontal = Horizontal
Spacer.Vertical = Vertical

export default Spacer
