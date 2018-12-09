import React from "react";
import { Route, Link } from "react-router-dom";

import Photo from './Photo'

class SinglePhotoPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: {}
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id
    fetch(`http://jsonplaceholder.typicode.com/photos/${id}`)
      .then(res => res.json())
      .then(photo => {
        this.setState({ photo });
      });
  }

  render() {
    const { match } = this.props;
    const { photo } = this.state;

    return (
      <Photo url={photo.thumbnailUrl} />
    );
  }
}

export default SinglePhotoPage;
