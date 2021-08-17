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

### Components

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

### HOC

```jsx
import { Layout } from 'react-flex-lite'

@Layout()
const Example = () => <div>Test</div>
```

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
;<LayoutContext.Provider value={config}>
  <YourApplication />
</LayoutContext.Provider>
```

[downloads-image]: https://img.shields.io/npm/dm/react-flex-lite.svg
[npm-url]: https://npmjs.org/package/react-flex-lite
[npm-image]: https://img.shields.io/npm/v/react-flex-lite.svg
