import React from 'react'
import Heading from '../../atoms/Heading'

export default {
  title: 'Atoms/Heading',
  component: Heading,
}

export const Default = () => <Heading>Default Heading</Heading>

export const Colors = () => (
  <>
    <Heading color="default">Default Color</Heading>
    <Heading color="primary">Primary Color</Heading>
  </>
)

export const Sizes = () => (
  <>
    <Heading size="xs">Andres aprende a programar</Heading>
    <Heading size="sm">Andres aprende a programar</Heading>
    <Heading size="md">Andres aprende a programar</Heading>
    <Heading size="lg">Andres aprende a programar</Heading>
    <Heading size="xl">Andres aprende a programar</Heading>
    <Heading size="2xl">Andres aprende a programar</Heading>
  </>
)
