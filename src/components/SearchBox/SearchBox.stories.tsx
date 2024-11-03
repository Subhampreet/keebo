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
  onSearch: (query) => console.log(query),
};

export const LightTheme = Template.bind({});
LightTheme.args = {
  placeholder: 'Light theme search...',
  theme: 'light',
  onSearch: (query) => console.log(query),
};

export const DarkTheme = Template.bind({});
DarkTheme.args = {
  placeholder: 'Dark theme search...',
  theme: 'dark',
  onSearch: (query) => console.log(query),
};