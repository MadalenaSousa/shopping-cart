import { render, screen } from '@testing-library/react';
import Header from '../Header';
import { BrowserRouter } from 'react-router-dom';
import { Button } from '@mui/material';

const MockHeader = () => {
    return (
    <BrowserRouter>
        <Header />
    </BrowserRouter>)
}

it('renders header title', () => {
  render(<MockHeader />);
  const headerElement = screen.getByText(/O meu carrinho de compras/i);
  expect(headerElement).toBeInTheDocument();
});

it('renders header profile button', () => {
    render(<MockHeader />);
    const profileButtonElement = screen.getAllByRole("button")
    expect(profileButtonElement).toBeTruthy();
  });