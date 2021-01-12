import css from "styled-jsx/css";

export const heroContainer = css.resolve`
  div {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const hero = css.resolve`
  div {
    width: 70%;
    max-width: 700px;
    text-align: center;
    flex-basis: 30%;
  }
`;

export const heroForm = css.resolve`
  form {
    position: relative;
    display: block;
    margin-top: 4rem;
    margin-left: auto;
    margin-right: auto;
    text-align: left;
    width: 100%;
    margin-bottom: 60px;
  }
`;

export const heroFormFieldset = css.resolve`
  fieldset {
    outline: none;
    border: none;
    margin: 0;
    padding: 0;
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
`;
export const heroFormInput = css.resolve`
  input {
    display: block;
    width: 75%;
    padding: 5px;
    border-radius: 5px;
    border: 1.2px solid rgba(50, 63, 203, 0.5);
    transition: border 200ms ease-in-out;
    box-sizing: border-box;
    font-family: sans-serif;
  }

  input:hover,
  input:focus {
    outline: none !important;
    border: 1.2px solid rgba(50, 63, 203);
  }
`;
export const heroFormTwitterInput = css.resolve`
  input {
    display: inline-block;
    width: 45%;
    padding: 5px;
    border-radius: 5px;
    border: 1.2px solid rgba(50, 63, 203, 0.5);
    transition: border 200ms ease-in-out;
  }

  input:hover,
  input:focus {
    outline: none !important;
    border: 1.2px solid rgba(50, 63, 203);
  }
`;
export const heroFormSubmitButton = css.resolve`
  input {
    width: 20%;
    border-radius: 5px;
    padding: 5px;
    float: right;
    background-color: rgba(50, 63, 203);
    color: white;
    font-weight: bold;
    border: 1 solid rgba(50, 63, 203, 0.5);
  }

  input:hover {
    cursor: pointer;
  }

  input:disabled {
    background-color: lightgrey;
    border: 1px solid grey;
  }
`;
export const heroEntries = css.resolve`
  div {
    flex-grow: 0;
    flex-shrink: 10;
    flex-basis: 60%;
    overflow-y: auto;
    overflow-x: hidden;
    position: relative;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 56%;
    max-width: 800px;
    text-align: center;
  }

  div::-webkit-scrollbar {
    width: 2px;
  }

  div::-webkit-scrollbar-thumb {
    background: rgba(50, 63, 203, 0.5);
  }
`;
