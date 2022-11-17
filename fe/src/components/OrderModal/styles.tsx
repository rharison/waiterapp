import styled from 'styled-components';

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.8);
  left: 0;
  top: 0;
  backdrop-filter: blur(4.5px);
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBody = styled.div`
  background: #fff;
  width: 480px;
  border-radius: 8px;
  padding: 32px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 24px;
    }

    button {
      display: flex;
      border: 0;
      background: transparent;
    }
  }
  .status-container {
    margin-top: 32px;

    small {
      font-size: 14px;
      opacity: 0.8;
    }
  }
`;
