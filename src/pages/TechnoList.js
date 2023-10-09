import TechnoItem from "../components/TechnoItem";

const TechnoList = (props) => {
    const {technoList, handleDeleteTechno} = props;
    return ( 
        <div className="techno-list">
            <h1>Tous les technos</h1>
            <div>
                {
                    technoList.map(techno => (
                        <TechnoItem techno = {techno} key = {techno.id} handleDeleteTechno = {handleDeleteTechno}/>
                    ))
                }
            </div>
        </div>
     );
}
 
export default TechnoList;