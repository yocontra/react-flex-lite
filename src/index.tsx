import { createElement, PureComponent } from 'react'
import PropTypes from 'prop-types'
import { getPropsWithLayout, propTypes, default as Layout } from './Layout'

const componentPropTypes = {
  as: PropTypes.string,
  children: PropTypes.node,
  ...propTypes
}

type BaseComponentProps = PropTypes.InferProps<typeof componentPropTypes>

export interface ComponentProps extends BaseComponentProps {
  [key: string]: any
}

class Box extends PureComponent<ComponentProps> {
  static displayName = 'Box'
  static propTypes = componentPropTypes

  render = () => {
    const { as, children, ...rest } = this.props
    return createElement(as || 'div', getPropsWithLayout({ ...rest }), children)
  }
}

class Flex extends PureComponent<ComponentProps> {
  static displayName = 'Flex'
  static propTypes = componentPropTypes

  render = () => {
    const { as, children, ...rest } = this.props
    return createElement(
      as || 'div',
      getPropsWithLayout({ ...rest }, { flex: true }),
      children
    )
  }
}

export { getPropsWithLayout, propTypes, Layout, Box, Flex }
