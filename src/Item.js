const Item = ({ item, setItems }) => {
    function handleUpdateItem(id) {
        setItems((items) =>
            items.map((item) =>
                item.id === id ? { ...item, completed: !item.completed } : item
            )
        );
    }

    function handleDeleteItem(id) {
        setItems((items) => {
            return items.filter((item) => item.id !== id);
        });
    }
    return (
        <>
            <input
                type="checkbox"
                value={item.id}
                onClick={() => handleUpdateItem(item.id)}
            />
            <span className={item.completed ? "completed" : ""}>
                {" "}
                {item.description}
            </span>
            <button onClick={() => handleDeleteItem(item.id)}>❌</button>
        </>
    );
};
export default Item;
