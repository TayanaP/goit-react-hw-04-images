import PropTypes from 'prop-types'
// import * as yup from 'yup';
import { SearchbarContainer, Form, Button, ButtonLabel, Input } from './Searchbar.styled';

// const schema = yup.object().shape({
//     name: yup
//       .string().required()
//   });

  export function Searchbar({ handleFormSubmit }) {
    // const initialValues = { name: '' };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const { target } = event;
      const { name } = target.elements;
      const value = name.value.trim();
      if (value) {
        handleFormSubmit(value);
      }
      target.reset();
    };
  
    return (
      <SearchbarContainer>
        <Form autoComplete="off" onSubmit={handleSubmit}>
          <Button type="submit">
            <ButtonLabel>Search</ButtonLabel>
          </Button>
  
          <Input
            type="text"
            name="name"
            placeholder="Search images and photos"
            required
          />
        </Form>
      </SearchbarContainer>
    );
  }
  
  Searchbar.propTypes = {
    handleFormSubmit: PropTypes.func.isRequired,
  };
