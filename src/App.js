const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {

  const length = pizzaData.length;
  return (
    <main className="menu">
      <h2>Our menu</h2>

      {length >0 && <Pizza />}
      
    </main>
  );
}

function Pizza() {

  return (
    <div className="pizzas">
      {pizzaData.map((pizza) => (
        (!pizza.soldOut ? (
          <div key={pizza.name} className="pizza">
          <img src={require(`./${pizza.photoName}`)} alt={pizza.name} />
          <div>
            <h3>{pizza.name}</h3>
            <p>{pizza.ingredients}</p>
            <span>Price: ${pizza.price.toFixed(2)}</span>
          </div>
        </div>
        ): (
          <div key={pizza.name} className="pizza sold-out">
            <img src={require(`./${pizza.photoName}`)} alt={pizza.name} />
            <div>
              <h3>{pizza.name}</h3>
              <p>{pizza.ingredients}</p>
              <p>Sold Out</p>
            </div>
          </div>
        ))
      ))}
    </div>
  );
}

function Footer() {
  const hours = new Date().getHours();

  const openHours = 12;

  const closeHours = 22;

  const isOpen = hours >= openHours && hours <= closeHours;

  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>
            We're open until {closeHours}:00. Come visit us or order online.
          </p>

          <button className="btn">order</button>
        </div>
      ):(
        <p>
          We're happy to welcome you between {openHours}:00 and {closeHours}:00.
        </p>
      )
    }
    </footer>
  );
}

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
