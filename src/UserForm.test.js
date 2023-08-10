import {render, screen } from '@testing-library/react';
import user from '@testing-library/user-event'
import UserForm from "./UserForm";

test('it show two inputs and a button', () => {
  // render the component
  render(<UserForm />);

  // Manipulate the component or fin an element in it
  const inputs = screen.getAllByRole('textbox');
  const button = screen.getByRole('button');

  //Assertion - make sure the component is doing whati we expect it to do
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();



});