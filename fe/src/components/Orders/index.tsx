import socketIo from 'socket.io-client';
import { Container } from './styles';
import { OrdersBoard } from '../OrdersBoard';
import { Order } from '../../types/Order';
import { useEffect, useState } from 'react';
import { api } from '../../utils/api';
import { Loading } from '../Loading';

export function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const socket = socketIo('http://localhost:3001', {
      transports: ['websocket'],
    });

    socket.on('orders@new', (order) => {
      setOrders(prevState => prevState.concat(order));
    });
  }, []);

  useEffect(() => {
    setLoading(true);
    api.get('/orders').then(({ data }) => {
      setOrders(data);
    }).finally(() => {
      setLoading(false);
    });
  }, []);

  const waiting = orders.filter((order) => order.status === 'WAITING');
  const preparing = orders.filter((order) => order.status === 'IN_PRODUCTION');
  const done = orders.filter((order) => order.status === 'DONE');

  function handleCancelOrder(orderId: string) {
    setOrders((prevState) => prevState.filter(order => order._id !== orderId));
  }

  function handleOrderStatusChange(orderId: string, status: Order['status']) {
    setOrders((prevState) => prevState.map(order => (
      order._id === orderId
        ? { ...order, status }
        : order
    )));

  }

  if(loading){
    return <Loading />;
  }

  return (
    <Container>
      <OrdersBoard
        icon="🕛"
        title="Fila de espera"
        orders={waiting}
        onCancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleOrderStatusChange}
      />
      <OrdersBoard
        icon="🧑‍🍳"
        title="Em preparação"
        orders={preparing}
        onCancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleOrderStatusChange}
      />
      <OrdersBoard
        icon="✅"
        title="Pronto!"
        orders={done}
        onCancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleOrderStatusChange}
      />
    </Container>
  );
}
