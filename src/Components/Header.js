import React, {Component, useEffect} from 'react';

function Header() {

    let header;
    let anchor;
    let sticky;

    useEffect(() => {
        anchor = document.getElementById("content_anchor");
        header = document.getElementById("header");
        sticky = header.offsetTop;
    }, []);

    window.onscroll = function() {myFunction()};

    function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
            anchor.classList.remove("hide");
        } else {
            anchor.classList.add("hide");
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
            <div id={"content_anchor"} className={"hide"}></div>
            <div className={"header"} id={"header"}>
                <div className={"name"}>
                    <h2>Joe Overton</h2>
                </div>
                <div className={"navigation"}>
                    <h2 className={"home"} onClick={home}>Home</h2>
                    <h2 className={"about"} onClick={about}>About Me</h2>
                    <h2 className={"projects"} onClick={projects}>My Work</h2>
                </div>
            </div>
        </section>
    );
};

export default Header;