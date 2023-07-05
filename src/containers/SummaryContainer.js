import { connect } from 'react-redux';
import { Summary } from '../components/Summary';

const mapStateToProps = (state) => {
  const items = state.items;
  let subtotal = 10;

  /*for (const item of items) {
    console.log(typeof item.price + '  ' + typeof item.quantity);
    console.log(item.price * item.quantitiy);
  }

  const subsubtotal = items.reduce((acc, item) => acc + 11 * 11);*/

  const tipAmount = subtotal * (state.tipPercentage / 100);
  const total = subtotal + tipAmount;
  return {
    subtotal,
    tipAmount,
    total
  };
};

export const SummaryContainer = connect(mapStateToProps)(Summary);
