import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import App from './App'

describe('App Component', () => {
  let wrapper: ShallowWrapper
  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('Should render without errors', () => {
    expect(wrapper.length).toBe(1)
  })
})
