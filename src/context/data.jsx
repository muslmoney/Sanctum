import axios from 'axios'
import { createContext, useEffect , useState } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {

    const [Data, setData] = useState([])

    const GetData = async (path) => {
        await axios.get(import.meta.env.VITE_API + path).then(response => {
            const data = response.data;
            setData(() => data && data?.length ? data : [])

        }).catch(error => console.error(error))
    }

    useEffect(() => {
        GetData("/products")
    }, [])

    const contextValues = { Data }

    return <DataContext.Provider value={contextValues}>
        {children}
    </DataContext.Provider>
}
export { DataContext, DataProvider }