import React from 'react';

import Main from '../../layouts/main';
import Section from 'components/organisms/Section';
import ContentBlock from './components/ContentBlock';
import Dual from 'components/organisms/Dual';
import withLayout from 'layouts/main/withLayout';
import { ScreenRoutes, PageViewProps } from './types';
import Link from 'next/link';
import { Button } from '@material-ui/core';
import { useGoToScreen } from './util/useGoToScreen';

const ThatScreen: React.VFC<PageViewProps> = () => {
  const goToScreen = useGoToScreen(ScreenRoutes.this);

  return (
    <>
      <Section>
        <>
          <Button onClick={() => goToScreen.goToScreen()}>this screen</Button>
          <ContentBlock variant="primary" />
        </>
      </Section>
    </>
  );
};

export default withLayout({ Layout: Main })(ThatScreen);
