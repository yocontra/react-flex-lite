import { Flex, Box, HBox, VBox, LayoutContext } from '../src'
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
    expect(boxEl).toHaveClass('__5qi056-flex')
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
    expect(boxEl).toHaveClass('__5reksj-flex')
    expect(boxEl).toHaveStyle({ marginTop: 10 })
  })
})

describe('<HBox />', () => {
  it('should render div with correct text and class', () => {
    const { queryByText } = render(
      <HBox className="flex" mt={1}>
        flex text
      </HBox>
    )
    const flexEl = queryByText('flex text')
    expect(flexEl).toBeInTheDocument()
    expect(flexEl).toHaveClass('flex')
    expect(flexEl).toHaveStyle({ marginTop: 8 })
  })
})

describe('<VBox />', () => {
  it('should render div with correct text and class', () => {
    const { queryByText } = render(
      <VBox className="flex" mt={1}>
        flex text
      </VBox>
    )
    const flexEl = queryByText('flex text')
    expect(flexEl).toBeInTheDocument()
    expect(flexEl).toHaveClass('flex')
    expect(flexEl).toHaveStyle({ 'flex-direction': 'column' })
    expect(flexEl).toHaveStyle({ marginTop: 8 })
  })
})
