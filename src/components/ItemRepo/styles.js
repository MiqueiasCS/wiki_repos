import styled from "styled-components";

export const ItemContainer = styled.div`
  width: 80%;

  h3 {
    font-size: 32px;
    color: #fafafa;
  }

  p {
    font-size: 16px;
    color: #fafafa60;
    margin-bottom: 20px;
  }

  .links {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .links a {
    margin-top: 8px;
  }
  .links a.remover {
    color: #f00000;
  }

  hr {
    color: #fafafa60;
    margin: 20px 0;
  }
`;
