import { StoryObj, Meta } from '@storybook/react'
import { Alert, IAlertProps } from '@conquerpage/react'

export default {
  title: 'Atoms/Alert',
  component: Alert,
  argTypes: {
    variant: {
      options: ['success', 'warning', 'error', 'info'],
      control: { type: 'inline-radio' },
    },
    full: { control: { type: 'boolean' } },
    title: { control: { type: 'text' } },
    description: { control: { type: 'text' } },
  },
  args: {
    variant: 'success',
    full: false,
    title: 'Title Here',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  },
  parameters: {
    backgrounds: { default: 'conquerpage' },
  },
} as Meta<IAlertProps>

export const Success: StoryObj<IAlertProps> = {
  args: { variant: 'success', title: 'Success message.' },
}

export const Info: StoryObj<IAlertProps> = {
  args: { variant: 'info', title: 'Info message.' },
}

export const Error: StoryObj<IAlertProps> = {
  args: { variant: 'error', title: 'Error message.' },
}

export const Warning: StoryObj<IAlertProps> = {
  args: { variant: 'warning', title: 'Warning message.' },
}
