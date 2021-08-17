import { createElement, PureComponent, useContext } from 'react'
import PropTypes from 'prop-types'
import {
  getPropsWithLayout,
  propTypes,
  LayoutContext,
  default as Layout
} from './Layout'

const componentPropTypes = {
  as: PropTypes.string,
  children: PropTypes.node,
  ...propTypes
}

type BaseComponentProps = PropTypes.InferProps<typeof componentPropTypes>

export interface ComponentProps extends BaseComponentProps {
  [key: string]: any
}

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

export { getPropsWithLayout, propTypes, Layout, LayoutContext, Box, Flex }
