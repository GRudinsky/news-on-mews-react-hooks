import React from 'react'
import ReactDOM from 'react-dom'
import Selector from './../Selector'
import { render, cleanup, wrapper } from '@testing-library/react'
import renderer from 'react-test-renderer'
import '@testing-library/jest-dom'

const countries=['us', 'gb', 'de']
const name = 'countries'

afterEach(cleanup)
it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<Selector data={countries}/>, div)
})

it("renders selector correctly", () => {
  const { getByTestId } = render(<Selector data={countries} />)
  expect(getByTestId("selector")).toHaveTextContent("gb")
})

it("matches snapshot", () => {
  const tree = renderer.create(<Selector name={name} data={countries} />).toJSON()
  expect(tree).toMatchSnapshot()
})