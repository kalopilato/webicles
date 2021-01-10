export default function Divider() {
  return (
    <>
      <hr />
      <style jsx>{`
        hr {
          display: block;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 30px;
          width: 80%;
          border-color: rgba(50, 63, 203);
          opacity: 0.5;
        }
      `}</style>
    </>
  );
}
