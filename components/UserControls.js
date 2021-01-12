import { signIn, signOut, useSession } from "next-auth/client";
import {
  userControlsButton,
  userControlsContainer,
  userControlsName,
} from "../styles/userControls";

export default function UserControls() {
  const [session, loading] = useSession();

  return (
    <div className={userControlsContainer.className}>
      {!session && (
        <>
          <button className={userControlsButton.className} onClick={signIn}>
            Sign in
          </button>
        </>
      )}
      {session && (
        <>
          <span className={userControlsName.className}>
            {session.user.name}
          </span>
          <button className={userControlsButton.className} onClick={signOut}>
            Sign out
          </button>
        </>
      )}
      {userControlsButton.styles}
      {userControlsContainer.styles}
      {userControlsName.styles}
    </div>
  );
}
