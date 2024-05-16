import { useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Home() {
  const [myOrders, setMyOrders] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (order) => {
    console.log(order);
    setSelectedOrder(order);
    setShow(true);
  };
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products/order/totalorders")
      .then((response) => {
        console.log(response.data);
        setMyOrders(response.data);
      });
  }, []);
  return (
    <>
      <div className="container">
        <h4 className="text-center my-3">My Orders</h4>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Created At</th>
              <th>Total Products</th>
              <th>Total Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myOrders.map((order, index) => {
              return (
                <tr onClick={() => handleShow(order)}>
                  <td>{index + 1}</td>
                  <td>
                    {dayjs(order.createdAt).format("YYYY-MMM-DD HH:mm:ss")}
                  </td>
                  <td>{order.products.length}</td>
                  <td>${order.totalCost.toFixed(2)}</td>
                  <td>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => handleShow(order)}
                    >
                      View
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-6">
              <strong>Created At</strong> :{" "}
              <span className="text-muted">
                {dayjs(selectedOrder?.createdAt).format("YYYY-MMM-DD")}
              </span>
            </div>
            <div className="col-md-6">
              <strong>Total Cost</strong> :{" "}
              <span className="text-muted">
                ${selectedOrder?.totalCost.toFixed(2)}
              </span>
            </div>
          </div>
          <table className="table table-bordered my-4">
            <thead>
              <tr>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {selectedOrder?.products.map((product) => {
                return (
                  <tr>
                    <td>{product.product.name}</td>
                    <td>{product.quantity}</td>
                    <td>{product.product.price} <strong className="text-primary">x</strong> {product.quantity} = ${(product.product.price*product.quantity).toFixed(2)}</td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={2}>Total</td>
                <td>${selectedOrder?.totalCost.toFixed(2)}</td>
              </tr>
            </tfoot>
          </table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Home;
