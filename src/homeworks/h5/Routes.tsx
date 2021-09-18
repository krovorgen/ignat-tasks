import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { PreJunior } from '../../pages/PreJunior';
import { Junior } from '../../pages/Junior';
import { JuniorPlus } from '../../pages/JuniorPlus';
import { Error404 } from '../../pages/Error404';

export const PATH: { [value: string]: string } = {
  PRE_JUNIOR: '/pre-junior',
  JUNIOR: '/junior',
  JUNIOR_PLUS: '/junior-plus',
};

export const Routes = () => {
  return (
    <Switch>
      <Route path={'/'} exact render={() => <Redirect to={PATH.PRE_JUNIOR} />} />
      <Route path={PATH.PRE_JUNIOR} render={() => <PreJunior />} />
      <Route path={PATH.JUNIOR} render={() => <Junior />} />
      <Route path={PATH.JUNIOR_PLUS} render={() => <JuniorPlus />} />
      <Route render={() => <Error404 />} />
    </Switch>
  );
};
