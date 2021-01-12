import css from "styled-jsx/css";

export const userControlsContainer = css.resolve`
  div {
    display: flex;
    width: fit-content;
    align-items: center;
  }
`;

export const userControlsName = css.resolve`
  span {
    padding-right: 1rem;
  }
`;

export const userControlsButton = css.resolve`
  button {
    padding: 0.75rem 1rem;
    border: 1px solid;
    font-size: 1rem;
    border-radius: 0.25rem;
    transition: all 0.1s ease-in-out;
    box-shadow: 0 0.15rem 0.3rem rgba(0, 0, 0, 0.25);
    font-weight: 500;
    position: relative;
  }
`;
