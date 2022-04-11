import { Route, Routes } from "react-router-dom";
import routesConfig from "@routes/routesConfig";
import Header from "@components/Header";

import styles from './App.module.css';

const App = () => {
	return (
		<> 
			<div className={styles.wrapper}>
				<Header />

				<Routes>
					{routesConfig.map((route, index) => (
						<Route 
							key={index}
							element={<route.element/>}  
							path={route.path}
						/>
					))}
				</Routes>
			</div>
		</>
	)
}

export default App;
