import { render } from '@testing-library/react'
import { Input } from '.'

describe('Input Component', () => {
  it('Input displayed successfully', () => {
    const { getByTestId } = render(<Input placeholder="Hello World" />)

    expect(getByTestId('input-without-icon')).toBeInTheDocument()
  })

  it('Input value and placeholder displayed successfully', () => {
    const { getByTestId } = render(
      <Input placeholder="My placeholder" defaultValue="Hello World" />,
    )

    expect(getByTestId('input-without-icon')).toHaveAttribute(
      'value',
      'Hello World',
    )
    expect(getByTestId('input-without-icon')).toHaveAttribute(
      'placeholder',
      'My placeholder',
    )
  })

  it('Input successfully disabled', () => {
    const { getByTestId } = render(<Input disabled />)

    expect(getByTestId('input-without-icon')).toBeDisabled()
  })

  it('Input taking up all the available space', () => {
    const { getByTestId } = render(<Input full />)

    expect(getByTestId('input-without-icon-container').className).toMatch(
      /-full-true/,
    )
  })

  it('Input with label and description displayed correctly', () => {
    const { getByTestId } = render(
      <Input label="label test" description="description test" />,
    )

    expect(getByTestId('input-without-icon-container')).toHaveTextContent(
      'label test',
    )
    expect(getByTestId('input-without-icon-container')).toHaveTextContent(
      'description test',
    )
  })

  it('Input with error and error message displayed correctly', () => {
    const { getByTestId } = render(<Input error errorMessage="error test" />)

    expect(getByTestId('input-without-icon').className).toMatch(/-error-true/)

    expect(getByTestId('input-without-icon-container')).toHaveTextContent(
      'error test',
    )
  })

  it('Input giving focus with success', () => {
    const { getByTestId } = render(<Input />)

    getByTestId('input-without-icon').focus()

    expect(getByTestId('input-without-icon')).toHaveFocus()
  })
})
