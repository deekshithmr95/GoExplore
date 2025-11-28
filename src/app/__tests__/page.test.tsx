import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('Home Page', () => {
  it('renders welcome heading', () => {
    render(<Home />)
    const heading = screen.getByText(/Welcome to GoExplore/i)
    expect(heading).toBeInTheDocument()
  })

  it('has explore button', () => {
    render(<Home />)
    const button = screen.getByRole('link', { name: /Start Exploring/i })
    expect(button).toBeInTheDocument()
  })
})
