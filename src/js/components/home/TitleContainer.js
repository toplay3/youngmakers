import React from "react";
import "../../../css/home/title-container.scss";

class TitleContainer extends React.Component {
  render() {
    return (
      <div class="title-container">
        <h1>Young Makers Academy</h1>
        <h4>After school art and technology classes for aged 9 - 17</h4>
        <p>
          <span>Programming</span>
          <span>Electronics</span>
          <span>Maths</span>
          <span>Art</span>
          <span>Crafts</span>
          <span>Videography</span>
        </p>
        <table>
          <tr>
            <td>Programming</td>
            <td>Electronics</td>
            <td>Maths</td>
          </tr>
          <tr>
            <td>Art</td>
            <td>Crafts</td>
            <td>Videography</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default TitleContainer;
