import React from 'react';
import {shallow} from 'enzyme';
import Headline from './index';
import {findByTestAttribute} from './../../../utils';

const setup = (props={}) => {
    const component = shallow(<Headline {...props}/>);
    return component;
}

// const findByTestAttribute = (component, attribute) => {
//     const wrapper = component.find(`[data-test='${attribute}']`);
//     return wrapper;
// }

describe('Headline Component',()=>{

    describe('Have props',()=>{
        let wrapper;
        beforeEach(() =>{
            const props ={
                header: 'Test Header',
                desc: 'Test Desc'
            };
            wrapper = setup(props);
    });

    it('should render without errors',()=>{
        // const componet = setup();
        // const wrapper = component.find(`[data-test='headerComponent']`);
         const component = findByTestAttribute(wrapper, 'headlineComponent'); 
        expect(component.length).toBe(1);
    });

    it('should render a H1',()=>{
      //  const componet = setup();
      //  const logo = component.find(`[data-test='logoIMG']`);
        const h1 = findByTestAttribute(wrapper, 'header');  
      expect(h1.length).toBe(1);
   });

   it('should render a desc',()=>{
    //  const componet = setup();
    //  const logo = component.find(`[data-test='logoIMG']`);
      const desc = findByTestAttribute(wrapper, 'desc');  
    expect(desc.length).toBe(1);
 });

});
});