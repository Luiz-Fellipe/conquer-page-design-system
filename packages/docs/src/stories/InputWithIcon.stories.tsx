import { StoryObj, Meta } from '@storybook/react'

import { InputWithIcon, IInputWithIconProps } from '@conquerpage/react'

import { faSearch } from '@fortawesome/free-solid-svg-icons'
const icons = { faSearch }

export default {
  title: 'Atoms/Input With Icon',
  component: InputWithIcon,
  argTypes: {
    placeholder: { control: { type: 'text' } },
    disabled: { control: { type: 'boolean' } },
    error: { control: { type: 'boolean' } },
    errorMessage: { control: { type: 'text' } },
    full: { control: { type: 'boolean' } },
    label: { control: { type: 'text' } },
    Icon: {
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: 'select',
        labels: {
          faSearch: 'faSearch',
        },
      },
    },
  },
  args: {
    placeholder: 'Placeholder',
    full: false,
    error: false,
    errorMessage: '',
    disabled: false,
    label: '',
    description: '',
    Icon: 'faSearch',
  },
  parameters: {
    backgrounds: { default: 'conquerpage' },
  },
} as Meta

export const Enabled: StoryObj<IInputWithIconProps> = {}

export const Disabled: StoryObj<IInputWithIconProps> = {
  args: {
    disabled: true,
  },
}

export const WithError: StoryObj<IInputWithIconProps> = {
  args: {
    error: true,
    errorMessage: 'Error Message',
  },
}

export const WithLabel: StoryObj<IInputWithIconProps> = {
  args: {
    label: 'Label',
    description: 'Description',
  },
}
