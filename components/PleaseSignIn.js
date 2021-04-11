import {useUser} from "./User";
import SignIn from "./SignIn";

// this function will hide the ui of inner pages if the user is not signed in. 
export default function PleaseSignIn({children}) {
  const me = useUser();
  if (!me) return <SignIn />;
  return children;
}
