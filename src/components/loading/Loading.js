import React from 'react';

import { LoadBody, LoadImg, LoadTitle } from './Loading.style'

const Loading = () => {
  return (
    <LoadBody>
      <LoadImg src="../img/logo.png" alt="logo" />
      <LoadTitle>Choosing pokemon</LoadTitle>
    </LoadBody>
  )
}

export default Loading;