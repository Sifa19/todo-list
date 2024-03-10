import { useState } from "react";
const AddList = ({ setItems }) => {
    const [description, setDiscription] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (description === "") return;

        const newItem = { id: Date.now(), description: description, completed: false };
        setItems((item) => {
            return [...item, newItem]
        })
        setDiscription((s) => "");
    }
    return (
        <form className="add-list" onSubmit={handleSubmit}>
            <h4>Add items in the list</h4>
            <input
                type="text"
                placeholder="Item... "
                name="value"
                id=""
                value={description}
                onChange={(e) => setDiscription((s) => e.target.value)}
            />
            <button>ADD</button>
        </form>
    );
};

export default AddList;  