import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Todo from '../Todos/Todo'

test('renders content', () => {
  const todo = {
    text: 'Complete Part-12 full stack open',
    done: false
  }

  render(<Todo text={todo.text} done={todo.done} />)

  const element = screen.getByText('Complete Part-12 full stack open')
  expect(element).toBeDefined()
})