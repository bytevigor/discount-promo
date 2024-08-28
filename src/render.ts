import { renderVideo } from '@revideo/renderer';

async function render() {
  console.log('Rendering video...');

  // This is the main function that renders the video
  const file = await renderVideo({
    projectFile: './src/project.ts',
    settings: { logProgress: true },
    variables: {
      image: 'https://m.media-amazon.com/images/I/61A4gjY43BL._AC_SY879_.jpg',
      discount: 30,
      store: 'Echo Shop',
    },
  });

  console.log(`Rendered video to ${file}`);
}

render();
