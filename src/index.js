import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { getPropsWithLayout } from './Layout'

const propTypes = {
  as: PropTypes.string,
  children: PropTypes.node
}

export class Box extends PureComponent {
  static propTypes = propTypes

  render = () => {
    const { as, children, ...rest } = this.props
    return React.createElement(as || 'div', getPropsWithLayout(rest), children)
  }
}

export class Flex extends PureComponent {
  static displayName = 'Flex' // override
  static propTypes = propTypes

  render = () => {
    const { as, children, ...rest } = this.props
    return React.createElement(as || 'div', getPropsWithLayout(rest, { flex: true }), children)
  }
}
