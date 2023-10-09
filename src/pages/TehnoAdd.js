import { useState } from "react";
    /**
     * Permet l'ajout de nouvelle technologie grâce au formulaire
     */

const TechnoAdd = (props) => {
    //Récupérer la fonction via props
    const {handleAddTechno} = props;

    // Cette ligne de code utilise le hook d'état (useState) pour créer une variable d'état 'techno' et une fonction 'setTechno' pour la mettre à jour.
    // 'techno' est un objet qui stocke les informations sur une technologie.
    // L'objet a trois propriétés : 'technoName', 'technoCategory', et 'technoDescription'.
    // Ces propriétés seront utilisées pour stocker les valeurs des champs de formulaire liés à une technologie dans un composant React.
    const [techno, setTechno] = useState({
    technoName: '',           // Le nom de la technologie
    technoCategory: '',       // La catégorie de la technologie
    technoDescription: '',    // La description de la technologie
    });

    //récupère la valeur à chaque fois que le champs de texte change
    //et met à jour cette valeur dans l'attribut name de techno
    const handleTechnoNameChange = (e) => {
        setTechno({...techno, technoName: e.target.value})
    }

    const handleTechnoCategoryChange = (e) => {
        setTechno({...techno, technoCategory: e.target.value})
    }

    const handleTechnoDescriptionChange = (e) => {
        setTechno({...techno, technoDescription: e.target.value})
    }

    /**
     * 
     * @param {event} e 
     * si le formulaire est soumi il fait appelle à handleAdd pour lui attribuer un nouveau techno dans la list
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddTechno(techno);
    }

    return ( 
        <div className="techno-add">
            <h1>Ajouter une technologie</h1>
            <form onSubmit={handleSubmit}>
                <label>Name: </label>
                <input type="text" name="technoName" value={techno.technoName} onChange={handleTechnoNameChange}/>
                <label>Catégorie: </label>
                <select name="technoCategory" value={techno.technoCategory} onChange={handleTechnoCategoryChange}>
                        <option value="">Select a category</option>
                        <option value="front">Front</option>
                        <option value="back">Back</option>
                        <option value="fullstack">Full-Stack</option>
                        <option value="other">Other</option>
                    </select>
                <label>Description: </label>
                <textarea  cols="30" rows="10"name="technoDescription" value={techno.technoDescription} onChange={handleTechnoDescriptionChange}></textarea>
                <input type="submit" className="btn"/>
            </form>
        </div>
     );
}

export default TechnoAdd;