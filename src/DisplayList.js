import { useState } from "react";
import Item from "./Item";
const DisplayList = ({ items, setItems }) => {

    const [sort, setSort] = useState("input")

    let sortedItems;

    if (sort === "input")
        sortedItems = items;
    else if (sort === "desc")
        sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description))
    else
        sortedItems = items.slice().sort((a, b) => Number(a.completed) - Number(b.completed))

    function handleClearList() {
        setItems(item => [])
    }
    return (
        <div className="display">
            <ul>
                {sortedItems.map((item) => (
                    <li>
                        <Item item={item} key={item.id} setItems={setItems} />
                    </li>
                ))}
            </ul>
            <div className="btn">
                <select name="SORT" id="" value={sort} onChange={e => setSort(e.target.value)}>
                    <option value="input">SORT BY INPUT OEDER</option>
                    <option value="desc">SORT BY DESCRIPTION</option>
                    <option value="status">SORT BY COMPLETED STATUS</option>
                </select>
                <button onClick={handleClearList}>CLEAR LIST</button>
            </div>
        </div>
    );
};

export default DisplayList;