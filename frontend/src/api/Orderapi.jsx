import React, { useEffect, useState } from "react";
import API from "../api/axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) return;
    const fetchOrders = async () => {
      try {
        const res = await API.get("/orders", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setOrders(res.data.orders || []);
      } catch (err) {
        console.log("FETCH ORDERS ERROR 👉", err);
      }
    };
    fetchOrders();
  }, [token]);

  return (
    <>
     
      <section className="bg-[#fffdf5] min-h-screen px-16 py-12">
        <h2 className="text-sm tracking-[0.35em] mb-10">
          MY ORDERS
        </h2>
        {orders.length === 0 && (
          <p className="text-sm text-gray-500">
            No orders found
          </p>
        )}
        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order._id} className="border bg-white p-6 rounded-md">
              <div className="flex justify-between text-sm mb-4">
                <span>Order ID: {order._id}</span>
                <span>Status: {order.status}</span>
              </div>
              {order.items.map((item, i) => (
                <div key={i} className="flex gap-4 border-b py-3 text-sm">
                  <img src={item.image} className="w-16 h-16 object-cover" />
                  <div className="flex-1">
                    <p className="font-medium">{item.name}</p>
                    <p>Qty: {item.qty}</p>
                  </div>
                  <p>₹{item.price}</p>
                </div>
              ))}
              <div className="flex justify-between text-sm mt-4 font-medium">
                <span>Total</span>
                <span>₹{order.totalAmount}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Orders;