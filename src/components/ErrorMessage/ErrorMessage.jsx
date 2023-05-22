import {ErrorText} from 'components/ErrorMessage/ErrorMessage.styled'

export const ErrorMessage = ({ error }) => {
    return (
      <>
        <ErrorText>
          Something went wrong. {error}...Please try again
        </ErrorText>
      </>
    );
  };


