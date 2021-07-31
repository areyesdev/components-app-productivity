import Button, { options } from '.'
import {
  getTemplate,
  getListTemplate,
  getOptionsArgTypes,
} from '../../helpers/storybook'

const Template = getTemplate(Button)
const ListTemplate = getListTemplate(Button)

export default {
  title: 'Atoms/Button',
  component: Button,
  args: {
    children: 'You Shall Not Pass!',
  },
  argTypes: {
    type: getOptionsArgTypes(options.types),
    children: { control: 'text' },
    onClick: { defaultValue: null, action: 'clicked' },
  },
}

export const Default = Template.bind({})

export const Types = ListTemplate.bind({})
Types.args = { items: options.types.map((type) => ({ type })) }

export const Inline = Template.bind({})
Inline.args = { isInline: true }
