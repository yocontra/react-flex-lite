import React from 'react'
import { Flex } from '.'
import { storiesOf } from '@storybook/react'

storiesOf('Flex', module)
  .add('default', () => <>
    <Flex
      auto
      align="center"
      className="default-flex">
      {'Text here'}
    </Flex>
  </>)
