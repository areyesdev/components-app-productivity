import React from 'react'
import Spacer from '../../layout/Spacer'

export default {
  title: 'Layout/Spacer',
  component: Spacer,
}

export const Default = () => <Spacer size="md" isVisible />
export const Horizontal = () => <Spacer.Horizontal size="md" isVisible />
export const Vertical = () => (
  <Spacer.Vertical size="md" isVisible maxHeight={200} />
)
