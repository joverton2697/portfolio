import React, {Component} from 'react';

import stateAuth from '../Images/StateAuth.png';

class Projects extends Component {

    render() {
        return (
            <section>
                <h2 className={"intro"}>Projects</h2>
                <div className={"projects"}>
                    <div className={"single_project"}>
                        <h3>Hololens Demo</h3>
                        <p>This project was a way for the students of the Digital Corps to test ourselves and learn something new.
                        We had recently obtained a Microsoft Hololens and decided to make an application for it that we could use
                        to teach people about what we do at the Corps in a cool way. The project gives you a short quiz meant to help
                        teach about what each team is about and sort users into a team based on their responses. Then there are a few
                        games to play that a related to a specific team. There are 2 game skeletons and each individual game is a reskin
                        of one of the two games with assets that relate to the team selected.</p>
                        <div className={"line"}></div>
                    </div>
                    <div className={"single_project"}>
                        <h3>Writing Challenge</h3>
                        <p>This was a project for the Provost's Office of Ball State. The Provost's office hosts a writing competition for
                        professors and they wanted a site to help them manage and streamline their process. We provided a stat tracking system
                        so that professors can see how much time they've written, how many words they've written, and how many days they've
                        written during the competition. Professors that sign up for the competition are also sorted into teams and are able
                        to send messages to the other team members through the site. The Provost's office is also able to post announcements
                        on the site for participants.</p>
                        <div className={"line"}></div>
                    </div>
                    <div className={"single_project"}>
                        <h3>Cardinal AR</h3>
                        <p>For this project the Digital Corps collaborated with BSU Sportslink, a multimedia studio that works with Ball State
                        Athletics to promote sporting events and sports teams. The project started out as a way to promote the Ball State
                        basketball team by turning a promotional poster into an Augmented Reality (AR) target that played a promo video
                        when targeted. This then evolved into a full-scale AR application that allowed users to place and explore a stylized
                        map of Ball State, place a view models of football players created by the Digital Corps, and scan AR targets to view
                        promotional content associated with the various targets.</p>
                        <div className={"line"}></div>
                    </div>
                    <div className={"single_project"}>
                        <h3>BSU Dining Site</h3>
                        <p>This project was a way for students with dietary restrictions to order food that is healthy and safe for them
                        in an easy-to-use and efficient way. Prior to this site the process was very difficult for students and BSU faculty
                        to use. We provided a way for BSU Dining faculty to update their menus and meal times, as well as communicate
                        with students in the dietary restriction program. Students are able to schedule meals for up to a week in advance,
                        however they are not able to schedule a meal within 24 hours of the mealtime so that the Dining faculty have enough
                        to prepare for the meals they'll need to make each day. Students can also make edits to meals they've ordered with
                        the same 24 hour rule applying.</p>
                        <div className={"line"}></div>
                    </div>
                    <div className={"single_project"}>
                        <h3>Letterman Learning</h3>
                        <p>This was a collaboration with an immersive learning class from the Emerging Media and Digital Design department.
                        The task was to create a space that highlights the career path of David Letterman with an emphasis on lifelong
                        learning rather than glorifying Letterman. Ball State came into possession of a few personal items from
                        Letterman around the time he retired from the Tonight Show. I was tasked personally with creating an Augmented
                        Reality (AR) experience that made use of a few photos of Letterman and one of his awards. I created AR targets
                        from the provided images and worked with a team of designers to create a multimedia experience related to each
                        photo.</p>
                        <div className={"line"}></div>
                    </div>
                    <div className={"single_project"}>
                        <h3>State Authorization Map</h3>
                        <img className={"project_image"} src={stateAuth}/>
                        <p>This project for the office of State Authorizations for Ball State. They had a site that contained a map that
                        was meant to show prospective online students from other states what programs Ball State was approved to give
                        degrees in for other states. The site they had was confusing and difficult to use and navigate for students, so
                        the project team I was on was tasked with revamping their site to be more user-friendly and more clearly convey
                        the information they wanted students to know</p>
                        <div className={"line"}></div>
                    </div>
                </div>
            </section>
        )};
};

export default Projects;