import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'Redux/filter/slice';
import s from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const inputHandler = event => {
    const { value } = event.currentTarget;
    dispatch(setFilter(value));
  };

  const filterReset = () => {
    dispatch(setFilter(''));
  };

  return (
    <div className={s.form}>
      <FloatingLabel
        controlId="floatingInput"
        label="Find contacts by name"
        className="mb-3"
      >
        <Form.Control
          name="filter"
          value={filter}
          onChange={inputHandler}
          type="name"
          placeholder="Name"
        />
      </FloatingLabel>
      <Button variant="secondary" type="button" onClick={filterReset}>
        Clear
      </Button>
    </div>
  );
};

export default Filter;
