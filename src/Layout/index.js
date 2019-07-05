import React from 'react'
import { pick, omit } from 'lodash'
import cn from 'classnames'
import hoist from 'hoist-non-react-statics'
import PropTypes from 'prop-types'
import getStyle from './getStyle'

const px = PropTypes.oneOfType([ PropTypes.string, PropTypes.number ])
const propTypes = {
  m: px, mb: px, mt: px, mr: px, ml: px, mx: px, my: px,
  p: px, pb: px, pt: px, pr: px, pl: px, px: px, py: px,
  h: px, w: px,
  flex: PropTypes.bool,
  inline: PropTypes.bool,
  wrap: PropTypes.bool,
  reverse: PropTypes.bool,
  column: PropTypes.bool,
  align: PropTypes.oneOf([
    'stretch', 'center', 'flex-start',
    'flex-end', 'baseline',
    'initial', 'inherit'
  ]),
  alignContent: PropTypes.oneOf([
    'stretch', 'center', 'flex-start',
    'flex-end', 'space-between',
    'space-around', 'initial', 'inherit'
  ]),
  alignSelf: PropTypes.oneOf([
    'auto', 'stretch', 'center',
    'flex-start', 'flex-end', 'baseline',
    'initial', 'inherit'
  ]),
  justify: PropTypes.oneOf([
    'flex-start', 'flex-end', 'center',
    'space-between', 'space-around',
    'initial', 'inherit'
  ]),
  order: PropTypes.number,
  shrink: PropTypes.oneOfType([ PropTypes.bool, PropTypes.number ]),
  grow: PropTypes.oneOfType([ PropTypes.bool, PropTypes.number ]),
  basis: PropTypes.number,
  auto: PropTypes.bool,
  center: PropTypes.bool
}
const ourProps = [
  'm', 'mb', 'mt', 'mr', 'ml', 'mx', 'my',
  'p', 'pb', 'pt', 'pr', 'pl', 'px', 'py',
  'w', 'h', 'flex', 'wrap', 'auto', 'center',
  'reverse', 'alignSelf', 'alignContent',
  'basis', 'grow', 'shrink', 'center',
  'column', 'align', 'justify', 'order',
  'inline'
]

const ourPropsWithExtra = [ ...ourProps, 'className' ]

export const getPropsWithLayout = (props, defaultProps) => {
  const fullProps = defaultProps ? { ...defaultProps, ...props } : props
  const passThrough = omit(props, ourPropsWithExtra)
  const styleProps = pick(fullProps, ourProps)
  if (Object.keys(styleProps).length === 0) return props
  const ourClass = getStyle(styleProps)
  const className = props.className
    ? cn(ourClass, props.className)
    : ourClass
  return { className, ...passThrough }
}

const Layout = (InputComponent, defaultProps) => {
  const out = React.forwardRef((props, ref) => {
    const nprops = getPropsWithLayout(props, defaultProps)
    return <InputComponent ref={ref} {...nprops} />
  })
  hoist(out, InputComponent)
  const name = InputComponent.displayName || InputComponent.name
  out.displayName = name ? `Layout(${name})` : 'Layout'
  out.propTypes = propTypes
  return out
}
export default Layout
