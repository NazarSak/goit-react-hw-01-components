import PropTypes from 'prop-types';
import {
  Container,
  ListAbout,
  Tag,
  Img,
  Name,
  SpanLetter,
  SpanNumber,
  LiAbout,
} from './Profile.styled';

function Profile({ location, avatar, username, tag, stats }) {
  return (
    <Container>
      <div>
        <Img src={avatar} alt="User avatar" width="80px" />
        <Name>{username}</Name>
        <Tag>{tag}</Tag>
        <Tag>{location}</Tag>
      </div>

      <ListAbout>
        <LiAbout>
          <SpanLetter>Followers</SpanLetter>
          <SpanNumber>{stats.followers}</SpanNumber>
        </LiAbout>
        <LiAbout>
          <SpanLetter>Views</SpanLetter>
          <SpanNumber>{stats.views}</SpanNumber>
        </LiAbout>
        <LiAbout>
          <SpanLetter>Likes</SpanLetter>
          <SpanNumber>{stats.likes}</SpanNumber>
        </LiAbout>
      </ListAbout>
    </Container>
  );
}

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
