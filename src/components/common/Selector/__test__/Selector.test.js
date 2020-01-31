import React from 'react'
import ReactDOM from 'react-dom'
import Selector from './../Selector'
import { render, cleanup } from '@testing-library/react'
import renderer from 'react-test-renderer'
import '@testing-library/jest-dom'

const countries=['us', 'gb', 'de']
const name = 'countries'

afterEach(cleanup)

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Selector data={countries}/>, div)
})

it('renders selector with title and options', () => {
  const { getByTestId } = render(<Selector data={countries} name={name}/>)
  expect(getByTestId('selector')).toHaveTextContent('gb')
  expect(getByTestId('title')).toHaveTextContent('countries')
})

it('calling render with the same component on the same container does not remount', () => {
  const { getByTestId, rerender } = render(<Selector data={countries} defaultValue={countries[0]} name={name} />)
  expect(getByTestId('default-value')).toHaveTextContent('us')
  expect(getByTestId('title')).toHaveTextContent('countries')

  // re-render the same component with different props
  rerender(<Selector data={countries} defaultValue={countries[1]} name={name}/>)
  expect(getByTestId('default-value')).toHaveTextContent('gb')
  expect(getByTestId('title')).toHaveTextContent('countries')
})

it("matches snapshot", () => {
  const component = renderer.create(<Selector name={name} data={countries} />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})