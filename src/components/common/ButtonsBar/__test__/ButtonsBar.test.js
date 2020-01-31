import React from 'react'
import ReactDOM from 'react-dom'
import Button from '../../Button/Button'
import ButtonsBar from '../ButtonsBar'
import { shallow, mount, render } from 'enzyme'

const categories=['sports', 'world', 'weather']

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ButtonsBar data={categories}/>, div)
})

it('renders correct number of buttons', ()=>{
  let wrapper = shallow(<ButtonsBar data={categories}></ButtonsBar>)
  expect(wrapper.find(Button)).toHaveLength(categories.length)
})