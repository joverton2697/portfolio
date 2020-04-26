import React, {Component, useEffect} from 'react';

function Header() {

    let header;
    let sticky;

    useEffect(() => {
        header = document.getElementById("header");

        sticky = header.offsetTop;
    }, []);

    window.onscroll = function() {myFunction()};

    function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }

    function about(){
        about = document.getElementById("about");
        document.getElementById("about").scrollTop += 100;
        about.scrollIntoView();
        window.scrollBy(0, -100);
    }

    function home(){
        home = document.getElementById("home");
        document.getElementById("home").scrollTop += 100;
        home.scrollIntoView();
        window.scrollBy(0, -100);
    }

    function projects(){
        projects = document.getElementById("projects");
        projects.scrollIntoView();
        window.scrollBy(0, -100);
    }

    return (
        <section id={"myHeader"}>
            <div className={"header"} id={"header"}>
                <h2 className={"home"} onClick={home}>Home</h2>
                <h2 className={"about"} onClick={about}>About</h2>
                <h2 className={"projects"} onClick={projects}>My Work</h2>
            </div>
        </section>
    );
};

export default Header;