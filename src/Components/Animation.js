import React, {Component} from 'react';

function Animation() {

    function about(){
        about = document.getElementById("about");
        document.getElementById("about").scrollTop += 100;
        about.scrollIntoView();
        window.scrollBy(0, -100);
    }

        return (
            <section className={"animation"} id={"home"}>
                <div className={"welcome"}>
                    <h1>Welcome to my website!</h1>
                    <h1>I'm Joe Overton, a software developer.</h1>
                    <div className={"down_arrow"} onClick={about}>
                        <h1>&#8595;</h1>
                    </div>
                </div>
            </section>
        );
};

export default Animation;