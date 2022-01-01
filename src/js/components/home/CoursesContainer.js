import React from "react";
import "../../../css/home/courses-container.scss";
import subjects from "../../../data/courses";
import { Link } from 'react-router-dom';

class CoursesContainer extends React.Component {
  render() {
    return (
      <div class="courses-container">
        {subjects.map((subject, i) => {
          return (
            <div class="course" ref={subject.ref}>
              <div class="course-info">
                <h2>{subject.title}</h2>
                <div class="course-description">{subject.description}</div>
                <div class="course-details-container">
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
                  <div class="button-action-container">
                  <Link class="button more-info" to={"/course/" + subject.slug}>
                  More Info
                  </Link>
                  <Link class="button book-now" to={"/course/" + subject.slug + "/book"}>
                  Book Now
                  </Link>
                  </div>
                </div>
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
