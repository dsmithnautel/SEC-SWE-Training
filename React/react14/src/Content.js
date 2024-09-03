import ItemList from "./ItemList";

const Content = ({ items, handleCheck, handleDelete }) => {
    return (
        <>
            {items.length ? (
                <ItemList
                    items={items}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
            ) : (
                <p className="empty" style={{ marginTop: "2rem" }}>
                    list is empty
                </p>
            )}
        </>
    );
};

export default Content;
