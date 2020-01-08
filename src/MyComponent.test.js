import React from 'react'
import renderer from 'react-test-renderer'
import MyComponent from './MyComponent'

//following blog at this site
// https://www.toptal.com/react/tdd-react-unit-testing-enzyme-jest
// This is the first step in testing component 
describe('MyComponent', () => {
  test('should render initial layout', () => {
    const wrapper = renderer.create(<MyComponent />)
    let tree = wrapper.toJSON()
    expect(tree).toMatchSnapshot()
  });

  test('should create an entry in component state', () => {
    const component = renderer.create(<MyComponent />)
    const form = component.root.findByType("input")
    form.props.onChange({target: {
      name: 'myName',
      value: 'myValue'
   }});
    expect(component.root.instance.state.input).toBeDefined();
  })
  
  test('should create an entry in component state with the event value', () => {
    const component = renderer.create(<MyComponent />).root
    const input = component.findByType('input')
    input.props.onChange({
      target: {
        name: 'myName',
        value: 'myValue'
      }
    })
    expect(component.instance.state.input).toEqual('myValue')
  });
  
});
