# react-flex-lite [![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url]

## Information

<table>
<tr>
<td>Package</td><td>react-flex-lite</td>
</tr>
<tr>
<td>Description</td>
<td>Flexbox components for React, as minimal as possible</td>
</tr>
</table>

## Install

```console
$ npm install react-flex-lite --save
```

## Design

Heavily inspired by [reflexbox](https://github.com/jxnblk/reflexbox) and [rebass](https://github.com/rebassjs/rebass).

This module aims to provide a very lightweight set of components on top of flexbox CSS and layout, and a higher order component to add this functionality to your own components. It does not handle breakpoints, media query listeners, or any other elements of responsive design. For that functionality, you should combine with a library like [react-responsive](https://github.com/contra/react-responsive).

## Example Usage

### Primary Components

```jsx
import { Box, Flex } from 'react-flex-lite'

const Example = () => (
  <Flex column auto>
    <Flex shrink={0}>
      <Box>1</Box>
      <Box>2</Box>
      <Box>3</Box>
    </Flex>
    <Flex shrink={0}>
      <Box>1</Box>
      <Box>2</Box>
      <Box>3</Box>
    </Flex>
  </Flex>
)
```

### Shorthand Components

For code clarity, VBox is a shorthand alias around `<Flex column>` and HBox is an alias for `<Flex />`

```jsx
import { HBox, VBox } from 'react-flex-lite'

const Example = () => (
  <VBox auto>
    <Flex shrink={0}>
      <Box>1</Box>
      <Box>2</Box>
      <Box>3</Box>
    </HBox>
    <HBox shrink={0}>
      <Box>1</Box>
      <Box>2</Box>
      <Box>3</Box>
    </HBox>
  </VBox>
)
```

### HOC

```jsx
import { Layout } from 'react-flex-lite'

@Layout()
const Example = () => <div>Test</div>
```

## Properties

- m - Controls `margin` - number (for grid index, or pixels) or string (ie "100%")
- mb - Controls `margin-bottom` - number (for grid index, or pixels) or string (ie "100%")
- mt - Controls `margin-top` - number (for grid index, or pixels) or string (ie "100%")
- mr - Controls `margin-right` - number (for grid index, or pixels) or string (ie "100%")
- ml - Controls `margin-left` - number (for grid index, or pixels) or string (ie "100%")
- mx - Controls `margin-right` and `margin-left` - number (for grid index, or pixels) or string (ie "100%")
- my - Controls `margin-top` and `margin-bottom` - number (for grid index, or pixels) or string (ie "100%")
- p - Controls `padding` - number (for grid index, or pixels) or string (ie "100%")
- pb - Controls `padding-bottom` - number (for grid index, or pixels) or string (ie "100%")
- pt - Controls `padding-top` - number (for grid index, or pixels) or string (ie "100%")
- pr - Controls `padding-righht` - number (for grid index, or pixels) or string (ie "100%")
- pl - Controls `padding-left` - number (for grid index, or pixels) or string (ie "100%")
- px - Controls `padding-right` and `padding-left` - number (for grid index, or pixels) or string (ie "100%")
- py - Controls `padding-top` and `padding-bottom` - number (for grid index, or pixels) or string (ie "100%")
- h - Controls `height` - number (for pixels) or string (ie "100%")
- w - Controls `width` - number (for pixels) or string (ie "100%")
- flex - Sets `display: flex` - boolean
- inline - Sets `inline-flex` - boolean
- wrap - Sets `flex-wrap` - boolean
- reverse - Sets `row-reverse` - boolean
- column - Sets `flex-direction: column` - boolean
- align - Sets `align-items` - One of 'normal', 'flex-start', 'flex-end', 'center', 'start', 'end', 'self-start', 'self-end', 'baseline', 'stretch', 'initial', 'inherit'
- alignContent - Sets `align-content` - 'start', 'end', 'flex-start', 'flex-end', 'center', 'normal', 'baseline', 'space-between', 'space-around', 'space-evenly', 'stretch', 'initial', 'inherit'
- alignSelf - Sets `align-self` - One of 'auto', 'normal', 'self-start', 'self-end', 'flex-start', 'flex-end', 'center', 'stretch', 'baseline', 'initial', 'inherit'
- justify - Sets `justify-content` - One of 'start', 'end', 'flex-start', 'flex-end', 'center', 'left', 'right', 'normal', 'space-between', 'space-around', 'space-evenly', 'baseline', 'initial', 'inherit'
- order - Sets `order` - number
- shrink - Sets `flex-shrink` - number, or boolean for 0 or 1
- grow - Sets `flex-grow` - number, or boolean for 0 or 1
- basis - Sets `flex-basis` - number
- auto - Sets `flex: 1 1 auto` when true
- hcenter - Sets properties needed to horizontally center contents
- vcenter - Sets properties needed to vertically center contents
- center - Sets properties needed to horizontally and vertically center contents

## Providing your own grid

By default, this library comes with an 8px grid configuration:

```json
{
  "space": [0, 8, 16, 32, 64]
}
```

To provide your own configuration, you can provide it via context:

```js
import { LayoutContext } from 'react-flex-lite'

const config = {
  space: [0, 10, 20, 30, 40]
}

// in the root of your app
<LayoutContext.Provider value={config}>
  <YourApplication />
</LayoutContext.Provider>
```

[downloads-image]: https://img.shields.io/npm/dm/react-flex-lite.svg
[npm-url]: https://npmjs.org/package/react-flex-lite
[npm-image]: https://img.shields.io/npm/v/react-flex-lite.svg
