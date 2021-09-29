import React from 'react'
import renderer from 'react-test-renderer'
import SideBar from '../SideBar.jsx'
test('SideBar renders correctly', ()=>{
    const component = renderer.create(<SideBar />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})