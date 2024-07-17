import Router from "./src/router/Router"
import "./src/app/styles/app.css"
import {DataProvider} from "../my-react-app/src/hook/context/context"

function App() {
	return (
		<DataProvider  >
			<Router />
		</DataProvider>
	)
}

export default App
