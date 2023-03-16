import "./App.css";
import SavedAds from "./pages/SavedAds/SavedAds";
import Register from "./pages/Register/Register";
import AdCard from "./pages/Ads/AdCard";
import Settings from "./pages/Settings/Settings";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import RequireAuth from "./components/RequireAuth";
import PersistLogin from "./components/PersistLogin";
import { Routes, Route } from "react-router-dom";
import Users from "./pages/Users/Users";
import Layout from "./components/Layout";
import Landing from "./pages/Landing/Landing";
import User from "./pages/UserDetail/UserDetail";
import Lists from "./pages/Lists/Lists";
import About from "./pages/About/About";

function App() {
	return (
		// <div className="App">
		<Routes>
			<Route path="/" element={<Layout />}>
				{/* Public Routes */}
				<Route path="/" element={<Landing />} />
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login />} />

				{/* Persist Login */}
				<Route element={<PersistLogin />}>
					{/* Private Routes */}
					<Route element={<RequireAuth />}>
						<Route path="/home" element={<Home />} />
						<Route path="/lists" element={<Lists />} />
						<Route path="/settings" element={<Settings />} />
						<Route path="/saved" element={<SavedAds />} />
						<Route path="/users" element={<Users />} />
						<Route path="/users/:id" element={<User />} />
						<Route path="/about" element={<About />}></Route>
					</Route>
				</Route>
				{/* 404 */}
				<Route path="*" element={<h1>404</h1>} />
			</Route>
		</Routes>
	);
}
export default App;
