import Users from "./Users";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./Header";

function App() {
	return (
		<div className="flex flex-col justify-center items-center max-w-screen-xl mx-4 xl:mx-auto">
			<Header />
			<Provider store={store}>
				<Users />
			</Provider>
		</div>
	);
}

export default App;