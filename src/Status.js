const Status = ({ items }) => {
    const totalItems = items.length;
    const completedItems = items.filter((item => item.completed)).length
    const percentage = items.length > 0 ? Math.trunc((completedItems / totalItems) * 100) : 0
    return (
        <div className="status">
            📃 you have {totalItems} items on your list, and you have already completed {completedItems} ({percentage}%)
        </div>
    );
};
export default Status;