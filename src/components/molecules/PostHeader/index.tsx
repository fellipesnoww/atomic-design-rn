import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';

import {
  ProfileIcon
} from '../../../global/styles/icons';

import { PostAvatar } from '../../atoms/PostAvatar';
import { PostUsername } from '../../atoms/PostUsername';
import { PostLocation } from '../../atoms/PostLocation';

type Props = {
  username: string;
  location: string;
}

export function PostHeader({username, location}: Props) {
  return (
    <View style={styles.postHeader}>
    <PostAvatar source={ProfileIcon}/>
    <View>
      <PostUsername value={username}/>
      <PostLocation value={location}/>
    </View>
  </View>
  );
}