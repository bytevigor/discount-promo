import { Img, Rect, Txt, makeScene2D } from '@revideo/2d';
import {
  all,
  chain,
  createRef,
  createSignal,
  easeInOutCubic,
  waitFor,
} from '@revideo/core';
import shopifyLogo from '../assets/shopify-logo.svg';

export default makeScene2D(function* (view) {
  const discountValue = 25;
  const storeName = 'Acme Store';

  const colorOverlayRef = createRef<Rect>();
  const imageRef = createRef<Img>();
  // https://www.amazon.com/dp/B0D4591J6K
  view.add(
    <>
      <Img
        ref={imageRef}
        width={'110%'}
        scale={3}
        src={'https://m.media-amazon.com/images/I/81HIsr9OxcL._AC_SY879_.jpg'}
      />
      <Rect
        ref={colorOverlayRef}
        size={['100%', '100%']}
        fill="rgba(0, 0, 0, 0)"
      />
    </>
  );
  yield* imageRef().scale(1, 3, easeInOutCubic);
  yield* waitFor(1);
  yield* colorOverlayRef().fill('rgba(0, 0, 0, 0.25)', 0.5, easeInOutCubic);

  const discountRef = createRef<Rect>();
  const discountSignal = createSignal(0);
  view.add(
    <Rect
      ref={discountRef}
      rotation={-15}
      scale={10}
      opacity={0}
      fill={'rgba(255, 223, 0, 1)'}
      size={[200, 85]}
      position={[150, -400]}
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
  yield* all(
    discountRef().scale(2.6, 0.5, easeInOutCubic),
    discountRef().opacity(1, 0.5, easeInOutCubic),
    discountSignal(discountValue, 2)
  );

  const storeNameRef = createRef<Txt>();
  const logoRef = createRef<Img>();
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
        fontSize={100}
        fill={'rgba(255, 223, 01, 1)'}
        fontWeight={600}
      />
    </>
  );
  yield* chain(
    logoRef().position([0, 400], 1, easeInOutCubic),
    storeNameRef().position([0, 650], 1, easeInOutCubic)
  );

  yield* waitFor(2);
});
