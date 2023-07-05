import { connect } from 'react-redux';
import { NewItemForm } from '../components/NewItemForm';
import { addNewItem } from '../store/items/actions';

const quantity = 1;
const mapDispatchToProps = {
  onSubmit: (name, price) => addNewItem(name, price, quantity) //Dispatch slenges med automatisk
};

export const NewItemFormContainer = connect(
  null,
  mapDispatchToProps
)(NewItemForm);
