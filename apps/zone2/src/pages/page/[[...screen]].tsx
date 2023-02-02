import { useRouter } from 'next/router';

import thatScreen from '../../views/PageView/that-screen';
import thisScreen from '../../views/PageView/this-screen';

export enum ScreenRoutes {
  this = 'this',
  that = 'that',
  invalid = 'invalid',
}

export const routeToModuleMap: Record<string, React.VFC<any>> = {
  [ScreenRoutes.this]: thisScreen,
  [ScreenRoutes.that]: thatScreen,
  [ScreenRoutes.invalid]: thatScreen,
};

const Screen: React.VFC<any> = (props) => {
  const router = useRouter();
  const { screen } = router.query;
  const route = screen?.[0];

  const routeName =
    typeof route === 'string' &&
    Object.values(ScreenRoutes).includes(route as ScreenRoutes)
      ? route
      : ScreenRoutes.invalid;

  const Module = routeToModuleMap[routeName];

  return <Module screen={props.screen} metadata={props.meta} />;
};

export async function getServerSideProps() {
  const getData = () => Promise.resolve(1);

  const _data = await getData();

  return { props: { _data } };
}

export default Screen;
