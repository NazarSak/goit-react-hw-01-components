import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Name, Img } from './FriendList.styled';
import css from "./FriendList.module.css"


export const FriendsRender = ({ avatar, name, isOnline }) => {
  return (
    <>
      <span className={clsx(css.status,!isOnline && css.isOutlined)}></span>
      <Img src={avatar} alt="User avatar" width="60" />
      <Name>{name}</Name>
    </>
  );
};

FriendsRender.propTypes = {
  avatar : PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool
}