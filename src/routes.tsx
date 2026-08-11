import { Route, Switch } from 'wouter-preact'
// import { App } from './app';
// import { AstroGenApp } from './ex_websites/astrogen';
// import AstroGenApp
export function Routes() {
  return (
	<>
		<Switch>
			<Route path="/">
				<div className="flex">
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
					<div className="l1">
						<span>Every click,<br /> brings a customer.</span>
					</div>
				</div>
			</Route>
			
			<Route path="/websites">
				<h1>{"Our Website Examples"}</h1>
				<div className="webExmples">
					<a href="/websites/astrogen" target="_blank" rel="noopener noreferrer" className="web1 exampleWebsite">
						<h1 className="name">AstroGen</h1>
						<p className="description">An API Key provider for ai models.</p>
					</a>

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
			</Route>
		</Switch>
	</>
  )  
}