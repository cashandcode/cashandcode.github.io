import './app.css'
import company_logo from "./assets/comp_logo.png"
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
					<a href="#home">Home</a>
					<a href="#websites">Websites</a>
					<a href="#contact">Contact us</a>
				</div>
			</div>
			<div className="flex">
				<div className="l1">
					<span>Good websites,<br /> right in your hands.</span>
				</div>
				<div className="l2">
					<div className="terminal">
						<div className="titlebar">npm create @cashandcode/template</div>
						<div className="terminal-text">
							<p className="terminal-text1">{"[13:46:55] \n samiraC in ~ > npm create @cashandcode/template"}</p>
							<p className="terminal-text2">{"..."}</p>
							<p className="terminal-text3">{"Created app template at /home/samiraC/cashandcode-template"}</p>
							<p className="terminal-text4">{"[13:46:55] \n samiraC in ~ > cd cashandcode-template && mv cashandcode-template mywebsite-com"}</p>
						</div>
					</div>
				</div>
			</div>
			<h1>{"Our Website Examples"}</h1>
			<div className="webExmples">
				<div className="web1 exampleWebsite">
					<h1 className="name">AstroGen</h1>
					<p className="description">An API Key provider for ai models.</p>
				</div>
				<div className="flex">
					<div className="web2 exampleWebsite">
						<h1 className="name">FruityChirps</h1>
						<p className="description">A cross-country fruit provider for juices etc.</p>
					</div>
					<div className="web3 exampleWebsite">
						<h1 className="name">PixelBloom</h1>
						<p className="description">A design studio portifolio for making polished digital logos.</p>
					</div>
				</div>
				
				
			</div>
		</div>
	)
}
