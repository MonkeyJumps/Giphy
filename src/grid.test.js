import React from 'react';
import Grid from './Grid';
import { mount } from 'enzyme';
import { configure } from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<Grid />', () => {
    it('calls componentDidMount', () => {
      sinon.spy(Grid.prototype, 'componentDidMount');
      
      const wrapper = mount(<Grid />);
      expect(Grid.prototype.componentDidMount.calledOnce).toEqual(true);
    });

    it('calls componentWillMount', () => {
        sinon.spy(Grid.prototype, 'componentWillMount');
        
        const wrapper = mount(<Grid />);
        expect(Grid.prototype.componentWillMount.calledOnce).toEqual(true);
      });

});