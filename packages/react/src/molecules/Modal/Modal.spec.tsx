import { Button } from '../../atoms/Button'
import { fireEvent, render, screen } from '@testing-library/react'

import {
  Modal,
  ModalClose,
  ModalContent,
  ModalTrigger,
  ModalWrapper,
} from './index'

describe('Modal Component', () => {
  it('Modal rendered successfully', () => {
    const mockFunction = jest.fn()

    render(
      <Modal onOpenChange={mockFunction} open={true}>
        <ModalTrigger asChild>
          <Button>Open Modal</Button>
        </ModalTrigger>
        <ModalWrapper>
          <ModalContent>
            <span>Your content here</span>
          </ModalContent>
        </ModalWrapper>
      </Modal>,
    )

    expect(screen.getByText('Your content here')).toBeInTheDocument()
  })

  it('Modal rendered successfully when you click the button', () => {
    const mockFunction = jest.fn()

    render(
      <Modal onOpenChange={mockFunction}>
        <ModalTrigger asChild>
          <Button>Open Modal</Button>
        </ModalTrigger>
        <ModalWrapper>
          <ModalContent>
            <span>Your content here</span>
          </ModalContent>
        </ModalWrapper>
      </Modal>,
    )

    expect(screen.queryByText('Your content here')).not.toBeInTheDocument()

    fireEvent.click(screen.getByText('Open Modal'))

    expect(screen.getByText('Your content here')).toBeInTheDocument()
  })

  it("The 'onOpenChange' function is fired correctly", () => {
    const mockFunction = jest.fn()

    render(
      <Modal onOpenChange={mockFunction}>
        <ModalTrigger asChild>
          <Button>Open Modal</Button>
        </ModalTrigger>
        <ModalWrapper>
          <ModalContent>
            <span>Your content here</span>
          </ModalContent>
        </ModalWrapper>
      </Modal>,
    )

    fireEvent.click(screen.getByText('Open Modal'))

    expect(mockFunction.mock.calls.length).toEqual(1)
  })

  it('Modal rendered successfully with overlay', () => {
    const mockFunction = jest.fn()

    render(
      <Modal onOpenChange={mockFunction} open={true} overlay>
        <ModalTrigger asChild>
          <Button>Open Modal</Button>
        </ModalTrigger>
        <ModalWrapper>
          <ModalContent>
            <span>Your content here</span>
          </ModalContent>
        </ModalWrapper>
      </Modal>,
    )

    expect(screen.queryByTestId('modal-overlay')).toBeInTheDocument()
  })

  it('Modal rendered successfully without overlay', () => {
    const mockFunction = jest.fn()

    render(
      <Modal onOpenChange={mockFunction} open={true} overlay={false}>
        <ModalTrigger asChild>
          <Button>Open Modal</Button>
        </ModalTrigger>
        <ModalWrapper>
          <ModalContent>
            <span>Your content here</span>
          </ModalContent>
        </ModalWrapper>
      </Modal>,
    )

    expect(screen.queryByTestId('modal-overlay')).not.toBeInTheDocument()
  })

  it('modal closes correctly when you click to close', () => {
    const mockFunction = jest.fn()

    const { debug } = render(
      <Modal onOpenChange={mockFunction} defaultOpen={true}>
        <ModalTrigger asChild>
          <Button>Open Modal</Button>
        </ModalTrigger>
        <ModalWrapper>
          <ModalContent>
            <span>Your content here</span>
          </ModalContent>
          <ModalClose asChild>
            <Button>Close Modal</Button>
          </ModalClose>
        </ModalWrapper>
      </Modal>,
    )

    debug()

    fireEvent.click(screen.getByText('Close Modal'))

    expect(screen.queryByText('Your content here')).not.toBeInTheDocument()
  })
})
