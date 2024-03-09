import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

const Logo = () => {
  return <div className="logo">
    <span>📃</span> TO DO LIST <span>🖊️</span>
  </div>
}

const AddList = () => {
  return <div className="add-list">
    <span>Add items in the list</span>
    <select type="text" name="quantity" id="" >
      <option value="1">1</option>
    </select>
    <input type="text" name="value" id="" />
    <button>ADD</button>
  </div>
}

const DisplayList = () => {
  return <div className="display">
    <ul >
      <li><input type="checkbox" /> item 1</li>
      <li><input type="checkbox" />item 2</li>
      <li><input type="checkbox" />item 3</li>
    </ul>
    <div className="btn">
      <select name="SORT" id="">
        <option value="SORT">SORT</option>
      </select>
      <button>CLEAR LIST</button>
    </div>
  </div>
}

const Status = () => {
  return <div className="status">
    📃 you have 6 items on your list, and  you have already completed 0 (0%)
  </div>
}

export default function App() {
  return <div className="conatiner">
    <Logo />
    <AddList />
    <DisplayList />
    <Status />
  </div>

}
