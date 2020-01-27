import React from 'react'
import ReactDOM from 'react-dom'
import Button from './../Button'
import {render, cleanup} from '@testing-library/react'
import renderer from 'react-test-renderer'
import '@testing-library/jest-dom'

afterEach(cleanup)
it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<Button />, div)
})

it("renders button correctly", () => {
  const { getByTestId } = render(<Button title={"Technology"} />)
  expect(getByTestId("button")).toHaveTextContent("Technology")
  })

it("matches snapshot", () => {
  const tree = renderer.create(<Button title={"Technology"}/>).toJSON()
  expect(tree).toMatchSnapshot()
})

  
  
  
  
  
