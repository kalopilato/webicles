import { headerTitle } from "../styles/header";
import UserControls from "../components/UserControls";

export default function Header(props) {
  return (
    <header className={headerTitle.className}>
      <h1 className={headerTitle.className}>Webicles</h1>
      <div>
        <UserControls />
      </div>
      {headerTitle.styles}
    </header>
  );
}
