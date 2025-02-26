import React from "react";
import { Link } from "react-router";

const services = [
  { id: 1, title: "Send Money", icon: "💸", path: "/user/send-money" },
  { id: 2, title: "Cash Out", icon: "🏧", path: "/user/cash-out" },
  { id: 3, title: "Transaction", icon: "📜", path: "/user/transactions" },
];

const NavigationCards = () => {
  return (
    <div className="flex justify-center gap-6 mt-6 flex-wrap mx-auto">
      {services.map((service) => (
        <Link
        to={service.path}
          key={service.id}
          className="w-40 h-52 bg-white shadow-lg rounded-xl flex flex-col items-center justify-center border transition-transform hover:scale-105"
        >
          <div className="text-6xl text-pink-500">{service.icon}</div>
          <p className="mt-4 text-lg font-semibold text-gray-700">{service.title}</p>
        </Link>
      ))}
    </div>
  );
};

export default NavigationCards;
