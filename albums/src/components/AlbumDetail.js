// ===================  Imports ======================= //
import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = props => {
  const { album } = props;
  const { headerContentStyle, thumbnailStyle, thumbnailContainerStyle, imageStyle, headerTextStyle } = styles;

  return (
    <Card>
      <CardSection>
      <View style={thumbnailContainerStyle}>
        <Image source={{ uri: album.thumbnail_image }} style={thumbnailStyle} />
      </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle} >{album.title}</Text>
          <Text>{album.artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image source={{ uri: album.image }} style={imageStyle} />
      </CardSection>

      <CardSection>
        <Button onPress={() => console.log(album.title)} />
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },

  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
