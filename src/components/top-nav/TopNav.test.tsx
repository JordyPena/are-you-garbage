import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import TopNav from '../top-nav/TopNav';
test('Banner renders correctly', () => {
  render(<TopNav />);
  const banner = screen.getByTestId("header");
  expect(banner).toBeInTheDocument();
})