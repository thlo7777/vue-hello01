// Getter to retrieve state data
export const getResources = (state) => {
  return state.resources
}

export const getmywidth = (state) => (index) => {
    return state.resources[index].nw
}