import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 10px 12px 10px;
  color: #fff;
  background-color: #4354b0;
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 400px;
  background-color: #fff;
  border-radius: 2px;
  overflow: hidden;
`;

export const SearchButton = styled.button`
  display: inline-block;
  width: 40px;
  border: 0;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;


  &:hover {
    opacity: 1;
  }
`;

export const SearchFormLabel = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;

export const Input = styled.input`
  width: 100%;
  display: inline-block;
  font-size: 15px;
  padding-left: 4px;
  padding-right: 4px;
  border: none;
  outline: none;

  
  &::placeholder {
    font-size: 16px;
  }
`;





/////////////////////////////////////////////////////SEGUNDO/////////////////////////////

/*import styled from "styled-components";

export const SearchBarContainer = styled.header`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  padding: 10px;
  background-color: #f2f2f2;
  border-radius: 50px;
`;

export const Label = styled.label`
  position: relative;
  flex-grow: 1;
  margin-right: 10px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 30px 10px 10px;
  font-size: 18px;
  color: #333;
  background-color: transparent;
  border: none;
  outline: none;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  padding: 0;
  margin: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

/*export const Icon = styled(SearchIcon)`
  width: 20px;
  height: 20px;
  fill: #333;
`;

export const VisuallyHidden = styled.span`
  position: absolute;
  clip: rect(1px, 1px, 1px, 1px);
  width: 1px;
  height: 1px;
  overflow: hidden;
  white-space: nowrap;
`;*/




/////////////////////////////////////////////////////PRIMERO/////////////////////////////
/*export const Form = styled.form`
    display: flex;
    justify-content: center;
    margin: 0 auto;
    padding: 10px 0;
    background-color: #4354b0;
    margin-bottom: 20px;

    input{
        width: 200px;
        height: 20px;
    }

`;*/


