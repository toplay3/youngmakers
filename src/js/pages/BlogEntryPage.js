import React from "react";

class BlogEntryPage extends React.Component {
    componentDidMount() {
      document.title = "YoungMakers Blog Entry";
    }
    render() {
      return (
        <div><br/>Blog entry page: {this.props.match.params.blogEntryId}<br/></div>
      );
    }
  }
  
export default BlogEntryPage;