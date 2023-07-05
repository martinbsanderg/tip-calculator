import { Card } from '@twilio-paste/core';
import { MenuItemsContainer } from '../containers/MenuItemsContainer';
import { NewItemFormContainer } from '../containers/NewItemFormContainer';
import { SummaryContainer } from '../containers/SummaryContainer';
import { TipSelectContainer } from '../containers/TipSelectContainer';

import { Summary } from './Summary';

const Calculator = () => {
  return (
    <Card>
      <NewItemFormContainer />
      <MenuItemsContainer />
      <TipSelectContainer />
      <SummaryContainer />
    </Card>
  );
};

export default Calculator;
