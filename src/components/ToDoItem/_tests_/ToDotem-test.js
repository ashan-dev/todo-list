import React from 'react'
import renderer from 'react-test-renderer'
import ToDoItem from '../ToDoItem.jsx'
test('ToDoItem renders correctly', ()=>{
    const component = renderer.create(<ToDoItem />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})