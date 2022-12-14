import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  min-height: 90vh;
  margin: 20px 0 0 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  > img {
    width: 72px;
    height: 72px;
  }

  @media (min-width: 1440px) {
    max-width: 1280px;
    margin: 24px auto;

    img {
      width: 120px;
      height: 120px;
    }
  }
`;
