const TechnoItem = (props) => {
    const { techno, handleDeleteTechno } = props;

    return ( 
        <div key={techno.id} className="card">
            <h2>{techno.technoName}</h2>
            <h3>Category</h3>
            <p>{techno.technoCategory}</p>
            <h2>Description</h2>
            <p>{techno.technoDescription}</p>
            <div className="footer">
                <button className="btn-delete" onClick = {() => handleDeleteTechno(techno.id)}>Delete</button>
            </div>
        </div>
     );
}
 
export default TechnoItem;