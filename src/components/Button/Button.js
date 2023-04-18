import React from 'react';
import PropTypes from 'prop-types';
import { ButtonLoreMore } from './Button.styled';

const Button = ({ onClick, disabled, showMoreButton }) => {
  return (
    <>
      {showMoreButton && (
        <ButtonLoreMore onClick={onClick} disabled={disabled}>
          Load more
        </ButtonLoreMore>
      )}
    </>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  showMoreButton: PropTypes.bool.isRequired,
};

export default Button;



/*
import React from 'react';
import {ButtonLoreMore} from './Button.styled';

const Button = ({ onClick, disabled }) => {
  return (
    <ButtonLoreMore onClick={onClick} disabled={disabled}>
      Load more
    </ButtonLoreMore>
  );
};

export default Button;*/


