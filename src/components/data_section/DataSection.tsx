import axios from "axios"
import { useState } from "react";

const DataSection = () => {
    const [fact, setFact] = useState("")
    const data = async () => {
        const response = await axios.get('https://dog-api.kinduff.com/api/facts');
        const result = response.data.facts
        setFact(result);
    }
    return (
        <div className="dataSection">
            <button onClick={data}>Çek</button>
            <div className="facts" style={{ border: '1px solid gray', padding: '30px', borderRadius: '30px 0 30px 0' }}>
                <q>{fact}</q>
            </div>

        </div>

    )
}

export default DataSection