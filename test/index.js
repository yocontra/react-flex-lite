import React from 'react'
import { Flex } from '../src'
import should from 'should'
import render from 'riteway/render-component'

describe('Flex', () => {
  it('should render empty div', () => {
    const output = render(<Flex className="flex">flex text</Flex>)
    should(output('div.flex').html().trim()).equal('flex text')
  })
})
