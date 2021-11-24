import React, {useState} from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';


const GitExpertApp = () => {

    // const categories = ['Miguel','Jessica', 'Calispa'];
    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd =(e) => {
    //    // categories.push('Yepez'); No usar
    //    setCategories([...categories,'Yepez']); //agrega al final
    // //    setCategories(['Esthefania',...categories]); //agrega al inicio
    // //    setCategories(cats => [...cats, 'Casados Felices']);
    // };

    return (<>
        <h2>GitExpertApp</h2>
        <AddCategory setCategorias={ setCategories }></AddCategory>
        <hr />
        {/* <button onClick={ handleAdd }>Agregar</button> */}
        <ol>
            {
            categories.map((item, i) => {
                // return <li key={item}>{item}</li>
                return <GifGrid 
                key = {item}
                category={ item }></GifGrid>
            }) 
            }
        </ol>
    </>
    );
}

export default GitExpertApp;