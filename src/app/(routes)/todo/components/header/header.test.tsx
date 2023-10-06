import { render, screen } from '@testing-library/react'
import Header from './header'

describe('Header', () => {
  it('should render the "Next Todos" heading', () => {
    render(<Header title="Next Todos" />)
    const header = screen.getByRole('heading', {
      name: 'Next Todos',
    })
    expect(header).toBeInTheDocument()
  })

  it('should render "Dave" as a heading', async () => {
    render(<Header title="Dave" />)
    const header = screen.getByRole('heading', {
      name: 'Dave',
    })
    expect(header).toBeInTheDocument()
  })
})
