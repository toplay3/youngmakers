import React from "react";
import "../../css/courses-container.scss";
import subjects from "../../data/courses";

class CoursesContainer extends React.Component {
  render() {
    return (
      <div class="courses-container">
        {subjects.map((subject, i) => {
          return (
            <div class="course">
              <div class="course-info">
                <h2>{subject.title}</h2>
                <div class="course-description">{subject.description}</div>
                <table class="course-details">
                  <tr>
                    <td>
                      <b>Ages:</b>
                    </td>
                    <td>{subject.ages}</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Class:</b>
                    </td>
                    <td>{subject.size} kids</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Price:</b>
                    </td>
                    <td>{subject.price}</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Duration:</b>
                    </td>
                    <td>{subject.duration}</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Materials:</b>
                    </td>
                    <td>{subject.materials}</td>
                  </tr>
                </table>
              </div>
              <div class="course-image">
                <img src={subject.image} />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CoursesContainer;
