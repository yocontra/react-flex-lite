import { supportedProperty, supportedValue } from 'css-vendor'
import memo from 'moize'
import { sheet } from './nano'
import type { Configuration } from '../types'

type Value = number | string | undefined
type Props = Record<string, Value>
type Mapper = (
  v: Value,
  k: string,
  props: Props,
  config: Configuration
) => Record<string, Value>
type Rule = {
  match: string | RegExp
  map: Mapper
}

// detect IE 6 - 11
const isOldIE =
  typeof navigator !== 'undefined' &&
  (navigator.userAgent.indexOf('MSIE') !== -1 ||
    navigator.userAgent.indexOf('Trident') !== -1)

const fixIE = (css: Record<string, any>) => {
  if (!isOldIE || css.display !== 'flex') return css // dont need to do anything
  return {
    'min-width': '0%',
    ...css
  }
}
const msheet = memo.deep(sheet, { maxSize: 1024 })
const directions = {
  t: ['top'],
  r: ['right'],
  b: ['bottom'],
  l: ['left'],
  x: ['left', 'right'],
  y: ['top', 'bottom']
}
const spacingTypes = {
  m: 'margin',
  p: 'padding'
}
const num = (n: any) => typeof n === 'number' && !isNaN(n)
const px = (n: number) => (num(n) ? `${n}px` : n)
const heightWidth = (n: number) => (!num(n) || n > 1 ? px(n) : `${n * 100}%`)
const scaleValue = (n: number, config: Configuration) => {
  const neg = n < 0 ? -1 : 1
  return !num(n) ? n : (config.space[Math.abs(n)] || Math.abs(n)) * neg
}
const decl = (k: string, v: Value) => {
  if (!k || v == null) return {}
  const nk = supportedProperty(k)
  const nv = supportedValue(k, v)
  if (!nk || nv == null) return {} // totally unsupported
  return { [nk]: nv }
}

const rules: Rule[] = [
  // spacing shorthands
  {
    match: new RegExp(
      `^[${Object.keys(spacingTypes).join('')}][${Object.keys(directions).join(
        ''
      )}]?$`
    ),
    map: (n: number, key: string, props: Props, config: Configuration) => {
      const [type, dir] = key.split('')
      const prop = spacingTypes[type]
      const dirs = directions[dir] || ['']
      const val = scaleValue(n, config)
      return dirs.reduce(
        (prev, d) => ({
          ...prev,
          ...decl(d ? `${prop}-${d}` : prop, px(val))
        }),
        {}
      )
    }
  },
  // height and width shorthands
  {
    match: 'h',
    map: (n: number) => decl('height', heightWidth(n))
  },
  {
    match: 'w',
    map: (n: number) => decl('width', heightWidth(n))
  },
  // flexbox specific attributes
  {
    match: 'flex',
    map: (n: number, k: string, others: { inline: string }) => {
      const flex = others.inline ? 'inline-flex' : 'flex'
      return decl('display', n ? flex : 'block')
    }
  },
  {
    match: 'wrap',
    map: (n: number) => decl('flex-wrap', n ? 'wrap' : 'nowrap')
  },
  {
    match: 'reverse',
    map: (n: number, k: string, others: { column?: boolean }) => {
      if (others.column) return {} // column rule will handle it
      return decl('flex-direction', n ? 'row-reverse' : undefined)
    }
  },
  {
    match: 'column',
    map: (n: number, k: string, others: { reverse?: string }) => {
      const base = others.reverse ? 'column-reverse' : 'column'
      return decl('flex-direction', n ? base : undefined)
    }
  },
  {
    match: 'align',
    map: (n: string) => decl('align-items', n)
  },
  {
    match: 'alignContent',
    map: (n: string) => decl('align-content', n)
  },
  {
    match: 'alignSelf',
    map: (n: string) => decl('align-self', n)
  },
  {
    match: 'justify',
    map: (n: string) => decl('justify-content', n)
  },
  {
    match: 'order',
    map: (n: number | string) => decl('order', n)
  },
  {
    match: 'shrink',
    map: (n: number | string) => decl('flex-shrink', +n)
  },
  {
    match: 'grow',
    map: (n: number | string) => decl('flex-grow', +n)
  },
  {
    match: 'basis',
    map: (n: number | string) => decl('flex-basis', n)
  },
  // flexbox shorthands
  {
    match: 'auto',
    map: (n: number) => decl('flex', n ? '1 1 auto' : undefined)
  },
  {
    match: 'hcenter',
    map: (n: number, k: string, others: { column?: boolean }) =>
      n
        ? others.column
          ? decl('align-items', 'center')
          : decl('justify-content', 'center')
        : {}
  },
  {
    match: 'vcenter',
    map: (n: number, k: string, others: { column?: boolean }) =>
      n
        ? others.column
          ? decl('justify-content', 'center')
          : decl('align-items', 'center')
        : {}
  },
  {
    match: 'center',
    map: (n: string) =>
      n
        ? {
            ...decl('justify-content', 'center'),
            ...decl('align-items', 'center')
          }
        : {}
  }
]

export default memo.deep((props: Props, config: Configuration) => {
  const css = Object.entries(props).reduce((prev, [k, v]) => {
    rules.forEach((rule) => {
      if (typeof rule.match === 'string') {
        if (k === rule.match) {
          prev = { ...prev, ...rule.map(v, k, props, config) }
        }
        return
      }

      if (rule.match.test(k)) {
        prev = { ...prev, ...rule.map(v, k, props, config) }
      }
    })
    return prev
  }, {})
  return Object.keys(css).length ? msheet({ flex: fixIE(css) }).flex : undefined
})
