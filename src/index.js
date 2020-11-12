import { createElement, PureComponent } from 'react'
import PropTypes from 'prop-types'
import { getPropsWithLayout, default as Layout } from './Layout'

const propTypes = {
  as: PropTypes.string,
  children: PropTypes.node
}

class Box extends PureComponent {
  static propTypes = propTypes

  render = () => {
    const { as, children, ...rest } = this.props
    return createElement(as || 'div', getPropsWithLayout(rest), children)
  }
}

class Flex extends PureComponent {
  static displayName = 'Flex' // override
  static propTypes = propTypes

  render = () => {
    const { as, children, ...rest } = this.props
    return createElement(as || 'div', getPropsWithLayout(rest, { flex: true }), children)
  }
}

export { getPropsWithLayout, Layout, Box, Flex }
