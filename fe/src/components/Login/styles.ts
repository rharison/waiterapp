import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 396);
  flex: 1;
  justify-content: center;
  margin-top: 198px;
`;

export const Content = styled.div`
  min-width: 480px;
  display: flex;
  flex-direction: column;
  padding: 12px;
  gap: 16px;

  header {
    margin-left: 4px;
    font-size: 18px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 16px;

    input {
      padding: 12px 24px;
      border-radius: 48px;
      border: 0;
      border: 1px solid #666;
    }

    button {
      background: #333333;
      border-radius: 48px;
      border: 0;
      color: #fff;
      padding: 12px 24px;
    }
  }
`;
