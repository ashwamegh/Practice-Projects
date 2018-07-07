// ===================  Imports ======================= //
import React, { Component } from 'react';
import { Text } from 'react-native';

import Card from './Card';


const AlbumDetail = (props) => {
  const { album } = props;

  return (
    <Card>
      <Text>{album.title}</Text>
    </Card>
  );
};


export default AlbumDetail;
