import React from "react";
import Pizza from "./Pizza";

const Menu = () => {
  return (
    <div className="menu flex flex-col items-center gap-16 py-12">
      <h2 className="w-4/5 text-center text-3xl font-medium uppercase tracking-wider">
        Our Menu
      </h2>
      <Pizza
        name="Pizza Prosciutto"
        ingredients="Tomato, mozzarella, ham, arugula, and burrata cheese"
        price={18}
        photoName="/prosciutto.jpg"
        soldOut={false}
      />
      <Pizza
        name="Focaccia"
        ingredients="Bread with Italian olive oil and rosemary"
        price={6}
        photoName="/focaccia.jpg"
        soldOut={false}
      />
      <Pizza
        name="Pizza Margherita"
        ingredients="Tomato and mozzarella"
        price={10}
        photoName="/margherita.jpg"
        soldOut={false}
      />
      <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozzarella, spinach, and ricotta cheese"
        price={12}
        photoName="/spinaci.jpg"
        soldOut={false}
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mozzarella, mushrooms, and onion"
        price={12}
        photoName="/funghi.jpg"
        soldOut={true}
      />
      <Pizza
        name="Pizza Salamino"
        ingredients="Tomato, mozzarella, and pepperoni"
        price={15}
        photoName="/salamino.jpg"
        soldOut={false}
      />
    </div>
  );
};

export default Menu;
