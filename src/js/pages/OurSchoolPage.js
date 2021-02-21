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
              arts and business who have obtained their education through various means, 
              some through schooling and some that are completely self taught. We designed YoungMakers from what 
              we found to be missing in the current school curriculum and modelled the courses after what we wish 
              we could have learned at a younger age.
            </p>
            <p>
              Our philosophy of teaching in a nutshell is to give students the tools to express their creativity 
              and practice their problem solving. The tools and methodologies are learnt through practical projects 
              so our students will never ask the question “why are we even learning this?”, these skills can be carried 
              over into the real world in their future careers to give them an advantage over their peers.
            </p>
            <p>
              Traditional schools from kindergarten all the way up to University are not equipped with the right 
              tools in teaching technology and innovative thinking in Children. They are based on a factory mass 
              production model where every child is put through the same assembly line to achieve passing the same 
              fixed criterion(an exam or assignment). As much as modern schools try to disguise it, their system 
              favors rote learning and following instructions over exploratory creative problem solving. 
            </p>
            <p>
              But why has the school system evolved this way? The western school system is a relic of European 
              military training, first implemented in 16th century Prussia. It was created to discipline soldiers 
              to stand in line and follow orders without questioning authority. This system eventually became the 
              basis of educating children during the industrial revolution where families from the rural countryside 
              migrated en masse into cities to find factory work. The schools were able to babysit children so their 
              parents could focus on working and they in turn educated children to become good workers in such factories 
              upon graduation. Subsequent evolution to the school system such as changes in the curriculum and examinations 
              are attempts to adapt this system to the modern workplace under the same philosophy.
            </p>
            <p>
              Ofcourse, schools cannot market themselves as training centers for cannon fodder or babysitting facilities, 
              but the bleak reality is that the system has not changed much from its outdated roots and is missing several 
              critical components in today’s fast paced ever changing society.
            </p>
            <p>
              First let us look at what traditional schools can teach your children:
            </p>
            <ul>
              <li>Basic arithmetic and literacy skills</li>
              <li>A broad knowledge of the world</li>
              <li>Discipline through hard work (whether this is achieved is questionable)</li>
              <li>Social skills (again questionable)</li>
            </ul>
            <p>
              Let’s look at what it’s missing that YoungMakers can provide your child:
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
              We believe that our program is a great compliment to the traditional school system in preparing your 
              child for the future. We can achieve these because class sizes are small and therefore we can pay attention 
              to every child and their needs, because our instructors have industry experience to teach these important 
              skills and because our teaching philosophy allows us to constantly re-evaluate our methodologies and modify 
              our curriculum to improve and stay relevant.
            </p>
            <p>
              The job market of the future will be vastly different to the job market today and we believe it will become 
              much more competitive as every child will be studying to become professionals. Careers which require rote 
              learning and application of knowledge will be completely flipped upside down by Artificial Intelligence and 
              increased Automation. Much of the stable career paths such as Law, Accounting, Finance, Science, Engineering 
              and Medicine will be heavily automated and therefore require less manpower. This also means that the role of 
              people in these jobs will change from simply following instructions to finding creative solutions to problems, 
              something that cannot be solved by automation. It will no longer be sufficient to get good grades and pass a 
              test by learning to follow a set of instructions, your child needs to be able to think outside the box to stay competitive.
            </p>
            <p>
              The most important skill is to teach your children to think for themselves and give them the ability to 
              research and solve problems on their own when there is nobody to guide them. Our school was created for this purpose.
            </p>
            <p>
              A common misconception is that children can leave creative problem solving until their minds have matured, 
              from our observations this is a big mistake. Creativity and problem solving must be taught young. Neuroplasticity 
              decreases with age, something fundamentally changes in a child’s mind through puberty, it solidifies the neurological 
              pathways that shape the way he/she will think and act in adulthood. A child who plays chess from a young age can reach 
              a level in adulthood that someone with the same innate ability who started later never could, it’s not a matter of the 
              amount of practice, rather the child who started playing chess early had his brain pathways altered through puberty. 
              The same phenomenon can be observed with music, art and even coordination dependent sports. It is very important that 
              young children while their brains are still developing get sufficient exposure to creative thinking and problem solving 
              to develop these crucial neurological pathways.
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