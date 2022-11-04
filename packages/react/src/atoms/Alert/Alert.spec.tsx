import { render, screen } from '@testing-library/react'
import { Alert } from '.'

describe('Alert Component', () => {
  it('Alert displayed with successfully', () => {
    render(<Alert title="title test" />)

    expect(screen.getByText('title test')).toBeInTheDocument()
  })

  it('Alert success with successfully', () => {
    const { getByTestId } = render(
      <Alert variant="success" title="title test" />,
    )

    expect(getByTestId('alert-container').className).toMatch(/-variant-success/)
  })

  it('Alert warning with successfully', () => {
    const { getByTestId } = render(
      <Alert variant="warning" title="title test" />,
    )

    expect(getByTestId('alert-container').className).toMatch(/-variant-warning/)
  })

  it('Alert info with successfully', () => {
    const { getByTestId } = render(<Alert variant="info" title="title test" />)

    expect(getByTestId('alert-container').className).toMatch(/-variant-info/)
  })

  it('Alert error displayed with successfully', () => {
    const { getByTestId } = render(<Alert variant="error" title="title test" />)

    expect(getByTestId('alert-container').className).toMatch(/-variant-error/)
  })

  it('Alert  displayed with successfully', () => {
    const { getByTestId } = render(<Alert variant="error" title="title test" />)

    expect(getByTestId('alert-container').className).toMatch(/-variant-error/)
  })

  it('alert displayed occupying all the space', () => {
    const { getByTestId } = render(<Alert title="title test" full />)
    expect(getByTestId('alert-container').className).toMatch(/-full-true/)
  })

  it('alert displayed with title and description displayed correctly', () => {
    const { getByTestId } = render(
      <Alert title="title test" description="description test" />,
    )

    expect(getByTestId('alert-container')).toHaveTextContent('title test')
    expect(getByTestId('alert-container')).toHaveTextContent('description test')
  })
})
