import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import store from './STORE';
import Card from './Card';


describe('Card', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card 
      key={'a'}
      title={'First card'}
      content={'lorem ipsum'}
    />, div)

    ReactDOM.unmountComponentAtNode(div);
  }); 

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<Card title='First Card' content='Lorem ipsum' />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});