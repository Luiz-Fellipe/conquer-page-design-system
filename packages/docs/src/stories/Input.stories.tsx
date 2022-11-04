import { StoryObj, Meta } from '@storybook/react'

import { Input, IInputProps } from '@conquerpage/react'

export default {
  title: 'Atoms/Input',
  component: Input,
  argTypes: {
    placeholder: { control: { type: 'text' } },
    disabled: { control: { type: 'boolean' } },
    error: { control: { type: 'boolean' } },
    errorMessage: { control: { type: 'text' } },
    full: { control: { type: 'boolean' } },
    label: { control: { type: 'text' } },
  },
  args: {
    placeholder: 'Placeholder',
    full: false,
    error: false,
    errorMessage: '',
    disabled: false,
    label: '',
    description: '',
  },
  parameters: {
    backgrounds: { default: 'conquerpage' },
  },
} as Meta<IInputProps>

export const Enabled: StoryObj<IInputProps> = {}

export const Disabled: StoryObj<IInputProps> = {
  args: {
    disabled: true,
  },
}

export const WithError: StoryObj<IInputProps> = {
  args: {
    error: true,
    errorMessage: 'Error Message',
  },
}

export const WithLabel: StoryObj<IInputProps> = {
  args: {
    label: 'Label',
    description: 'Description',
  },
}
