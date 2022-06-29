function TodoForm({addTodo}){
    const [value, setvalue] = React.useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setvalue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            className="input"
            value={value}
            placeholder="Add Todo ..."
            onChange={e => setvalue(e.target.value)}
        />
</form>
    );
}