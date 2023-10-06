import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('Home', () => {
  it('should have Docs text', () => {
    render(<Home />) // ARRANGE

    const myElem = screen.getByText('Docs') // ACT

    expect(myElem).toBeInTheDocument() // ASSERT
  })

  it('should contain the text "information"', () => {
    render(<Home />)

    const myElem = screen.getByText(/information/i)

    expect(myElem).toBeInTheDocument()
  })

  it('should have a heading', () => {
    render(<Home />)

    const myElem = screen.getByRole('heading', {
      name: 'Learn ->',
    })

    expect(myElem).toBeInTheDocument()
  })
})
