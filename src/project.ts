import { makeProject } from '@revideo/core';

import example from './scenes/example?scene';

export default makeProject({
  scenes: [example],
  // variables: {
  //   image: 'https://m.media-amazon.com/images/I/81wI8vQtSUL._AC_SX679_.jpg',
  //   discount: 20,
  //   store: 'StyleCraft',
  // },
});
