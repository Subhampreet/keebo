# Keebo

A modern and customizable React component library built with Tailwind CSS. This library aims to provide reusable and themeable components that can be easily integrated into any project.

## Components

Currently, the library includes the following components:

- **SearchBox**: A customizable input box for search queries.

## Installation

To install the component library, use npm or yarn:

```bash
npm install keebo


## Usage

### SearchBox

The `SearchBox` component can be used to create a search input field. It accepts the following props:

| Prop          | Type                      | Default      | Description                                   |
|---------------|---------------------------|--------------|-----------------------------------------------|
| `placeholder` | `string`                  | "Search..."  | Placeholder text for the input.              |
| `onSearch`    | `(query: string) => void` | -            | Function called on input change with the current query. |
| `theme`       | `'light' | 'dark'`       | 'light'      | Theme of the input field.                     |
| `className`   | `string`                  | -            | Additional classes for custom styling.        |

### Example

```jsx
import React from 'react';
import { SearchBox } from 'my-component-library';

const App = () => {
  const handleSearch = (query) => {
    console.log(query);
  };

  return (
    <div className="p-4">
      <SearchBox onSearch={handleSearch} theme="dark" />
    </div>
  );
};

export default App;




