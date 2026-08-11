import './css/astrogen.css'

export function AstroGenApp() {
    return (
        <div className="Astrogen">
            <header className="navbar">
                <div className="split">
                    <h1>Astro<b>Gen</b></h1>
                </div>
                <div className="split">
                    <a className="navb-item" href="#contactus">Contact us</a>
                    <a className="navb-item" href="#about">About us</a>
                    <a className="navb-item" href="#team">Our team</a>
                    <a className="navb-item" href="#signup">Sign up</a>
                </div>
            </header>

            <main className="hero">
                <h1 className="astrogen-title">
                    The best <b>API key provider</b> you can find.
                </h1>
                <a className="contactUs" href="#contactus">Contact Us Now</a>
            </main>

            <section className="ourteam-container" id="team">
                <h2>Our team</h2>
                <div className="flex">
                    <div className="l1">
                        <h3>Our team contains,<br />very dedicated people.</h3>
                    </div>
                    <div className="l2">
                        <img src="https://thumbs.dreamstime.com/b/group-young-business-people-working-spacious-office-lots-computers-developers-programming-online-business-216890906.jpg" alt="People coding together" />
                    </div>
                </div>
            </section>

            <footer className="contact" id="contactus">
                <div>
                    <p>
                        <div>Subject</div>
                        <br />
                        <textarea className="subject" placeholder="Subject" />
                    </p>
                    <p>
                        <div>Your email text</div>
                        <br />
                        <textarea className="email-text" placeholder="Email text" />
                    </p>
                </div>
                <div class="footersec-2">
                    <p>
                        <div class="bigtext">Contact us at:</div>
                        <br />
                        <b className="b1">+1 (555) 346-2984</b>
                        <br />
                        <b className="b2">astrog3n@astrogen.hello</b>
                    </p>
                </div>
            </footer>
        </div>
    )
}
