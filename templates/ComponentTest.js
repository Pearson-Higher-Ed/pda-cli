import React         from 'react';
import expect        from 'expect';
import { shallow }   from 'enzyme';

import { default as componentName } from 'path';

describe('componentName', () => {

  describe('componentName Test', function() {
    it('should render the componentName as div element', function() {
      this.wrapper = shallow(<componentName >componentName</componentName>);
      expect(this.wrapper.node.type).toEqual('div');
    });

  })
})
