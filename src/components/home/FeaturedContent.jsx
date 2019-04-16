import React, { PureComponent } from 'react';
import { HomePageSegment } from './HomePageSegment';
import SpotifyPlayer from 'react-spotify-player';
import { List, Button } from 'semantic-ui-react';

export default class FeaturedContent extends PureComponent {
  constructor() {
    super();
    this.state = {
      featuredContent: '',
    }
    this.handleSelectFeaturedContent = this.handleSelectFeaturedContent.bind(this);
    this.handleClearFeaturedContent = this.handleClearFeaturedContent.bind(this);
  }

  handleSelectFeaturedContent(featuredContent) {
    this.setState({
      featuredContent,
    });
  }

  handleClearFeaturedContent() {
    this.setState({
      featuredContent: '',
    });
  }

  renderFeaturedPodcast() {
    return (
      <div>
        <SpotifyPlayer
          uri="spotify:show:4Cq6Pdo2q2XG1fUfG7OI3s"
          size={{
            width: '100%',
            height: 700,
          }}
          view="list"
          theme="white"
        />
        {this.renderBackButton()}
      </div>
    );
  }

  renderFeaturedAlbum() {
    return (
      <div>
        <SpotifyPlayer
          uri="spotify:album:6XzoFb3hP14jVQeCMRdVJR"
          size={{
            width: '100%',
            height: 700,
          }}
          view="list"
        />
        {this.renderBackButton()()}
      </div>
    );
  }

  renderFeaturedSong() {
    // todo: update to sicko mode
    return (
      <div>
        <SpotifyPlayer
          uri="spotify:track:4Na0siMtWOW9pJoWJ1Ponv"
          size={{
            width: '100%',
            height: 700,
          }}
          view="list"
          theme="white"
        />
        {this.renderBackButton()}
      </div>
    );
  }

  renderSelectFeaturedContent() {
    return (
      <List>
        <List.Item>
          <Button primary onClick={() => this.handleSelectFeaturedContent('podcast')}>
            Featured Podcast
          </Button>
        </List.Item>
        <List.Item>
          <Button primary onClick={() => this.handleSelectFeaturedContent('album')}>
            Featured Album
          </Button>
        </List.Item>
        <List.Item>
          <Button primary onClick={() => this.handleSelectFeaturedContent('song')}>
            Featured Song
          </Button>
        </List.Item>
      </List>
    )
  }

  renderBackButton() {
    return (
      <Button primary onClick={() => this.clearFeaturedContent()}>
        Back
      </Button>
    );
  }

  renderFeaturedContent() {
    switch(this.state.featuredContent) {
      case 'podcast':
        return this.renderFeaturedPodcast();
      case 'album':
        return this.renderFeaturedAlbum();
      case 'song':
        return this.renderFeaturedSong();
      default:
        return this.renderSelectFeaturedContent();
    }
  }

  render() {
    return (
      <HomePageSegment
        title="Featured Content"
      >
        {this.renderFeaturedContent()}
      </HomePageSegment>
    );
  }
}
