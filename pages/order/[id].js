// this will catch the specific route of the order [id] is a
// placeholder for the order id

import {useQuery} from "@apollo/client";
import gql from "graphql-tag";
import next from "next";
import ErrorMessage from "../../components/ErrorMessage";
import OrderStyles from "../../components/styles/OrderStyles";
import Head from "next/head";
import formatMoney from "../../lib/formatMoney";
const SINGLE_ORDER_QUERY = gql`
  query SINGLE_ORDER_QUERY($id: ID!) {
    order: Order(where: {id: $id}) {
      id
      charge
      total
      user {
        id
      }
      items {
        id
        name
        description
        price
        quantity
        photo {
          image {
            publicUrlTransformed
          }
        }
      }
    }
  }
`;

export default function singleOrderPage({query}) {
  const {data, error, loading} = useQuery(SINGLE_ORDER_QUERY, {
    variables: {id: query.id},
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <ErrorMessage error={error} />;
  const {order} = data;
  return (
    <OrderStyles>
      <Head>
        <title>Sonic Architecture</title>
      </Head>
      <p>
        <span>Order Id:</span>
        <span>{order.id}</span>
      </p>
      <p>
        <span>Order Total:</span>
        <span>{formatMoney(order.total)}</span>
      </p>
      <p>
        <span>Item Count:</span>
        <span>{order.items.length}</span>
      </p>
      <div className="items">
        {order.items.map((item) => (
          <div className="order-item" key={item.id}>
            <img src={item.photo.image.publicUrlTransformed} alt={item.title} />
          <div className="item-details">
              <h2>{item.name}</h2>
              <p>Qty: {item.quantity}</p>
              <p>Each: {formatMoney(item.price)}</p>
              <p>Sub Total: {formatMoney(item.price * item.quantity)}</p>
              <p>{item.description}</p>
          </div>
          </div>
        ))}
      </div>
    </OrderStyles>
  );
}