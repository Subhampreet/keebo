import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import SearchBox, { SearchBoxProps } from './SearchBox';

export default {
  title: 'Components/SearchBox',
  component: SearchBox,
} as Meta<typeof SearchBox>;

const Template: StoryFn<SearchBoxProps> = (args) => <SearchBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Type to search...',
};