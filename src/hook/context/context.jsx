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

                    // setTimeout(async () => {
					// 	try {

					// 		const res = await fetch(`http://localhost:3000/user/${id}`)

					// 		// Si la réponse n'est pas "ok", on génère une erreur	
					// 		if (!res.ok)  {
					// 				if (res.status === 404) {
					// 					console.log(res.ok, res.status,"test:NON")	
					// 					throw new Error (`failed to fetch : user ${id} not found`)
					// 				} else {
					// 					throw new Error (`failed to fetch user with id ${id} error code: ${res.status}`)
					// 				}
					// 				}
					// 				return await res.json()
					// 				const data = setUserData(data.data))
					// 				.catch(err => {setErrorData(err)})
					// 				console.log(errorData)
					// 			})
					// 	}
                    // }, 1500)

					setTimeout(async () => {
						try {
							const res = await fetch(`http://localhost:3000/user/${id}`);
							
							// Si la réponse n'est pas "ok", on génère une erreur
							if (!res.ok) {
								// Si le code de statut n'est pas 200, on lève une erreur avec le statut
								if (res.status === 404) {
									throw new Error(`User with ID ${id} not found (Error 404)`);
								} else {
									throw new Error(`Failed to fetch user with ID ${id}. Error code: ${res.status}`);
								}
							}
							
							// Si tout va bien, on continue avec la conversion JSON
							const data = await res.json();
							
							// On met à jour l'état avec les données reçues
							setUserData(data.data);
							
						} catch (error) {
							// Capture et gestion des erreurs (réseau, serveur, etc.)
							console.error('Fetch error:', error.message);
							setErrorData(error.message); // On passe le message d'erreur à l'état
							return errorData
						} finally {
							// Arrête le chargement même si une erreur est survenue
							setLoadingData(false);
						}
					}, 1500);

                    // setTimeout(async () => {
                    //     await fetch(`http://localhost:3000/user/${id}/activity`)
                    //         .then(res=> {
                    //             if (!res.ok ) {
					// 				if (res.status === "failed") {
					// 					throw ('Network response activity was not ok')
					// 				} else {
					// 					throw (`failed to fetch user with id ${id} error code: ${res.status}`)
					// 				}
					// 			}
                    //             return res.json()
                    //         })
                    //         .then(data => setUserActivityData(data.data))
                    //         .catch(err => { setErrorData(err) })
                    //     setLoadingActivity(false)
                    // }, 2000)

					setTimeout(async () => {
						try {
							const res = await fetch(`http://localhost:3000/user/${id}/activity`);
							
							// Vérifie si la réponse est correcte (statut HTTP entre 200 et 299)
							if (!res.ok) {
								// Si le statut n'est pas "ok", on lève une erreur personnalisée
								if (res.status === 404) {
									throw new Error(`Activity for user with ID ${id} not found (Error 404)`);
								} else {
									throw new Error(`Failed to fetch activity for user with ID ${id}. Error code: ${res.status}`);
								}
							}
							
							// Si tout va bien, on transforme la réponse en JSON
							const data = await res.json();
							
							// Met à jour les données d'activité de l'utilisateur
							setUserActivityData(data.data);
							
						} catch (error) {
							// Capture des erreurs réseau et affichage du message d'erreur
							console.error('Fetch activity error:', error.message);
							setErrorData(error.message);  // Met l'erreur dans l'état pour affichage
						} finally {
							// Arrête l'indicateur de chargement même en cas d'erreur
							setLoadingActivity(false);
						}
					}, 2000);

                    // setTimeout(async () => {
                    //     await fetch(`http://localhost:3000/user/${id}/average-sessions`)
                    //         .then(res=> {
                    //             if (!res.ok) { 
					// 				if (res.status === "failed") {
                    //                 throw ('Network reponse Average session was not ok');
					// 			} else {
					// 				throw (`failed to fetch user with id ${id} error code: ${res.status}`)
					// 			}
                    //             }
                    //             return res.json()
                    //         })
                    //         .then(data => setUserAverageSession(data.data))
                    //         .catch(err => { setErrorData(err) })
                    //     setLoadingAvgSessions(false)
                    // }, 3000)

					setTimeout(async () => {
						try {
							const res = await fetch(`http://localhost:3000/user/${id}/average-sessions`);
					
							// Vérification du statut HTTP de la réponse
							if (!res.ok) {
								// Si le statut n'est pas correct, on lève une erreur personnalisée
								if (res.status === 404) {
									throw new Error(`Average sessions for user with ID ${id} not found (Error 404)`);
								} else {
									throw new Error(`Failed to fetch average sessions for user with ID ${id}. Error code: ${res.status}`);
								}
							}
					
							// Si la réponse est correcte, on transforme la réponse en JSON
							const data = await res.json();
					
							// Met à jour l'état avec les données d'average sessions
							setUserAverageSession(data.data);
					
						} catch (error) {
							// Capture des erreurs et les stocke dans l'état pour affichage dans le DOM
							setErrorData(error.message);
						} finally {
							// Arrête l'indicateur de chargement même en cas d'erreur
							setLoadingAvgSessions(false);
						}
					}, 3000);

                    // setTimeout(async () => {
                    //     await fetch(`http://localhost:3000/user/${id}/performance`)
                    //         .then(res=> {
                    //             if (!res.ok) {
                    //                 throw ('Network reponse performance session was not ok')
                    //             }

                    //             return res.json()
                    //         })
                    //         .then(data => setUserPerformance(data.data))
                    //         .catch(err => { setErrorData(err) })
                    //     setLoadingPerformance(false)
                    // }, 4000)

					setTimeout(async () => {
						try {
							const res = await fetch(`http://localhost:3000/user/${id}/performance`);
					
							// Vérification du statut HTTP de la réponse
							if (!res.ok) {
								throw new Error(`Failed to fetch performance data for user with ID ${id}. Error code: ${res.status}`);
							}
					
							// Transformation de la réponse en JSON
							const data = await res.json();
					
							// Mise à jour de l'état avec les données de performance de l'utilisateur
							setUserPerformance(data.data);
					
						} catch (error) {
							// Capture des erreurs et mise à jour de l'état pour les afficher
							setErrorData(error.message);
						} finally {
							// Arrêt de l'indicateur de chargement, même si une erreur survient
							setLoadingPerformance(false);
						}
					}, 4000);
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
