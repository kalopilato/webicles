import {
  articleEntry,
  articleEntryUserDetail,
  articleEntryUserDetailTimestamp,
  articleEntryStory,
} from "../styles/article";

export default function Article(props) {
  return (
    <>
      <div className={articleEntry.className}>
        <div className={articleEntryUserDetail.className}>
          <span className={articleEntryUserDetailTimestamp.className}>
            {props.date.toDateString()}
          </span>
        </div>
        <div className={articleEntryStory.className}>
          <a href={props.article} target="_blank">
            {props.article}
          </a>
        </div>
      </div>
      {articleEntry.styles}
      {articleEntryStory.styles}
      {articleEntryUserDetail.styles}
      {articleEntryUserDetailTimestamp.styles}
    </>
  );
}
