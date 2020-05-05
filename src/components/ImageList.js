import React from 'react';

const ImageList = (props) => {
  // const images = props.images.map((image) => {
  //   return <img alt={image.description} key={image.id} src={image.urls.regular} />
  // }); or re-write it below by destrcuturing the image.id, description, urs.regular 

  const images = props.images.map(({description, id, urls}) => {
    return <img alt={description} key={id} src={urls.regular} />
  }); //if you don't understad this code look at commented code above 

  return <div>{ images }</div>
};

export default ImageList;