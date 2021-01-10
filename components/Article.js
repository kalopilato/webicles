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
        <div className={articleEntryStory.className}>{props.article}</div>
      </div>
      {articleEntry.styles}
      {articleEntryStory.styles}
      {articleEntryUserDetail.styles}
      {articleEntryUserDetailTimestamp.styles}
    </>
  );
}
