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

const Example = () =>
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
```

### HOC

```jsx
import { Layout } from 'react-flex-lite'

@Layout()
const Example = () => <div>Test</div>
```

## API

TODO

[downloads-image]: http://img.shields.io/npm/dm/react-flex-lite.svg
[npm-url]: https://npmjs.org/package/react-flex-lite
[npm-image]: http://img.shields.io/npm/v/react-flex-lite.svg
