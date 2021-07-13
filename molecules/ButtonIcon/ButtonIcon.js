import React from 'react'
import PropTypes from 'prop-types'

import Button from '../../atoms/Button'
import Icon from '../../atoms/Icon'

function ButtonIcon({ children, type, icon }) {
  return (
    <Button type={type} isBlock={false}>
      <span style={{ marginRight: 10 }}>{children}</span>{' '}
      {/* FIXME: Add vertical spacer copmponent */}
      <Icon type={icon} />
    </Button>
  )
}

ButtonIcon.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf[('primary', 'secondary', 'tertiary')],
  icon: PropTypes.string.isRequired,
}

ButtonIcon.defaultProps = {
  type: 'secondary',
}

export default ButtonIcon
