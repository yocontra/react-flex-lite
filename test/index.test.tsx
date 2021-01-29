import { Flex, Box } from '../src'
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

describe('<Flex />', () => {
  it('should render div with correct text and class', () => {
    const { queryByTestId } = render(<Flex className="flex">flex text</Flex>)
    const flexEl = queryByTestId('flex')
    expect(flexEl).toBeInTheDocument()
    expect(flexEl).toHaveTextContent('flex text')
    expect(flexEl).toHaveClass('flex')
  })
})

describe('<Box />', () => {
  it('should render div with correct text and class', () => {
    const { queryByTestId } = render(<Box className="box">box text</Box>)
    const boxEl = queryByTestId('box')
    expect(boxEl).toBeInTheDocument()
    expect(boxEl).toHaveTextContent('box text')
    expect(boxEl).toHaveClass('box')
  })
})
