import React, { useState, useEffect } from 'react'
// import PropTypes from 'prop-types'
import GitGridItem from './GitGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/getGifs';

const GifGrid = ({ category }) => {

    // const [count, setCount] = useState(0);
    // const [images, setImages] = useState([])

    const {data: images, loading} = useFetchGifs(category);

   

    // useEffect(() => {
    //     //forma larga
    //     // getGifs(category).then(
    //     //     imgs => setImages(imgs)
    //     // );
    //     // forma corta
    //     getGifs(category).then(setImages);
    // },[category]);

    // const getGifs = async() => {
    //     const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=uzYTcrQDccxhBloAMMSi4stS0KO5BAeW`;
    //     const resp = await fetch(url);
    //     const {data} = await resp.json();
    //     const gifs = data.map( img => {
    //         return {
    //             id: img.id,
    //             title: img.title,
    //             url: img.images?.downsized_medium.url
    //         }
    //     }

    //     );
    //     console.log(gifs);
    //     setImages(gifs);
    // }

    // getGifs();

    return ( <>
        <h3> { category } </h3> 
       
        {loading&&<p>Loading...</p>}
        <div className="card-grid">
                              {
                                images.map(img => (
                                    <GitGridItem 
                                    key={img.id} 
                                    {...img}>
                                    </GitGridItem>
                                    ))
                            }
                        
                      
                    </div>

        {
            /* <div className="card-grid">
                          

                              {
                                images.map(img => (
                                    <GitGridItem 
                                    key={img.id} 
                                    {...img}>
                                    </GitGridItem>
                                    ))
                            }
                        
                      
                    </div> */
        } 
        { /* <h3>{count}</h3> */ } 
        
        { /* <button onClick={() => setCount(count + 1)}>Add</button> */ } 
        </>
    )
}

GifGrid.propTypes = {

}

export default GifGrid