import { render } from '@testing-library/react'
import Home from '@/app/page'

describe('Home Page', () => {
  it('renders successfully without errors', () => {
    const { container } = render(<Home />)
    expect(container).toBeInTheDocument()
  })

  it('renders a valid React component', () => {
    const { container } = render(<Home />)
    // Verify that the component renders something
    expect(container.firstChild).not.toBeNull()
  })
})
