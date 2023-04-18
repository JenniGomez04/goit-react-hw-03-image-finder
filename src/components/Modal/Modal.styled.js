import styled from "styled-components";

export const DivOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); // Capa oscura
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DivModalStyle = styled.div`
  border-radius: 5px;
  padding: 20px;
  max-width: 80%;
  max-height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 80%;
    max-height: 80%;
    object-fit: contain;
  }
`;