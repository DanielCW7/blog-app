
const About = () => {
    return (
        <div className="max-w-7xl m-auto text-black p-10"> 
            <h2 className="text-3xl mb-2"> About </h2>
            <p> 
                This app was created as a fun project that exercies the use of a CMS to easily produce
                and update posts and serve them from an API. It's built using ReactJS, NextJS, and TailwindCSS.
            </p>
            <br/>
            <p>
                In addition to being able to manage my blog content easily using the Sanity.io CMS, it allows me to
                express myself in ways I might not normally do so using my love for movie-watching, comicbook collecting, 
                and general breakdowns for topics I'm passionate about. This project is a fantastic way to practice and illustrate 
                the most effective means to leverage my knowledge of ReactJS, NextJS, and a headless CMS to better understand how 
                easy it can be to create a site with readily accessible content.
            
            </p>
            <br/>
            <p>
                As far as app usage goes, this app is built solely out of interest in blogging my innermost thoughts on certain suibjects
                and sholdn't be taken seriously in any manner! It's only a fun project with which I aim to increase my skills and 
                may someday expand upon this app to further increase it's functionality. Perhaps I'll add the ability to like and
                comment on blog posts? Only time will tell!
            </p>
        </div>            
    )
}

export default About