import { Img, Rect, Txt, makeScene2D } from '@revideo/2d';
import {
  all,
  chain,
  createRef,
  createSignal,
  useScene,
  waitFor,
} from '@revideo/core';
import shopifyLogo from '../assets/shopify-logo.svg';

export default makeScene2D(function* (view) {
  // Configurable parameters
  const image = useScene().variables.get(
    'image',
    'https://m.media-amazon.com/images/I/81HIsr9OxcL._AC_SY879_.jpg'
  );
  const discountValue = useScene().variables.get('discount', 25)();
  const storeName = useScene().variables.get('store', 'TrendTide')();

  // First phase code
  // Define reference variables
  const colorOverlayRef = createRef<Rect>();
  const imageRef = createRef<Img>();
  // Add image and color overlay
  view.add(
    <>
      <Img ref={imageRef} width={'100%'} scale={3} src={image} />
      <Rect
        ref={colorOverlayRef}
        size={['100%', '100%']}
        fill="rgba(0, 0, 0, 0)"
      />
    </>
  );
  // Animation sequence
  yield* imageRef().scale(1, 3);
  yield* waitFor(1);
  yield* colorOverlayRef().fill('rgba(0, 0, 0, 0.25)', 0.5);

  // Second phase code
  // Define reference variable and signal
  const discountRef = createRef<Rect>();
  const discountSignal = createSignal(0);
  // Add discount elements
  view.add(
    <Rect
      ref={discountRef}
      rotation={-15}
      scale={10}
      opacity={0}
      fill={'rgba(255, 223, 0, 1)'}
      size={[200, 85]}
      position={[150, -300]}
    >
      <Txt
        text={() => `-${discountSignal().toFixed()}%`}
        paddingTop={10}
        letterSpacing={-2}
        fill={'rgba(0, 0, 0, 1)'}
        fontSize={70}
        fontWeight={700}
      />
    </Rect>
  );
  // Animation sequence
  yield* all(
    discountRef().scale(2.6, 0.5),
    discountRef().opacity(1, 0.5),
    discountSignal(discountValue, 2)
  );

  // Third phase code
  // Define reference variables
  const storeNameRef = createRef<Txt>();
  const logoRef = createRef<Img>();
  // Add store name and logo
  view.add(
    <>
      <Img
        src={shopifyLogo}
        width={'20%'}
        position={[0, 1000]}
        ref={logoRef}
        shadowColor={'#000000'}
        shadowBlur={2}
        shadowOffsetX={2}
        shadowOffsetY={2}
      />
      <Txt
        ref={storeNameRef}
        position={[0, 1000]}
        text={storeName}
        fontSize={80}
        fill={'rgba(255, 223, 01, 1)'}
        fontWeight={600}
      />
    </>
  );
  // Animation sequence
  yield* chain(
    logoRef().position([0, 150], 1),
    storeNameRef().position([0, 300], 1)
  );
  yield* waitFor(2);
});
