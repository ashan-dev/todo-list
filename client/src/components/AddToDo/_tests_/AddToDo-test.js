import React from 'react'
import renderer from 'react-test-renderer'
import AddToDo from '../AddToDo.jsx'
test('AddToDo renders correctly', ()=>{
    const component = renderer.create(<AddToDo />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})