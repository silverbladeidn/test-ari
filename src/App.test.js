import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from "react-router-dom";

test('renders learn react link', () => {
  render(
    <BrowserRouter>
    <App />
  </BrowserRouter>
  );
  const textElement = screen.getByText(/Why do we need Test ?/i);
  const textElement2 = screen.getByText(/To guarantee our code quality. And to show the people that we also care about it and wish to give something that already proven, at least by ourself/i);
  expect(textElement).toBeInTheDocument();
  expect(textElement2).toBeInTheDocument();
});
