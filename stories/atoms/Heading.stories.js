import React from 'react'
import Heading from '../../atoms/Heading'

export default {
  title: 'Atoms/Heading',
  component: Heading,
}

export function Default() {
  return <Heading>Heading</Heading>
}
export function ColorPrimary() {
  return <Heading color="primary">Heading</Heading>
}
export function ColorDefault() {
  return <Heading color="dafault">Heading</Heading>
}
export function Medium() {
  return <Heading size="md">Heading</Heading>
}
export function Small() {
  return <Heading size="sm">Heading</Heading>
}
export function ExtraSmall() {
  return <Heading size="xs">Heading</Heading>
}
