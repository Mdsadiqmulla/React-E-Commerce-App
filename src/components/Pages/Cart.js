import React from 'react';
import { Dropdown, Table, Button } from 'react-bootstrap';

const cartElements = [
  {
    id: 1,
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    quantity: 2,
  },
  {
    id: 2,
    title: 'Black and White Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    quantity: 3,
  },
  {
    id: 3,
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    quantity: 1,
  },
];

const Cart = () => {
  const handleRemoveItem = (itemId) => {
    // Remove item from the cartElements array based on the itemId
    const updatedCartElements = cartElements.filter((item) => item.id !== itemId);
    // Update the cartElements state or trigger further actions
    console.log(updatedCartElements);
  };

  return (
    <div>
      <h1>Cart</h1>
      <Dropdown style={{ position: 'absolute', top: '10px', right: '10px' }}>
        <Dropdown.Toggle variant="success" id="cart-dropdown">
          Cart
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {cartElements.map((item) => (
            <Dropdown.Item key={item.id}>
              <Table responsive>
                <tbody>
                  <tr>
                    <td>
                      <img src={item.imageUrl} alt={item.title} style={{ width: '50px' }} />
                    </td>
                    <td>{item.title}</td>
                    <td>{item.quantity}</td>
                    <td>${item.price}</td>
                    <td>
                      <Button variant="danger" size="sm" onClick={() => handleRemoveItem(item.id)}>
                        Remove
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Cart;
