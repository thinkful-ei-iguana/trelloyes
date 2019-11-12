import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';
import store from './STORE';


describe('Lard', () => {
  let cards = store.lists[0].cardIds.map(id => {
    return store.allCards[id];
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List 
      key='1'
      header='header'
      cards={cards}
    />, div)

    ReactDOM.unmountComponentAtNode(div);
  }); 

  it('renders the UI as expected', () => {
    

    const tree = renderer
      .create(<List header='First List' cards={cards} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});