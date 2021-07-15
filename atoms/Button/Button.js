import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './Button.css'

const Button = ({ type, children, isBlock, onClick }) => (
  <button
    className={classNames('button', {
      [`type-${type}`]: type,
      ['is-block']: isBlock && type !== 'tertiary',
    })}
    onClick={onClick}
  >
    {children}
  </button>
)

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  onClick: PropTypes.func,
  isBlock: PropTypes.bool,
}

Button.defaultProps = {
  isBlock: true,
  onClick: () => {},
}

export default Button
