import { render, screen } from '@testing-library/react';
import Login from '../Login';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { initialState as initialUserState } from '../../../redux/reducers/userReducer';
import { Provider } from 'react-redux';

function createMockStore(modifyState) {
    const initialState = {
        user: initialUserState
    }

    const mockStore = configureStore([]);
    const updatedState = modifyState ? modifyState(initialState) : initialState;
    return mockStore(updatedState)
}

const MockLogin = () => {
    return (
        <body id='body'>
            <Provider store={createMockStore()}>
                <BrowserRouter>
                    <Login />
                </BrowserRouter>
            </Provider>
        </body>
        )
}


it('renders login title', () => {
  render(<MockLogin />);
  const titleElement = screen.getByText(/Bem vindo ao seu carrinho de compras/i);
  expect(titleElement).toBeInTheDocument();
});

it('renders login form', () => {
    render(<MockLogin />);
    const formElement = screen.getByRole("form");
    expect(formElement).toBeInTheDocument();
  });