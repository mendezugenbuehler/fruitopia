import React, { useState } from 'react'
import { show } from '../../../services/fruitService';
import { useNavigate } from 'react-router-dom';
function FruitSearch() {
    const [fruit, setFruit] = useState(''); // This holds the input value
    const [fruitData, setFruitData] = useState(''); // This holds the fetched data
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!fruit.trim()) return; // Prevent empty submissions

        try {
            const data = await show(fruit);
            // setFruitData(data); // Store the fetched data in fruitData
            navigate("/", { state: { fruitData: data } })
        } catch (err) {
            console.error("Failed to fetch fruit data", err);
        }

        setFruit(''); // Clear the input field
    }

    console.log(fruitData, "data from search");

    return (
        <>
            <section>
                <h1>Search</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="fruit">Enter a fruit:</label>
                    <input
                        id="fruit"
                        type="text"
                        value={fruit}
                        onChange={(e) => setFruit(e.target.value)}
                    />
                    <button type="submit">Search</button>
                </form>
            </section>
            {/* <FruitDetail fruit={fruitData} /> */}
        </>
    )
}


export default FruitSearch
