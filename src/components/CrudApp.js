
const CrudApp = () => {
    const [db, setDb] = useState (initialDb);
    return (
        <div>
            <h2>Crud APPI</h2>
            <CrudForm/>
            <CrudTable data={bd}/>
        </div>
    )
}

export default CrudApp;