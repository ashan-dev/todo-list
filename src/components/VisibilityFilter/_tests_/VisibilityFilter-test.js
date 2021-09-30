import React from 'react'
import renderer from 'react-test-renderer'
import VisibilityFilter from '../VisibilityFilter.jsx'
test('AddTodo renders correctly', ()=>{
    const component = renderer.create(<VisibilityFilter />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})