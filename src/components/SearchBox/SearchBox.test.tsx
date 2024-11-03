import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchBox, { SearchBoxProps } from './SearchBox';

describe('SearchBox Component', () => {
  const onSearchMock = jest.fn();

  const renderComponent = (props: Partial<SearchBoxProps> = {}) => {
    render(<SearchBox onSearch={onSearchMock} {...props} />);
  };

  it('renders with the default placeholder', () => {
    renderComponent();
    const input = screen.getByPlaceholderText('Search...');
    expect(input).toBeInTheDocument();
  });

  it('renders with a custom placeholder', () => {
    const customPlaceholder = 'Type to search...';
    renderComponent({ placeholder: customPlaceholder });
    const input = screen.getByPlaceholderText(customPlaceholder);
    expect(input).toBeInTheDocument();
  });

  it('calls onSearch when typing in the input', () => {
    renderComponent();
    const input = screen.getByPlaceholderText('Search...');
    
    fireEvent.change(input, { target: { value: 'test' } });
    expect(input).toHaveValue('test');
    expect(onSearchMock).toHaveBeenCalledWith('test');
  });

  it('does not call onSearch initially', () => {
    renderComponent();
    expect(onSearchMock).not.toHaveBeenCalled();
  });
});