const POPUP_ACITON_TYPE = {
  TOGGLE_SIDE_BAR: "TOGGLE_SIDE_BAR",
  TOGGLE_MODAL: "TOGGLE_MODAL",
};

const INITIAL_POPUP_STATE = {
  isSidebarOpen: false,
  isModalOpen: false,
};

const popupReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case POPUP_ACITON_TYPE.TOGGLE_SIDE_BAR:
      return { ...state, isSidebarOpen: payload };
    case POPUP_ACITON_TYPE.TOGGLE_MODAL:
      return { ...state, isModalOpen: payload };
    default:
      throw new Error(`Unhandled type of ${type} in popupReducer`);
  }
};

export { POPUP_ACITON_TYPE, INITIAL_POPUP_STATE, popupReducer };
