import { createElement, PureComponent } from 'react'
import PropTypes from 'prop-types'
import { getPropsWithLayout, propTypes, default as Layout } from './Layout'

const componentPropTypes = {
  as: PropTypes.string,
  children: PropTypes.node,
  ...propTypes
}

class Box extends PureComponent {
  static displayName = 'Box'
  static propTypes = componentPropTypes

  render = () => {
    const { as, children, ...rest } = this.props
    return createElement(as || 'div', getPropsWithLayout(rest), children)
  }
}

class Flex extends PureComponent {
  static displayName = 'Flex'
  static propTypes = componentPropTypes

  render = () => {
    const { as, children, ...rest } = this.props
    return createElement(as || 'div', getPropsWithLayout(rest, { flex: true }), children)
  }
}

export {
  getPropsWithLayout, propTypes,
  Layout, Box, Flex
}
