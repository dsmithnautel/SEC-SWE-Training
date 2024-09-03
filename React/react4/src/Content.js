const Content = () => {
    const handleNameChange = () => {
        const names = ["John", "Jane", "Doe"];
        const randomIndex = Math.floor(Math.random() * names.length);
        return names[randomIndex];
    };

    return (
        <main>
            <p>Hello {handleNameChange()}</p>
        </main>
    );
};

export default Content;
