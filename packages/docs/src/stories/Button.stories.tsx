import { StoryObj, Meta } from '@storybook/react'
import { Button, IButtonProps } from '@conquerpage/react'

import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
const icons = { faCircleInfo }

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    disabled: { control: { type: 'boolean' } },
    onClick: {
      action: 'click',
    },
    variant: {
      options: ['primary', 'secondary', 'minimal', 'danger', 'link'],
      control: { type: 'inline-radio' },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'inline-radio' },
    },
    full: { control: { type: 'boolean' } },
    onlyIcon: { control: { type: 'boolean' } },
    Icon: {
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: 'select',
        labels: {
          faCircleInfo: 'faCircleInfo',
        },
      },
    },
    iconSide: {
      options: ['left', 'right'],
      control: { type: 'inline-radio' },
      defaultValue: 'left',
      description: 'o lado ',
    },
  },
  args: {
    children: 'Label',
    variant: 'primary',
    size: 'small',
    full: false,
    disabled: false,
    onlyIcon: false,
  },
} as Meta<IButtonProps>

export const Primary: StoryObj<IButtonProps> = {
  parameters: {
    controls: { exclude: ['Icon', 'iconSide', 'onlyIcon'] },
  },
}

export const Secondary: StoryObj<IButtonProps> = {
  args: {
    variant: 'secondary',
  },
  parameters: {
    controls: { exclude: ['Icon', 'iconSide', 'onlyIcon'] },
  },
}

export const Minimal: StoryObj<IButtonProps> = {
  args: {
    variant: 'minimal',
  },
  parameters: {
    controls: { exclude: ['Icon', 'iconSide', 'onlyIcon'] },
  },
}

export const Danger: StoryObj<IButtonProps> = {
  args: {
    variant: 'danger',
  },
  parameters: {
    controls: { exclude: ['Icon', 'iconSide', 'onlyIcon'] },
  },
}

export const Link: StoryObj<IButtonProps> = {
  args: {
    variant: 'link',
  },
  parameters: {
    controls: { exclude: ['Icon', 'iconSide', 'onlyIcon'] },
  },
}

export const ButtonWithIconAndLabel: StoryObj<IButtonProps> = {
  args: {
    iconSide: 'left',
    Icon: faCircleInfo,
  },
}

export const ButtonWithOnlyIcon: StoryObj<IButtonProps> = {
  args: {
    iconSide: 'left',
    Icon: faCircleInfo,
    onlyIcon: true,
    children: '',
  },
}

export const Orange: StoryObj<IButtonProps> = {
  args: {
    variant: 'orange',
  },
  parameters: {
    controls: { exclude: ['Icon', 'iconSide', 'onlyIcon'] },
  },
}

export const Barbie: StoryObj<IButtonProps> = {
  args: {
    variant: 'barbie',
  },
  parameters: {
    controls: { exclude: ['Icon', 'iconSide', 'onlyIcon'] },
  },
}
