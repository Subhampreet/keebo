import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import DatePicker, { DatePickerProps } from './DatePicker';

const meta: Meta<typeof DatePicker> = {
  title: 'Components/DatePicker',
  component: DatePicker,
};

export default meta;

export const LightTheme: StoryFn<DatePickerProps> = (args) => <DatePicker {...args} />;
LightTheme.args = {
  onSelectDate: (date) => console.log(date),
  theme: 'light',
};

export const DarkTheme: StoryFn<DatePickerProps> = (args) => <DatePicker {...args} />;
DarkTheme.args = {
  onSelectDate: (date) => console.log(date),
  theme: 'dark',
};

export const CustomClass: StoryFn<DatePickerProps> = (args) => <DatePicker {...args} />;
CustomClass.args = {
  onSelectDate: (date) => console.log(date),
  className: 'custom-date-picker', // Example custom class
};
