import Avatar, { options } from '.'

import {
  getTemplate,
  getListTemplate,
  getOptionsArgTypes,
} from '../../helpers/storybook'

const Template = getTemplate(Avatar)
const ListTemplate = getListTemplate(Avatar)

export default {
  title: 'Atoms/Avatar',
  component: Avatar,
  args: {
    __sbfd: 'row',
    src: 'https://picsum.photos/id/1027/200/200',
  },
  argTypes: {
    size: getOptionsArgTypes(options.sizes),
  },
}

export const Default = Template.bind({})

export const Sizes = ListTemplate.bind({})
Sizes.args = {
  items: options.sizes.map((size) => ({ size })),
}
