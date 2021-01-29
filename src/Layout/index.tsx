import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import pick from 'lodash.pick'
import omit from 'lodash.omit'
import cn from 'classnames'
import hoist from 'hoist-non-react-statics'
import getStyle from './getStyle'

const px = PropTypes.oneOfType([PropTypes.string, PropTypes.number])
export const propTypes = {
  m: px,
  mb: px,
  mt: px,
  mr: px,
  ml: px,
  mx: px,
  my: px,
  p: px,
  pb: px,
  pt: px,
  pr: px,
  pl: px,
  px: px,
  py: px,
  h: px,
  w: px,
  flex: PropTypes.bool,
  inline: PropTypes.bool,
  wrap: PropTypes.bool,
  reverse: PropTypes.bool,
  column: PropTypes.bool,
  align: PropTypes.oneOf([
    'stretch',
    'center',
    'flex-start',
    'flex-end',
    'baseline',
    'initial',
    'inherit'
  ]),
  alignContent: PropTypes.oneOf([
    'stretch',
    'center',
    'flex-start',
    'flex-end',
    'space-between',
    'space-around',
    'initial',
    'inherit'
  ]),
  alignSelf: PropTypes.oneOf([
    'auto',
    'stretch',
    'center',
    'flex-start',
    'flex-end',
    'baseline',
    'initial',
    'inherit'
  ]),
  justify: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    'initial',
    'inherit'
  ]),
  order: PropTypes.number,
  shrink: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  grow: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  basis: PropTypes.number,
  auto: PropTypes.bool,
  center: PropTypes.bool
}

// this ordering is important, it determines how rules are applied
const ourProps = [
  'm',
  'mb',
  'mt',
  'mr',
  'ml',
  'mx',
  'my',
  'p',
  'pb',
  'pt',
  'pr',
  'pl',
  'px',
  'py',
  'w',
  'h',
  'flex',
  'wrap',
  'auto',
  'center',
  'reverse',
  'alignSelf',
  'alignContent',
  'basis',
  'grow',
  'shrink',
  'center',
  'column',
  'align',
  'justify',
  'order',
  'inline'
]

const ourPropsWithExtra = [...ourProps, 'className']

export type StyleProps = PropTypes.InferProps<typeof propTypes>
export interface InjectedLayoutProps extends StyleProps {
  className?: string
  [key: string]: any
}
export type Ref = any

/**
 * Function used to generate a className for the component as well
 * as strip out any non-style props
 * @param props
 * @param defaultProps
 * @returns {object} returns a className and any other non-style props
 */
export const getPropsWithLayout = <P extends InjectedLayoutProps>(
  props: P,
  defaultProps?: P
): Exclude<P, InjectedLayoutProps> => {
  const fullProps = defaultProps ? { ...defaultProps, ...props } : props
  const passThrough = omit(props, ourPropsWithExtra)
  const styleProps = pick(fullProps, ourProps)
  if (Object.keys(styleProps).length === 0)
    return props as Exclude<P, InjectedLayoutProps>
  const ourClass = getStyle(styleProps)
  const className: string = props.className
    ? cn(ourClass, props.className)
    : ourClass
  return { className, ...passThrough } as Exclude<P, InjectedLayoutProps>
}

const Layout = <P extends InjectedLayoutProps>(
  InputComponent: React.ComponentType<P>,
  defaultProps?: P
) => {
  const out = forwardRef<Ref, P>((props, ref) => {
    const nprops = getPropsWithLayout(props, defaultProps)
    return <InputComponent ref={ref} {...(nprops as P)} />
  })
  hoist(out, InputComponent)
  const name = InputComponent.displayName || InputComponent.name
  out.displayName = name ? `Layout(${name})` : 'Layout'
  out.propTypes = InputComponent.propTypes
    ? {
        ...InputComponent.propTypes,
        ...propTypes
      }
    : (propTypes as any) // TODO FIX ME
  return out
}
export default Layout
