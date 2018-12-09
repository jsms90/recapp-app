import React from "react";
import { Route, Link } from "react-router-dom";

import Photo from "./Photo";

class AllPhotosPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: []
    };
  }

  componentDidMount() {
    fetch(`http://jsonplaceholder.typicode.com/photos?_limit=30`)
      .then(res => res.json())
      .then(photos => {
        this.setState({ photos });
      });
  }

  render() {
    let photos;
    if (this.state.photos.length) {
      photos = this.state.photos;
    } else {
      photos = [];
    }

    const { match } = this.props;

    return (
      <div>
        <h1>Colourful colours for everyone</h1>
        {photos.map(photo => (
          <React.Fragment key={photo.id}>
            <Link to={`${match.url}/${photo.id}`}>
              <Photo url={photo.thumbnailUrl} />
            </Link>
          </React.Fragment>
        ))}
      </div>
    );
  }
}

export default AllPhotosPage;
