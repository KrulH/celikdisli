import React from "react";
import Photo from "../components/Photo";

export default class Article extends React.Component {
  render() {
    const { title } = this.props;

    return (
        <div class="col-md-4">
          <h4>{title}</h4>
          <p>Lorem ipsum dolor sit amet, consectetur.</p>
          <a class="btn btn-default" href="#">More Info</a>

        </div>
    );
  }
}
