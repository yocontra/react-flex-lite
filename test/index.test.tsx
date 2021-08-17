import { Flex, Box, LayoutContext } from '../src'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('<Flex />', () => {
  it('should render div with correct text and class', () => {
    const { queryByText } = render(
      <Flex className="flex" mt={1}>
        flex text
      </Flex>
    )
    const flexEl = queryByText('flex text')
    expect(flexEl).toBeInTheDocument()
    expect(flexEl).toHaveClass('flex')
    expect(flexEl).toHaveStyle({ marginTop: 8 })
  })
})

describe('<Box />', () => {
  it('should render div with correct text and class', () => {
    const { queryByText } = render(
      <Box className="box" mt={1}>
        box text
      </Box>
    )
    const boxEl = queryByText('box text')
    expect(boxEl).toBeInTheDocument()
    expect(boxEl).toHaveClass('box')
    expect(boxEl).toHaveStyle({ marginTop: 8 })
  })
  it('should work with custom context', () => {
    const { queryByText } = render(
      <LayoutContext.Provider value={{ space: [0, 10] }}>
        <Box className="box" mt={1}>
          box text
        </Box>
      </LayoutContext.Provider>
    )
    const boxEl = queryByText('box text')
    expect(boxEl).toBeInTheDocument()
    expect(boxEl).toHaveClass('box')
    expect(boxEl).toHaveStyle({ marginTop: 10 })
  })
})
