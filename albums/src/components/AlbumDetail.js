// ===================  Imports ======================= //
import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = props => {
  const { album } = props;
  const { headerContentStyle, imageStyle } = styles;

  return (
    <Card>
      <CardSection>
      <View>
        <Image source={{ uri: album.thumbnail_image }} style={imageStyle} />
      </View>
        <View style={headerContentStyle}>
          <Text>{album.title}</Text>
          <Text>{album.artist}</Text>
        </View>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  imageStyle: {
    height: 50,
    width: 50
  }
};

export default AlbumDetail;
