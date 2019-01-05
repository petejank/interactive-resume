import React from 'react'
import {shallow} from 'enzyme'

// TODO:
// Add tests for #componentDidUpdate once Enzyme is update to support `contextType`
// https://github.com/airbnb/enzyme/issues/1913
describe('PageContext', () => {
  it('renders <PageContext />', () => {
    const component = render()

    expect(component).toMatchSnapshot()
  })

  function render() {
    const PageContext = require('.').default

    return shallow(<PageContext />)
  }
})
