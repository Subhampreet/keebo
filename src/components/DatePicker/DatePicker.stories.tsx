import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import DatePicker, { DatePickerProps } from './DatePicker';

export default {
  title: 'Components/DatePicker',
  component: DatePicker,
} as Meta;

const Template: StoryFn<DatePickerProps> = (args) => <DatePicker {...args} />;

export const LightTheme: StoryFn<DatePickerProps> = Template.bind({});
LightTheme.args = {
  onSelectDate: (date) => console.log('Selected date:', date),
  theme: 'light',
};

export const DarkTheme: StoryFn<DatePickerProps> = Template.bind({});
DarkTheme.args = {
  onSelectDate: (date) => console.log('Selected date:', date),
  theme: 'dark',
};

export const CustomClass: StoryFn<DatePickerProps> = Template.bind({});
CustomClass.args = {
  onSelectDate: (date) => console.log('Selected date:', date),
  theme: 'dark',
  className: 'custom-date-picker', // Example custom class for additional styling
};
