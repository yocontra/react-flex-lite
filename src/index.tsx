import React, { createElement, useContext } from 'react'
import PropTypes from 'prop-types'
import {
  getPropsWithLayout,
  propTypes,
  LayoutContext,
  default as Layout
} from './Layout'

const componentPropTypes = {
  as: PropTypes.string,
  ...propTypes
}

export type ComponentProps = PropTypes.InferProps<typeof componentPropTypes> &
  React.AllHTMLAttributes<HTMLDivElement>

const Box = ({ as, children, ...rest }: ComponentProps) => {
  const config = useContext(LayoutContext)
  return createElement(
    as || 'div',
    getPropsWithLayout(rest, undefined, config),
    children
  )
}
Box.displayName = 'Box'
Box.propTypes = componentPropTypes

const Flex = ({ as, children, ...rest }: ComponentProps) => {
  const config = useContext(LayoutContext)
  return createElement(
    as || 'div',
    getPropsWithLayout(rest, { flex: true }, config),
    children
  )
}
Flex.displayName = 'Flex'
Flex.propTypes = componentPropTypes

const HBox = ({ as, children, ...rest }: ComponentProps) => {
  const config = useContext(LayoutContext)
  return createElement(
    as || 'div',
    getPropsWithLayout(rest, { flex: true }, config),
    children
  )
}
HBox.displayName = 'HBox'
HBox.propTypes = componentPropTypes

const VBox = ({ as, children, ...rest }: ComponentProps) => {
  const config = useContext(LayoutContext)
  return createElement(
    as || 'div',
    getPropsWithLayout(rest, { flex: true, column: true }, config),
    children
  )
}
VBox.displayName = 'VBox'
VBox.propTypes = componentPropTypes

export {
  getPropsWithLayout,
  propTypes,
  Layout,
  LayoutContext,
  Box,
  Flex,
  HBox,
  VBox
}
