import React, { forwardRef, createContext, useContext } from 'react'
import PropTypes from 'prop-types'
import pick from 'lodash.pick'
import omit from 'lodash.omit'
import cn from 'clsx'
import hoist from 'hoist-non-react-statics'
import * as defaultConfig from './config'
import getStyle from './getStyle'
import type { Configuration } from '../types'

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
    'normal',
    'flex-start',
    'flex-end',
    'center',
    'start',
    'end',
    'self-start',
    'self-end',
    'baseline',
    'stretch',
    'initial',
    'inherit'
  ]),
  alignContent: PropTypes.oneOf([
    'start',
    'end',
    'flex-start',
    'flex-end',
    'center',
    'normal',
    'baseline',
    'space-between',
    'space-around',
    'space-evenly',
    'stretch',
    'initial',
    'inherit'
  ]),
  alignSelf: PropTypes.oneOf([
    'auto',
    'normal',
    'self-start',
    'self-end',
    'flex-start',
    'flex-end',
    'center',
    'stretch',
    'baseline',
    'initial',
    'inherit'
  ]),
  justify: PropTypes.oneOf([
    'start',
    'end',
    'flex-start',
    'flex-end',
    'center',
    'left',
    'right',
    'normal',
    'space-between',
    'space-around',
    'space-evenly',
    'baseline',
    'initial',
    'inherit'
  ]),
  order: PropTypes.number,
  shrink: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  grow: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  basis: PropTypes.number,
  auto: PropTypes.bool,
  hcenter: PropTypes.bool,
  vcenter: PropTypes.bool,
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
  'hcenter',
  'vcenter',
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

/**
 * Function used to generate a className for the component as well
 * as strip out any non-style props
 * @param props
 * @param defaultProps
 * @returns {object} returns a className and any other non-style props
 */
export const getPropsWithLayout = <P extends InjectedLayoutProps>(
  props: P,
  defaultProps?: P,
  config?: Configuration
): Exclude<P, InjectedLayoutProps> => {
  const fullProps = defaultProps ? { ...defaultProps, ...props } : props
  const passThrough = omit(props, ourPropsWithExtra)
  const styleProps = pick(fullProps, ourProps)
  if (Object.keys(styleProps).length === 0)
    return props as Exclude<P, InjectedLayoutProps>
  const ourClass = getStyle(styleProps, config || defaultConfig)
  const className: string = props.className
    ? cn(props.className, ourClass.trim())
    : ourClass
  return { className, ...passThrough } as Exclude<P, InjectedLayoutProps>
}

export const LayoutContext = createContext<Configuration>(defaultConfig)

const Layout = <P extends InjectedLayoutProps>(
  InputComponent: React.ComponentType<P>,
  defaultProps?: P
) => {
  const out = forwardRef<typeof InputComponent, P>(
    (props: P, ref: React.Ref<typeof InputComponent>) => {
      const config = useContext(LayoutContext)
      const nprops: P = getPropsWithLayout(props, defaultProps, config)
      return <InputComponent ref={ref} {...nprops} />
    }
  )
  hoist(out, InputComponent)
  const name = InputComponent.displayName || InputComponent.name
  out.displayName = name ? `Layout(${name})` : 'Layout'
  out.propTypes = InputComponent.propTypes
    ? {
        ...InputComponent.propTypes,
        ...propTypes
      }
    : (propTypes as any)
  return out
}
export default Layout
