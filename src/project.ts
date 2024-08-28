import { makeProject } from '@revideo/core';

import example from './scenes/example?scene';

export default makeProject({
  scenes: [example],
  variables: {
    // image: 'https://m.media-amazon.com/images/I/71YTyPdSPML._AC_SY879_.jpg',
    image: 'https://m.media-amazon.com/images/I/81wI8vQtSUL._AC_SX679_.jpg',
    discount: 20,
    store: 'StyleCraft',
  },
});
