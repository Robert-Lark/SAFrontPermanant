import {useMutation} from "@apollo/client";
import gql from "graphql-tag";
import styled from "styled-components";

const REMOVE_FROM_CART_MUTATION = gql`
  mutation REMOVE_FROM_CART_MUTATION($id: ID!) {
    deleteCartItem(id: $id) {
      id
    }
  }
`;
// this function removes the item from the cache - it knows what item to
// delete because we specified it above in our mutation
function update(cache, payload) {
  cache.evict(cache.identify(payload.data.deleteCartItem));
}

export default function RemoveFromCart({id}) {
  const [removeFromCart, {loading}] = useMutation(REMOVE_FROM_CART_MUTATION, {
    variables: {id},
    update,
    // this will run immediatly after the button is clicked and then it will be 
    //replaced with the actual update function when that returns from the api
    // needs to be debugged.
    // optimisticResponse: {
    //     deleteCartItem: {
    //         __typename:'CartItem',
    //         id,
    //     }
    // }
  });
  return (
    <BigButton
      onClick={removeFromCart}
      disabled={loading}
      type="button"
      title="Remove this item from your cart"
    >
      &times;
    </BigButton>
  );
}

const BigButton = styled.button`
  font-size: 3rem;
  background: none;
  border: 0;
  &hover {
    color: var(--red);
    cursor: pointer;
  }
`;
