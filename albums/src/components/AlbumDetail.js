// ===================  Imports ======================= //
import React, { Component } from 'react';
import { View, Text } from 'react-native';


const AlbumDetail = (props) => {
  const { album } = props;

  return (
    <View>
      <Text>{album.title}</Text>
    </View>
  );
};


export default AlbumDetail;
