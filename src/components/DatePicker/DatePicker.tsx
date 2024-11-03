import React, { useState } from 'react';
import classNames from 'classnames';

export interface DatePickerProps {
  onSelectDate: (date: Date) => void;
  theme?: 'light' | 'dark'; // New theme prop
  className?: string; // Additional styling
}

const DatePicker: React.FC<DatePickerProps> = ({
  onSelectDate,
  theme = 'light', // Default to light theme
  className = '',
}) => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = new Date(e.target.value);
    setSelectedDate(e.target.value);
    onSelectDate(date);
  };

  // Dynamic class names based on the theme and additional classes
  const inputClassNames = classNames(
    'p-2 rounded-md border transition-colors duration-200',
    {
      'bg-white border-gray-300 text-gray-800': theme === 'light',
      'bg-gray-800 border-gray-600 text-white': theme === 'dark',
    },
    className
  );

  return (
    <input
      type="date"
      value={selectedDate}
      onChange={handleChange}
      className={inputClassNames}
    />
  );
};

export default DatePicker;