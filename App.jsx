import Router from "./src/router/Router"
import "./src/app/styles/app.css"
import {DataProvider} from "./src/hook/context/context"

function App() {
	return (
		<DataProvider  >
			<Router />
		</DataProvider>
	)
}

export default App
