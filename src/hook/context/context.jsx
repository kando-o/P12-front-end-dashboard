import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'

export const DataContext = createContext()

export const DataProvider = ({ children }) => {

    const [userData, setUserData] = useState(null);
    const [errorData, setErrorData] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3000/user/12")
        .then(res=> {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json()
        })
        .then(data => setUserData(data) ,userData && console.log(userData))
        .catch(error => {
            setErrorData(error);
        })
    }, [])

    return <>
        { userData ?
            <DataContext.Provider value={{ userData, errorData }} >
            {children}
            </DataContext.Provider> : errorData
        }
    </>
}

DataProvider.propTypes = {
    children: PropTypes.node.isRequired
}
