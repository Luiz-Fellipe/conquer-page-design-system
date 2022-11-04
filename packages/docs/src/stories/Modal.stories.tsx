import { Story, Meta } from '@storybook/react'
import { useArgs } from '@storybook/addons'
import {
  Modal as ModalComponent,
  ModalProps,
  ModalContent,
  ModalTrigger,
  ModalWrapper,
  Button,
} from '@conquerpage/react'

export default {
  title: 'Molecules/Overlay/Modal/Modal Base',
  component: ModalComponent,
  argTypes: {
    open: { control: { type: 'boolean' } },
    overlay: { control: { type: 'boolean' } },
    onOpenChange: { control: false },
    defaultOpen: { control: false },
  },
  args: {
    open: false,
    overlay: true,
  },
} as Meta

const Template: Story<ModalProps> = (args) => {
  const [, updateArgs] = useArgs()
  return (
    <ModalComponent {...args} onOpenChange={(open) => updateArgs({ open })}>
      <ModalTrigger asChild>
        <Button>Open Modal</Button>
      </ModalTrigger>
      <ModalWrapper>
        <ModalContent>
          <span>Your content here</span>
        </ModalContent>
      </ModalWrapper>
    </ModalComponent>
  )
}

export const modalBase = Template.bind({})
