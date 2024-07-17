import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'

export const DataContext = createContext()

const mocked = {
    user: {

    },
    activity: {

    },
    sessions: {

    },
    performance: {

    },
}

export const DataProvider = ({ children }) => {

    const [id, setId] = useState(null)
    const [loading, setLoading] = useState(false)
    const [userData, setUserData] = useState(null);
    const [userActivityData, setUserActivityData] = useState(null);
    const [userAverageSessions, setUserAverageSession] = useState(null);
    const [userPerformance, setUserPerformance] = useState(null);
    const [errorData, setErrorData] = useState(null);

    useEffect(() => {
        if (!id) return
        setLoading(true)
        setErrorData(null)

        const loadFetch = async () => {

            setTimeout( async () => {
                try {
                    if (id==="mocked") {
                        setUserData(mocked.user)
                        setUserActivityData(mocked.activity)
                        setUserAverageSession(mocked.sessions)
                        setUserPerformance(mocked.performance)
                    } else {

                        await fetch(`http://localhost:3000/user/${id}`)
                            .then(res=> {
                                if (!res.ok) {
                                    if (res.status === 404) {
                                        throw (`failed to fetch : user ${id} not found`)
                                    } else {
                                        throw (`failed to fetch user with id ${id} error code: ${res.status}`)
                                    }
                                }
                                return res.json()
                            })
                            .then(data => setUserData(data.data))

                        await fetch(`http://localhost:3000/user/${id}/activity`)
                            .then(res=> {
                                if (!res.ok) {
                                    throw ('Network response activity was not ok')
                                }
                                return res.json()
                            })
                            .then(data => setUserActivityData(data.data))
                        
                        await fetch(`http://localhost:3000/user/${id}/average-sessions`)
                            .then(res=> {
                                if (!res.ok) {
                                    throw ('Network reponse Average session was not ok');
                                }
                                return res.json()
                            })
                            .then(data => setUserAverageSession(data.data))

                        await fetch(`http://localhost:3000/user/${id}/performance`)
                            .then(res=> {
                                if (!res.ok) {
                                    throw ('Network reponse performance session was not ok')
                                }

                                return res.json()
                            })
                            .then(data => setUserPerformance(data.data))
                    }
                    setLoading(false)

                } catch (err) {
                    console.log("ERROR:", err)
                    setErrorData(err)
                    setLoading(false)
                }
            }, 2000)

        }
        loadFetch()
    }, [id])

    return <DataContext.Provider value={{ loading, errorData, userData, userActivityData, userAverageSessions, userPerformance, id, setId }} >
        {children}
    </DataContext.Provider>
}

DataProvider.propTypes = {
    children: PropTypes.node.isRequired
}
