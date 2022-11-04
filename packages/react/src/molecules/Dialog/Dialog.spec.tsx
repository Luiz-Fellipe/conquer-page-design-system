import { Button } from '../../'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { fireEvent, render, screen } from '@testing-library/react'

import {
  DialogComponent,
  DialogWrapper,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
  DialogCloseButton,
  DialogContent,
  DialogDescription,
  DialogFooter,
} from '.'

describe('Dialog Component', () => {
  it('Dialog rendered successfully', () => {
    const mockFunction = jest.fn()

    render(
      <DialogComponent onOpenChange={mockFunction} defaultOpen>
        <DialogTrigger asChild>
          <Button>Open Dialog</Button>
        </DialogTrigger>

        <DialogWrapper>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Dialog Title</DialogTitle>
              <DialogCloseButton asChild>
                <Button Icon={faTimes} variant="minimal" />
              </DialogCloseButton>
            </DialogHeader>
            <DialogDescription>description here</DialogDescription>

            <DialogFooter>
              <DialogCloseButton asChild>
                <Button variant="secondary">Secondary</Button>
              </DialogCloseButton>
              <Button variant="primary">Primary</Button>
            </DialogFooter>
          </DialogContent>
        </DialogWrapper>
      </DialogComponent>,
    )

    expect(screen.getByText('description here')).toBeInTheDocument()
  })

  it('Dialog title and description rendered successfully', () => {
    const mockFunction = jest.fn()

    render(
      <DialogComponent onOpenChange={mockFunction} defaultOpen>
        <DialogTrigger asChild>
          <Button>Open Dialog</Button>
        </DialogTrigger>

        <DialogWrapper>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Dialog Title</DialogTitle>
              <DialogCloseButton asChild>
                <Button Icon={faTimes} variant="minimal" />
              </DialogCloseButton>
            </DialogHeader>
            <DialogDescription>description here</DialogDescription>

            <DialogFooter>
              <DialogCloseButton asChild>
                <Button variant="secondary">Secondary</Button>
              </DialogCloseButton>
              <Button variant="primary">Primary</Button>
            </DialogFooter>
          </DialogContent>
        </DialogWrapper>
      </DialogComponent>,
    )

    expect(screen.getByText('Dialog Title')).toBeInTheDocument()
    expect(screen.getByText('description here')).toBeInTheDocument()
  })

  it('Dialog rendered successfully when you click the button', () => {
    const mockFunction = jest.fn()

    render(
      <DialogComponent onOpenChange={mockFunction}>
        <DialogTrigger asChild>
          <Button>Open Dialog</Button>
        </DialogTrigger>

        <DialogWrapper>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Dialog Title</DialogTitle>
              <DialogCloseButton asChild>
                <Button Icon={faTimes} variant="minimal" />
              </DialogCloseButton>
            </DialogHeader>
            <DialogDescription>description here</DialogDescription>

            <DialogFooter>
              <DialogCloseButton asChild>
                <Button variant="secondary">Secondary</Button>
              </DialogCloseButton>
              <Button variant="primary">Primary</Button>
            </DialogFooter>
          </DialogContent>
        </DialogWrapper>
      </DialogComponent>,
    )

    expect(screen.queryByText('description here')).not.toBeInTheDocument()

    fireEvent.click(screen.getByText('Open Dialog'))

    expect(screen.getByText('description here')).toBeInTheDocument()
  })

  it("The 'onOpenChange' function is fired correctly", () => {
    const mockFunction = jest.fn()

    render(
      <DialogComponent onOpenChange={mockFunction} defaultOpen>
        <DialogTrigger asChild>
          <Button>Open Dialog</Button>
        </DialogTrigger>

        <DialogWrapper>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Dialog Title</DialogTitle>
              <DialogCloseButton asChild>
                <Button Icon={faTimes} variant="minimal" />
              </DialogCloseButton>
            </DialogHeader>
            <DialogDescription>description here</DialogDescription>

            <DialogFooter>
              <DialogCloseButton asChild>
                <Button variant="secondary">Secondary</Button>
              </DialogCloseButton>
              <Button variant="primary">Primary</Button>
            </DialogFooter>
          </DialogContent>
        </DialogWrapper>
      </DialogComponent>,
    )

    fireEvent.click(screen.getByText('Open Dialog'))

    expect(mockFunction.mock.calls.length).toEqual(1)
  })

  it('Dialog rendered successfully with overlay', () => {
    const mockFunction = jest.fn()

    render(
      <DialogComponent onOpenChange={mockFunction} defaultOpen overlay>
        <DialogTrigger asChild>
          <Button>Open Dialog</Button>
        </DialogTrigger>

        <DialogWrapper>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Dialog Title</DialogTitle>
              <DialogCloseButton asChild>
                <Button Icon={faTimes} variant="minimal" />
              </DialogCloseButton>
            </DialogHeader>
            <DialogDescription>description here</DialogDescription>

            <DialogFooter>
              <DialogCloseButton asChild>
                <Button variant="secondary">Secondary</Button>
              </DialogCloseButton>
              <Button variant="primary">Primary</Button>
            </DialogFooter>
          </DialogContent>
        </DialogWrapper>
      </DialogComponent>,
    )

    expect(screen.queryByTestId('modal-overlay')).toBeInTheDocument()
  })

  it('Dialog rendered successfully without overlay', () => {
    const mockFunction = jest.fn()

    render(
      <DialogComponent onOpenChange={mockFunction} defaultOpen overlay={false}>
        <DialogTrigger asChild>
          <Button>Open Dialog</Button>
        </DialogTrigger>

        <DialogWrapper>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Dialog Title</DialogTitle>
              <DialogCloseButton asChild>
                <Button Icon={faTimes} variant="minimal" />
              </DialogCloseButton>
            </DialogHeader>
            <DialogDescription>description here</DialogDescription>

            <DialogFooter>
              <DialogCloseButton asChild>
                <Button variant="secondary">Secondary</Button>
              </DialogCloseButton>
              <Button variant="primary">Primary</Button>
            </DialogFooter>
          </DialogContent>
        </DialogWrapper>
      </DialogComponent>,
    )

    expect(screen.queryByTestId('modal-overlay')).not.toBeInTheDocument()
  })

  it('Dialog closes correctly when you click to close', () => {
    const mockFunction = jest.fn()

    render(
      <DialogComponent onOpenChange={mockFunction} defaultOpen>
        <DialogTrigger asChild>
          <Button>Open Dialog</Button>
        </DialogTrigger>

        <DialogWrapper>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Dialog Title</DialogTitle>
              <DialogCloseButton asChild>
                <Button Icon={faTimes} variant="minimal" />
              </DialogCloseButton>
            </DialogHeader>
            <DialogDescription>description here</DialogDescription>

            <DialogFooter>
              <DialogCloseButton asChild>
                <Button variant="secondary">Secondary</Button>
              </DialogCloseButton>
              <Button variant="primary">Primary</Button>
            </DialogFooter>
          </DialogContent>
        </DialogWrapper>
      </DialogComponent>,
    )

    fireEvent.click(screen.getByText('Secondary'))

    expect(screen.queryByText('Your content here')).not.toBeInTheDocument()
  })
})
