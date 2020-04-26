import React, {Component} from 'react';

import csharp from "../Images/c#.png";
import css from "../Images/css.png";
import javascript from "../Images/javascript.png";
import reactLogo from "../Images/react.jpeg";
import php from "../Images/php.png";

class Skills extends Component {

    render() {
        return (
            <section>
                <h2 className={"intro"}>Skills</h2>
                <div className={"skills"}>
                    <div className={"single_skill"}>
                        <img className={"skill_image"} src={csharp}/>
                        <p>C#</p>
                    </div>
                    <div className={"single_skill"}>
                        <img className={"skill_image"} src={css}/>
                        <p>CSS</p>
                    </div>
                    <div className={"single_skill"}>
                        <img className={"skill_image"} src={javascript}/>
                        <p>JavaScript</p>
                    </div>
                    <div className={"single_skill"}>
                        <img className={"skill_image"} src={reactLogo}/>
                        <p>React</p>
                    </div>
                    <div className={"single_skill"}>
                        <img className={"skill_image"} src={php}/>
                        <p>PHP</p>
                    </div>
                </div>
                <div className={"section_line"}></div>
            </section>
        )};
};

export default Skills;