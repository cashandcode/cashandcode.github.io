import './app.css'
import company_logo from "./assets/comp_logo.png"
import { Routes } from './routes';
import { Link } from 'wouter-preact'
export function App() {
	return (
		<div className="App">
			<div className="sel" id="home"></div>
			<div className="navbar">
				<div className="split">
					<img src={company_logo} alt="CashAndCode Logo" />
				</div>
				<div className="split">
					<p className={"weblogo"}>{"Cash and Code"}</p>
				</div>
				<div className="split">
					<Link href="/">Home</Link>
					<Link href="/websites">Websites</Link>
					<Link href="/contact">Contact us</Link>
				</div>
			</div>
			<Routes />
		</div>
	)
}
