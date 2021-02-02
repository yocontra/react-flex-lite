import { Flex, Box } from '../src'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('<Flex />', () => {
  it('should render div with correct text and class', () => {
    const { queryByText } = render(<Flex className="flex">flex text</Flex>)
    const flexEl = queryByText('flex text')
    expect(flexEl).toBeInTheDocument()
    expect(flexEl).toHaveClass('flex')
  })
})

describe('<Box />', () => {
  it('should render div with correct text and class', () => {
    const { queryByText } = render(<Box className="box">box text</Box>)
    const boxEl = queryByText('box text')
    expect(boxEl).toBeInTheDocument()
    expect(boxEl).toHaveClass('box')
  })
})
