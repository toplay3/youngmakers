import React from "react";
import "../../css/instructors-container.scss";
import instructors from "../../data/instructors";

class InstructorsContainer extends React.Component {
  render() {
    return (
      <div class="instructors-container">
        <h2>Current Instructors</h2>
        <div class="instructor-list">
          {instructors.map((instructor, i) => {
            return (
              <div class="instructor-container">
                <div class="top-container">
                  <div class="photo-container">
                    <img src={instructor.photo} />
                  </div>
                  <div class="info-container">
                    <h5>{instructor.name}</h5>
                    <div class="info-row">
                      <span class="fa fa-id-badge"></span>
                      <span>{instructor.specialty}</span>
                    </div>
                    <div class="info-row">
                      <span class="fa fa-phone"></span>
                      <span>{instructor.phone}</span>
                    </div>
                    <div class="info-row">
                      <span class="fa fa-envelope"></span>
                      <span>{instructor.email}</span>
                    </div>
                    <div class="social-media">
                      {instructor.socialMedia.map((sm, i) => {
                        return (
                          <a href={sm.link}>
                            <span class={sm.icon}></span>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div class="bottom-container">
                  <div class="instructor-description">
                    {instructor.description}
                  </div>
                  <div class="instructor-classes">
                    <h5>Classes</h5>
                    <div class="classes-list">
                      {instructor.classes.map((cl, i) => {
                        return (
                          <div>
                            <span class="far fa-hand-point-right"></span>
                            <span>{cl}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default InstructorsContainer;
