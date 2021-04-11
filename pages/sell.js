// This is the page where people will add titles to their library

import CreateProduct from "../components/CreateProduct";
import PleaseSignIn from "../components/PleaseSignIn";

export default function sell() {
  return (
    <div>
      <PleaseSignIn>
        <CreateProduct />
      </PleaseSignIn>
    </div>
  );
}
