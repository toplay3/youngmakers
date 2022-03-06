import React from "react";
import "../../../css/home/title-container.scss";
import subjects from "../../../data/courses";
import scrollToSection from "../../helpers/scrollToSection";

class TitleContainer extends React.Component {
  render() {
    return (
      <div class="title-container">
        <h1>Young Makers Academy</h1>
        <h4>Online art and technology classes for aged 9 - 17</h4>
        <p>
          {subjects.map((subject, i) => {
            return (
              <span onClick={() => scrollToSection(subject.ref.current)}>
                {subject.shortname}
              </span>
            )
          })}
        </p>
        <table>
          <tr>
            {subjects.slice(0,3).map((subject, i) => {
              return (
                <td onClick={() => scrollToSection(subject.ref.current)}>
                  {subject.shortname}
                </td>
              )
            })}
          </tr>
          <tr>
            {subjects.slice(3).map((subject, i) => {
              return (
                <td onClick={() => scrollToSection(subject.ref.current)}>
                  {subject.shortname}
                </td>
              )
            })}
          </tr>
        </table>
      </div>
    );
  }
}

export default TitleContainer;
