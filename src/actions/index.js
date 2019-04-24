// implement different action creators

export const selectVideo = (video) => {
  return {
    type: 'SELECT_VIDEO',
    payload: video,
  }
};

export const changeSearchWord = (searchWord) => {
  return {
    type: 'CHANGE_WORD',
    payload: searchWord,
  }
};

export const changeVideoList = (videoList) => {
  return {
    type: 'CHANGE_LIST',
    payload: videoList,
  }
};

export const changeChannelType = (channelType) => {
  return {
    type: 'CHANGE_CHANNEL',
    payload: channelType,
  }
};

export const changeVideoDuration = (duration) => {
  return {
    type: 'CHANGE_DURATION',
    payload: duration,
  }
}

export const changeVideoDefinition = (definition) => {
  return {
    type: 'CHANGE_DEFINITION',
    payload: definition,
  }
}

export const addSearchHistory = (searchWord) => {
  return {
    type: 'ADD_HISTORY',
  }
}