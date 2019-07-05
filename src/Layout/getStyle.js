import { supportedProperty, supportedValue } from 'css-vendor'
import memo from 'moize'
import { rule } from './nano'
import { space } from './config'

const mrule = memo.deep(rule)
const directions = {
  t: [ 'top' ],
  r: [ 'right' ],
  b: [ 'bottom' ],
  l: [ 'left' ],
  x: [ 'left', 'right' ],
  y: [ 'top', 'bottom' ]
}
const spacingTypes = {
  m: 'margin',
  p: 'padding'
}
const num = (n) => typeof n === 'number' && !isNaN(n)
const px = (n) => num(n) ? `${n}px` : n
const heightWidth = (n) => !num(n) || n > 1 ? px(n) : `${n * 100}%`
const scaleValue = (n) => {
  const neg = n < 0 ? -1 : 1
  return !num(n) ? n : (space[Math.abs(n)] || Math.abs(n)) * neg
}
const decl = (k, v) => {
  if (!k || v == null) return {}
  const nk = supportedProperty(k)
  const nv = supportedValue(k, v)
  if (!nk || nv == null) return {} // totally unsupported
  return { [nk]: nv }
}

const rules = [
  // spacing shorthands
  {
    match: new RegExp(`^[${Object.keys(spacingTypes).join('')}][${Object.keys(directions).join('')}]?$`),
    map: (n, key) => {
      const [ type, dir ] = key.split('')
      const prop = spacingTypes[type]
      const dirs = directions[dir] || [ '' ]
      const val = scaleValue(n)
      return dirs.reduce((prev, d) => ({
        ...prev,
        ...decl(d ? `${prop}-${d}` : prop, px(val))
      }), {})
    }
  },
  // height and width shorthands
  {
    match: 'h',
    map: (n) => decl('height', heightWidth(n))
  },
  {
    match: 'w',
    map: (n) => decl('width', heightWidth(n))
  },
  // flexbox specific attributes
  {
    match: 'flex',
    map: (n, k, others) => {
      const flex = others.inline ? 'inline-flex': 'flex'
      return decl('display', n ? flex : 'block')
    }
  },
  {
    match: 'wrap',
    map: (n) => decl('flex-wrap', n ? 'wrap' : 'nowrap')
  },
  {
    match: 'reverse',
    map: (n, k, others) => {
      if (others.column) return {} // column rule will handle it
      return decl('flex-direction', n ? 'row-reverse' : undefined)
    }
  },
  {
    match: 'column',
    map: (n, k, others) => {
      const base = others.reverse ? 'column-reverse' : 'column'
      return decl('flex-direction', n ? base : undefined)
    }
  },
  {
    match: 'align',
    map: (n) => decl('align-items', n)
  },
  {
    match: 'alignContent',
    map: (n) => decl('align-content', n)
  },
  {
    match: 'alignSelf',
    map: (n) => decl('align-self', n)
  },
  {
    match: 'justify',
    map: (n) => decl('justify-content', n)
  },
  {
    match: 'order',
    map: (n) => decl('order', n)
  },
  {
    match: 'shrink',
    map: (n) => decl('flex-shrink', +n)
  },
  {
    match: 'grow',
    map: (n) => decl('flex-grow', +n)
  },
  {
    match: 'basis',
    map: (n) => decl('flex-basis', n)
  },
  // flexbox shorthands
  {
    match: 'auto',
    map: (n) =>
      decl('flex', n ? '1 1 auto' : undefined)
  },
  {
    match: 'center',
    map: (n) => n ? {
      ...decl('justify-content', 'center'),
      ...decl('align-items', 'center')
    } : {}
  }
]

export default memo.deep((props) => {
  const css = Object.entries(props).reduce((prev, [ k, v ]) => {
    rules.forEach((rule) => {
      if (typeof rule.match === 'string') {
        if (k === rule.match) {
          prev = { ...prev, ...rule.map(v, k, props) }
        }
        return
      }

      if (rule.match.test(k)) {
        prev = { ...prev, ...rule.map(v, k, props) }
      }
    })
    return prev
  }, {})
  return Object.keys(css).length ? mrule(css) : undefined
})
