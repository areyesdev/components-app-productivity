import React from 'react'
import Button from '../../atoms/Button'

export default {
  title: 'Atoms/Button',
  component: Button,
}

export function Primary() {
  return <Button type="primary">Button primary</Button>
}
export function Secondary() {
  return <Button type="secondary">Button secondary</Button>
}
export function Tertiary() {
  return <Button type="tertiary">Button tertiary</Button>
}
