import React from 'react';
import {shallow} from 'enzyme';
import Header from './index';
import {findByTestAttribute} from './../../../utils';

const setup = (props={}) => {
    const component = shallow(<Header {...props}/>);
    return component;
}

// const findByTestAttribute = (component, attribute) => {
//     const wrapper = component.find(`[data-test='${attribute}']`);
//     return wrapper;
// }

describe('Header component',()=>{
    let component;
    beforeEach(() =>{
        component = setup();
    });
    it('should render without errors',()=>{
        // const componet = setup();
        // const wrapper = component.find(`[data-test='headerComponent']`);
         const wrapper = findByTestAttribute(component, 'headerComponent'); 
        expect(wrapper.length).toBe(1);
    });

    it('should render a logo',()=>{
      //  const componet = setup();
      //  const logo = component.find(`[data-test='logoIMG']`);
        const logo = findByTestAttribute(component, 'logoIMG');  
      expect(logo.length).toBe(1);
   });

});