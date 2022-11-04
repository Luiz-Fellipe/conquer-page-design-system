import { fireEvent, render, screen } from '@testing-library/react'
import { Button } from '.'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

describe('Button Component', () => {
  it('Button children displayed successfully', () => {
    render(<Button variant="primary">My Button</Button>)

    expect(screen.getByText('My Button')).toBeInTheDocument()
  })

  it('Button primary displayed successfully', () => {
    render(<Button variant="primary">My Button</Button>)

    expect(screen.getByText('My Button').className).toMatch(/-variant-primary/)
  })

  it('Button secondary displayed successfully', () => {
    render(<Button variant="secondary">My Button</Button>)

    expect(screen.getByText('My Button').className).toMatch(
      /-variant-secondary/,
    )
  })

  it('Button danger displayed successfully', () => {
    render(<Button variant="danger">My Button</Button>)

    expect(screen.getByText('My Button').className).toMatch(/-variant-danger/)
  })

  it('Button link displayed successfully', () => {
    render(<Button variant="link">My Button</Button>)

    expect(screen.getByText('My Button').className).toMatch(/-variant-link/)
  })

  it('Button minimal displayed successfully', () => {
    render(<Button variant="minimal">My Button</Button>)

    expect(screen.getByText('My Button').className).toMatch(/-variant-minimal/)
  })

  it('Button successfully displayed in small size', () => {
    render(<Button size="small">My Button</Button>)

    expect(screen.getByText('My Button').className).toMatch(/-size-small/)
  })

  it('Button successfully displayed in medium size', () => {
    render(<Button size="medium">My Button</Button>)

    expect(screen.getByText('My Button').className).toMatch(/-size-medium/)
  })

  it('Button successfully displayed in large size', () => {
    render(<Button size="large">My Button</Button>)

    expect(screen.getByText('My Button').className).toMatch(/-size-large/)
  })

  it('Button successfully displayed in full size', () => {
    render(<Button full>My Button</Button>)

    expect(screen.getByText('My Button').className).toMatch(/-full-true/)
  })

  it('checks if the button is disabled', () => {
    render(<Button disabled>My Button</Button>)

    expect(screen.getByText('My Button').closest('button')).toBeDisabled()
  })

  it('checks if the icon has been rendered', () => {
    render(<Button Icon={faTimes}>My Button</Button>)

    const element = screen.getByText('My Button').firstChild

    expect(element).toHaveClass('svg-inline--fa')
  })

  it('check if the icon is rendered on the right', () => {
    render(<Button iconSide="right">My Button</Button>)

    expect(screen.getByText('My Button').className).toMatch(/-iconSide-right/)
  })

  it('checks if the button was rendered with just the icon', () => {
    render(
      <Button iconSide="right" onlyIcon>
        My Button
      </Button>,
    )

    expect(screen.queryByText('My Button')).not.toBeInTheDocument()
  })

  it('Callback function was fired', () => {
    const mockCallBack = jest.fn()

    render(<Button onClick={mockCallBack}>My Button</Button>)

    fireEvent.click(screen.getByText('My Button'))

    expect(mockCallBack.mock.calls.length).toEqual(1)
  })
})
