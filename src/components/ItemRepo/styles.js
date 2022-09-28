import styled from "styled-components";

export const ItemContainer = styled.div`
  width: 80%;
  margin-top: 20px;

  h3 {
    font-size: 32px;
    color: #fafafa;
  }

  p {
    font-size: 16px;
    color: #fafafa60;
    margin-bottom: 16px;
  }

  .links {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .links a {
    margin-top: 8px;
    text-decoration: none;
    color: #ffffff;
  }

  .links a:hover {
    color: #8484ff;
  }

  .links p.remover {
    color: #f00000;
  }

  .links p.remover:hover {
    cursor: pointer;
    color: #ffffff;
  }

  hr {
    color: #fafafa60;
    margin: 20px 0;
  }
`;
