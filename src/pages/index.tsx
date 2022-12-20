import Meta from 'src/layouts/Meta';
import type { NextPage } from 'next';
import DefaultTemplate from 'src/templates/DefaultTemplate';

const Home: NextPage = () => {
  return <DefaultTemplate meta={<Meta title="" description="" />} >
    <></>
  </DefaultTemplate>;
};

export default Home;
