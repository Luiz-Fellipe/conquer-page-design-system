import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { render } from '@testing-library/react'
import { InputWithIcon } from '.'

describe('Input Component', () => {
  it('Input with icon displayed successfully', () => {
    const { getByTestId } = render(
      <InputWithIcon Icon={faSearch} placeholder="Hello World" />,
    )

    expect(getByTestId('input-with-icon')).toBeInTheDocument()

    const element = getByTestId('input-with-icon-content').firstChild

    expect(element).toHaveClass('svg-inline--fa')
  })

  it('Input value and placeholder displayed successfully', () => {
    const { getByTestId } = render(
      <InputWithIcon
        Icon={faSearch}
        placeholder="My placeholder"
        defaultValue="Hello World"
      />,
    )

    expect(getByTestId('input-with-icon')).toHaveAttribute(
      'value',
      'Hello World',
    )
    expect(getByTestId('input-with-icon')).toHaveAttribute(
      'placeholder',
      'My placeholder',
    )
  })

  it('Input successfully disabled', () => {
    const { getByTestId } = render(<InputWithIcon Icon={faSearch} disabled />)

    expect(getByTestId('input-with-icon')).toBeDisabled()
  })

  it('Input taking up all the available space', () => {
    const { getByTestId } = render(<InputWithIcon Icon={faSearch} full />)

    expect(getByTestId('input-with-icon-container').className).toMatch(
      /-full-true/,
    )
  })

  it('Input with label and description displayed correctly', () => {
    const { getByTestId } = render(
      <InputWithIcon
        Icon={faSearch}
        label="label test"
        description="description test"
      />,
    )

    expect(getByTestId('input-with-icon-container')).toHaveTextContent(
      'label test',
    )
    expect(getByTestId('input-with-icon-container')).toHaveTextContent(
      'description test',
    )
  })

  it('Input with error and error message displayed correctly', () => {
    const { getByTestId } = render(
      <InputWithIcon Icon={faSearch} error errorMessage="error test" />,
    )

    expect(getByTestId('input-with-icon-content').className).toMatch(
      /-error-true/,
    )

    expect(getByTestId('input-with-icon-container')).toHaveTextContent(
      'error test',
    )
  })

  it('Input giving focus with success', () => {
    const { getByTestId } = render(<InputWithIcon Icon={faSearch} />)

    getByTestId('input-with-icon').focus()

    expect(getByTestId('input-with-icon')).toHaveFocus()
  })
})
