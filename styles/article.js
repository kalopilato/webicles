import css from "styled-jsx/css";

export const articleEntry = css.resolve`
  div {
    width: 100%;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 30px;
  }
`;
export const articleEntryUserDetail = css.resolve`
  div {
    flex-shrink: 0;
    flex-basis: 30%;
    text-align: center;
  }
`;
export const articleEntryUserDetailTimestamp = css.resolve`
  span {
    display: block;
    font-size: 70%;
    font-weight: 200;
    color: gray;
  }
`;
export const articleEntryStory = css.resolve`
  div {
    flex-shrink: 0;
    flex-basis: 60%;
    text-align: left;
    padding-right: 15px;
    white-space: pre-wrap;
  }
`;
