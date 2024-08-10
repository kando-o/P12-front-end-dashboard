import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'

export const DataContext = createContext()

const mocked = {
    user: {
        id: 'mocked',
        userInfos: {
            firstName: 'Mocked',
            lastName: 'User',
            age: 31,
        },
        todayScore: 0.42,
        keyData: {
            calorieCount: 1930,
            proteinCount: 155,
            carbohydrateCount: 290,
            lipidCount: 50
        }
    },
    activity: {
        userId: 'mocked',
        sessions: [
            {
                day: '2020-07-01',
                kilogram: 70,
                calories: 240
            },
            {
                day: '2020-07-02',
                kilogram: 69,
                calories: 220
            },
            {
                day: '2020-07-03',
                kilogram: 70,
                calories: 280
            },
            {
                day: '2020-07-04',
                kilogram: 70,
                calories: 500
            },
            {
                day: '2020-07-05',
                kilogram: 69,
                calories: 160
            },
            {
                day: '2020-07-06',
                kilogram: 69,
                calories: 162
            },
            {
                day: '2020-07-07',
                kilogram: 69,
                calories: 390
            }
        ]
    },
    sessions:    {
        userId: 'mocked',
        sessions: [
            {
                day: 1,
                sessionLength: 30
            },
            {
                day: 2,
                sessionLength: 23
            },
            {
                day: 3,
                sessionLength: 45
            },
            {
                day: 4,
                sessionLength: 50
            },
            {
                day: 5,
                sessionLength: 0
            },
            {
                day: 6,
                sessionLength: 0
            },
            {
                day: 7,
                sessionLength: 60
            }
        ]
    },
    performance:  {
        userId: 'mocked',
        kind: {
            1: 'cardio',
            2: 'energy',
            3: 'endurance',
            4: 'strength',
            5: 'speed',
            6: 'intensity'
        },
        data: [
            {
                value: 200,
                kind: 1
            },
            {
                value: 240,
                kind: 2
            },
            {
                value: 80,
                kind: 3
            },
            {
                value: 80,
                kind: 4
            },
            {
                value: 220,
                kind: 5
            },
            {
                value: 110,
                kind: 6
            }
        ]
    },
}


export const DataProvider = ({ children }) => {

    const [id, setId] = useState(null)
    const [loadingData, setLoadingData] = useState(false)
    const [loadingActivity, setLoadingActivity] = useState(false)
    const [loadingPerformance, setLoadingPerformance] = useState(false)
    const [loadingAvgSessions, setLoadingAvgSessions] = useState(false)
    const [userData, setUserData] = useState(null);
    const [userActivityData, setUserActivityData] = useState(null);
    const [userAverageSessions, setUserAverageSession] = useState(null);
    const [userPerformance, setUserPerformance] = useState(null);
    const [errorData, setErrorData] = useState(null);

    useEffect(() => {
        if (!id) return
        setErrorData(null)

        const loadFetch = async () => {

            try {
                if (id==="mocked") {
                    setLoadingData(true)
                    setLoadingActivity(true)
                    setLoadingAvgSessions(true)
                    setLoadingPerformance(true)
                    setTimeout(() => {
                        setUserData(mocked.user)
                        setUserActivityData(mocked.activity)
                        setUserAverageSession(mocked.sessions)
                        setUserPerformance(mocked.performance)
                        setLoadingData(false)
                        setLoadingActivity(false)
                        setLoadingAvgSessions(false)
                        setLoadingPerformance(false)
                    }, 1500)
                } else {
                    setLoadingData(true)
                    setLoadingActivity(true)
                    setLoadingAvgSessions(true)
                    setLoadingPerformance(true)

                    setTimeout(async () => {
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
                            .catch(err => { setErrorData(err) })
                        setLoadingData(false)
                    }, 1500)

                    setTimeout(async () => {
                        await fetch(`http://localhost:3000/user/${id}/activity`)
                            .then(res=> {
                                if (!res.ok) {
                                    throw ('Network response activity was not ok')
                                }
                                return res.json()
                            })
                            .then(data => setUserActivityData(data.data))
                            .catch(err => { setErrorData(err) })
                        setLoadingActivity(false)
                    }, 2000)

                    setTimeout(async () => {
                        await fetch(`http://localhost:3000/user/${id}/average-sessions`)
                            .then(res=> {
                                if (!res.ok) {
                                    throw ('Network reponse Average session was not ok');
                                }
                                return res.json()
                            })
                            .then(data => setUserAverageSession(data.data))
                            .catch(err => { setErrorData(err) })
                        setLoadingAvgSessions(false)
                    }, 3000)

                    setTimeout(async () => {
                        await fetch(`http://localhost:3000/user/${id}/performance`)
                            .then(res=> {
                                if (!res.ok) {
                                    throw ('Network reponse performance session was not ok')
                                }

                                return res.json()
                            })
                            .then(data => setUserPerformance(data.data))
                            .catch(err => { setErrorData(err) })
                        setLoadingPerformance(false)
                    }, 4000)
                }

            } catch (err) {
                console.log("ERROR:", err)
                setErrorData(err)
                setLoadingData(false)
                setLoadingActivity(false)
                setLoadingPerformance(false)
                setLoadingAvgSessions(false)
            }

        }
        loadFetch()
    }, [id])

    return <DataContext.Provider value={{ loadingData, loadingActivity, loadingPerformance, loadingAvgSessions, errorData, userData, userActivityData, userAverageSessions, userPerformance, id, setId }} >
        {children}
    </DataContext.Provider>
}

DataProvider.propTypes = {
    children: PropTypes.node.isRequired
}
