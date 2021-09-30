import React from 'react'
import renderer from 'react-test-renderer'
import AddTodo from '../AddTodo.jsx'
test('AddTodo renders correctly', ()=>{
    const component = renderer.create(<AddTodo />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})