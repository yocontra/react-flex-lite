import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { getPropsWithLayout, propTypes, default as Layout } from './Layout'
declare const componentPropTypes: {
  m: PropTypes.Requireable<string | number>
  mb: PropTypes.Requireable<string | number>
  mt: PropTypes.Requireable<string | number>
  mr: PropTypes.Requireable<string | number>
  ml: PropTypes.Requireable<string | number>
  mx: PropTypes.Requireable<string | number>
  my: PropTypes.Requireable<string | number>
  p: PropTypes.Requireable<string | number>
  pb: PropTypes.Requireable<string | number>
  pt: PropTypes.Requireable<string | number>
  pr: PropTypes.Requireable<string | number>
  pl: PropTypes.Requireable<string | number>
  px: PropTypes.Requireable<string | number>
  py: PropTypes.Requireable<string | number>
  h: PropTypes.Requireable<string | number>
  w: PropTypes.Requireable<string | number>
  flex: PropTypes.Requireable<boolean>
  inline: PropTypes.Requireable<boolean>
  wrap: PropTypes.Requireable<boolean>
  reverse: PropTypes.Requireable<boolean>
  column: PropTypes.Requireable<boolean>
  align: PropTypes.Requireable<string>
  alignContent: PropTypes.Requireable<string>
  alignSelf: PropTypes.Requireable<string>
  justify: PropTypes.Requireable<string>
  order: PropTypes.Requireable<number>
  shrink: PropTypes.Requireable<number | boolean>
  grow: PropTypes.Requireable<number | boolean>
  basis: PropTypes.Requireable<number>
  auto: PropTypes.Requireable<boolean>
  center: PropTypes.Requireable<boolean>
  as: PropTypes.Requireable<string>
  children: PropTypes.Requireable<PropTypes.ReactNodeLike>
}
declare type BaseComponentProps = PropTypes.InferProps<
  typeof componentPropTypes
>
export interface ComponentProps extends BaseComponentProps {
  [key: string]: any
}
declare class Box extends PureComponent<ComponentProps> {
  static displayName: string
  static propTypes: {
    m: PropTypes.Requireable<string | number>
    mb: PropTypes.Requireable<string | number>
    mt: PropTypes.Requireable<string | number>
    mr: PropTypes.Requireable<string | number>
    ml: PropTypes.Requireable<string | number>
    mx: PropTypes.Requireable<string | number>
    my: PropTypes.Requireable<string | number>
    p: PropTypes.Requireable<string | number>
    pb: PropTypes.Requireable<string | number>
    pt: PropTypes.Requireable<string | number>
    pr: PropTypes.Requireable<string | number>
    pl: PropTypes.Requireable<string | number>
    px: PropTypes.Requireable<string | number>
    py: PropTypes.Requireable<string | number>
    h: PropTypes.Requireable<string | number>
    w: PropTypes.Requireable<string | number>
    flex: PropTypes.Requireable<boolean>
    inline: PropTypes.Requireable<boolean>
    wrap: PropTypes.Requireable<boolean>
    reverse: PropTypes.Requireable<boolean>
    column: PropTypes.Requireable<boolean>
    align: PropTypes.Requireable<string>
    alignContent: PropTypes.Requireable<string>
    alignSelf: PropTypes.Requireable<string>
    justify: PropTypes.Requireable<string>
    order: PropTypes.Requireable<number>
    shrink: PropTypes.Requireable<number | boolean>
    grow: PropTypes.Requireable<number | boolean>
    basis: PropTypes.Requireable<number>
    auto: PropTypes.Requireable<boolean>
    center: PropTypes.Requireable<boolean>
    as: PropTypes.Requireable<string>
    children: PropTypes.Requireable<PropTypes.ReactNodeLike>
  }
  render: () => import('react').DOMElement<never, Element>
}
declare class Flex extends PureComponent<ComponentProps> {
  static displayName: string
  static propTypes: {
    m: PropTypes.Requireable<string | number>
    mb: PropTypes.Requireable<string | number>
    mt: PropTypes.Requireable<string | number>
    mr: PropTypes.Requireable<string | number>
    ml: PropTypes.Requireable<string | number>
    mx: PropTypes.Requireable<string | number>
    my: PropTypes.Requireable<string | number>
    p: PropTypes.Requireable<string | number>
    pb: PropTypes.Requireable<string | number>
    pt: PropTypes.Requireable<string | number>
    pr: PropTypes.Requireable<string | number>
    pl: PropTypes.Requireable<string | number>
    px: PropTypes.Requireable<string | number>
    py: PropTypes.Requireable<string | number>
    h: PropTypes.Requireable<string | number>
    w: PropTypes.Requireable<string | number>
    flex: PropTypes.Requireable<boolean>
    inline: PropTypes.Requireable<boolean>
    wrap: PropTypes.Requireable<boolean>
    reverse: PropTypes.Requireable<boolean>
    column: PropTypes.Requireable<boolean>
    align: PropTypes.Requireable<string>
    alignContent: PropTypes.Requireable<string>
    alignSelf: PropTypes.Requireable<string>
    justify: PropTypes.Requireable<string>
    order: PropTypes.Requireable<number>
    shrink: PropTypes.Requireable<number | boolean>
    grow: PropTypes.Requireable<number | boolean>
    basis: PropTypes.Requireable<number>
    auto: PropTypes.Requireable<boolean>
    center: PropTypes.Requireable<boolean>
    as: PropTypes.Requireable<string>
    children: PropTypes.Requireable<PropTypes.ReactNodeLike>
  }
  render: () => import('react').DOMElement<never, Element>
}
export { getPropsWithLayout, propTypes, Layout, Box, Flex }