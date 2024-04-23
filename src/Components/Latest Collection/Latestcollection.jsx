import React, { useState, useEffect } from 'react';
import Items from '../Items/Items';
import './Latestcollection.css';

const Latestcollection = () => {
    const [latestCollection, setLatestCollection] = useState([]);

    useEffect(() => {
        fetch('https://malek.onrender.com/Latestcollection')
            .then(response => response.json())
            .then(data => setLatestCollection(data))
            .catch(error => console.error('Erreur lors de la récupération des produits:', error));
    }, []);

    // Fonction de comparaison pour trier les produits par date
    const compareByDate = (a, b) => {
        if (a.date < b.date) {
            return -1;
        } else if (a.date < b.date) {
            return 1;
        } else {
            return 0;
        }
    };

    // Tri des produits par date
    const sortedProducts = latestCollection.sort(compareByDate);

    return (
        <div className='latest-collections'>
            <h1>Latest Collections</h1>
            <hr />
            <div className="Collections">
                {sortedProducts.map((item, i) => (
                    <Items  key={i} id={item._id}
                    name={item.name} image={item.image}
                     new_price={item.new_price} old_price={item.old_price} />
                ))}
            </div>
        </div>
    );
};

export default Latestcollection;
