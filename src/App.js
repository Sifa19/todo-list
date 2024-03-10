import { useState } from "react";
import Logo from "./Logo";
import AddList from "./AddList";
import DisplayList from "./DisplayList";
import Status from "./Status";

const initialItems = [
  { id: 1, description: "Passports", completed: false },
  { id: 2, description: "Socks", completed: false },
  { id: 3, description: "Clothes", completed: false },
  { id: 4, description: "Jeans", completed: false },
];

export default function App() {
  const [items, setItems] = useState(initialItems);
  return (
    <div className="conatiner">
      <Logo />
      <AddList setItems={setItems} />
      <DisplayList items={items} setItems={setItems} />
      <Status items={items} />
    </div>
  );
}
