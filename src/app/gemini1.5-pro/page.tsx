export default function Home() {
  return (
    <div className="">
<header>
        <h1>Ibrohim Abdivokhidov's Wrapped 2024</h1>
    </header>

    <main>
        <section className="month">
            <h2>January</h2>
            <ul>
                <li>Stopped applying for jobs; realized it was counterproductive.</li>
                <li>Began pursuing my dreams by creating and building stuff.</li>
                <li>Created accounts on all social platforms: LinkedIn, YouTube, X (twitter), Instagram, Twitch, etc. <a href="#my-socials">My Socials</a></li>
                {/* <!-- ... (Rest of January list items) --> */}
             </ul>
        </section>

        {/* <!-- Repeat the section structure for each month --> */}
        <section className="month">
            <h2>February</h2>
            <ul>
                {/* <!-- ... (February List items) --> */}
            </ul>
        </section>


        {/* <!-- ... (Rest of the months) --> */}

        <section id="my-socials">
            <h2>My Socials</h2>
            <ul>
                <li><a href="#">LinkedIn</a></li>
                <li><a href="#">YouTube</a></li>
                <li><a href="#">X (Twitter)</a></li>
                {/* <!-- ... other social media links --> */}
            </ul>
        </section>

          <section id="useful-links">
            <h2>Useful Links</h2>
            <ul>
                <li><a href="#">IES Program Application</a></li>
                <li><a href="#">Patreon (42 Applications)</a></li>
                <li><a href="#">Hack the North</a></li>
                <li><a href="#">Knight-Hennessy Scholarship Application</a></li>
                 <li><a href="#">The Pathless Path</a></li>
                 <li><a href="#">IES Program in Berlin</a></li>
                 <li><a href="#">Young Leaders Fellowship</a></li>



            </ul>
        </section>

          <section id="neuroscience">
            <h2>Neuroscience</h2>
            <ul>
                <li><a href="#">DAAD Application</a></li>

            </ul>
        </section>


    </main>

    <footer>
        <p>© 2025 Ibrohim Abdivokhidov</p>
    </footer>

    <script src="script.js"></script> {/* <!-- Link to your JavaScript file (optional) --> */}
    </div>
  );
}
