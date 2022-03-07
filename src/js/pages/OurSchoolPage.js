import React from "react";
import "../../css/our-school.scss";
import { Link } from 'react-router-dom';

class OurSchoolPage extends React.Component {
    componentDidMount() {
      document.title = "YoungMakers Our School";
    }
    render() {
      return (
        <div class="our-school-page">
          <h1>Teaching Philosophy</h1>
          <div>
            <p>
              YoungMakers was created with the mission of leading the children of today into creators of tomorrow. 
              The founders of YoungMakers are all experienced professionals in fields of engineering, 
              arts and business. We designed YoungMakers from what we found to be missing in the current school
              curriculum and modelled the courses after what we wish we could have learned at a younger age.
            </p>
            <p>
              Let’s look at what YoungMakers can teach your child <br/>
              which may be <b>missing in traditional schooling</b>:
            </p>
            <ul>
              <li>Real concrete in demand skills</li>
              <li>The ability to tackle grueling problems on their own without any help</li>
              <li>Creative thinking and questioning assumptions</li>
              <li>Teamwork and leadership</li>
              <li>Spark interest in further self learning</li>
              <li>Confidence in trying difficult things outside of their comfort zone</li>
            </ul>
            <p>
              Our philosophy of teaching in a nutshell is to give students the tools to express their creativity 
              and practice their problem solving. The tools and methodologies are learnt through practical projects 
              so the students will never ask the question “why are we even learning this?”, these skills can be carried 
              over into the real world in their future careers to give them an advantage over their peers.
            </p>
            <p>
              Our class sizes are small and therefore we can pay attention to every child and their needs, our instructors
              have world class industry experience to teach these important skills and our teaching philosophy allows us
              to continually re-evaluate our methodologies and modify our curriculum to improve and stay relevant.
            </p>
            <p>
              The job market of the future will be vastly different to the job market today, it will become much more competitive.
              Careers which require rote learning and application of knowledge will be completely flipped upside down by 
              AI and automation. Even in much of the stable career paths it will no longer be sufficient to get good grades and
              pass a test by learning to follow a set of instructions, your child must be able to think outside the box to stay competitive.
            </p>
            <br/>
            <h3>Is my child too young?</h3>
            <br/>
            <p>
              A common misconception is that children can leave creative problem solving until their minds have matured.
              Creativity and problem solving is best taught young. During puberty, neurological pathways will solidify and influence the way one think and act in adulthood.
              There is a common phenomenon where a child who learns programming, logic and art from a young age can reach 
              a level in adulthood that someone with the same innate ability who started later never could. It is very important that
              young children while their brains are still developing get sufficient exposure to creative
              thinking and problem solving to develop these crucial neurological pathways.
            </p>
            <p>
              If you have any questions about the YoungMakers program, our school or teaching philosophies and how we can help 
              your child gain an advantage in their future careers, feel free to &nbsp;
              <Link className="list-item" to="/contact">
                contact us
              </Link>.
            </p>
          </div>
        </div>
      );
    }
  }
  
export default OurSchoolPage;