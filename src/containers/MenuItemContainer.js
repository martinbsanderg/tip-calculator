import { MenuItem } from '../components/MenuItem';
import { connect } from 'react-redux';
import {
  removeItem,
  updatePrice,
  updateQuantity
} from '../store/items/actions';

const maptDispatchToProps = (dispatch, ownProps) => {
  return {
    remove: () => dispatch(removeItem(ownProps.uuid)),
    updatePrice: (price) => dispatch(updatePrice(ownProps.uuid, price)),
    updateQuantity: (quantitiy) =>
      dispatch(updateQuantity(ownProps.uuid, quantitiy))
  };
};

export const MenuItemContainer = connect(null, maptDispatchToProps)(MenuItem);
