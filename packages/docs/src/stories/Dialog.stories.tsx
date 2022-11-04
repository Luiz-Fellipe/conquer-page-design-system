import { Story, Meta } from '@storybook/react'

import { useArgs } from '@storybook/addons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import {
  Button,
  DialogComponent,
  DialogWrapper,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  IDialogProps,
  DialogTitle,
  DialogCloseButton,
  DialogDescription,
  DialogFooter,
} from '@conquerpage/react'

export default {
  title: 'Molecules/Overlay/Modal/Dialog',
  component: DialogComponent,
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

const Template: Story<IDialogProps> = (args) => {
  const [, updateArgs] = useArgs()

  return (
    <DialogComponent
      {...args}
      onOpenChange={(open: boolean) => updateArgs({ open })}
    >
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
          <DialogDescription>
            Used for multiline pieces of content. Lorem ipsum dolor sit amet, ex
            lucilius hendrerit vim, tempor scaevola iudicabit ei ius, te eum
            illud impetus antiopam. Eu wisi commune volutpat pro, usu at alii
            magna aperiam.
          </DialogDescription>

          <DialogFooter>
            <DialogCloseButton asChild>
              <Button variant="secondary">Secondary</Button>
            </DialogCloseButton>
            <Button variant="primary">Primary</Button>
          </DialogFooter>
        </DialogContent>
      </DialogWrapper>
    </DialogComponent>
  )
}

export const dialog = Template.bind({})
