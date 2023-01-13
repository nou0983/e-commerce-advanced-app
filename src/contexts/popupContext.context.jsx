import { createContext, useContext, useReducer } from "react";
import {
  POPUP_ACITON_TYPE,
  INITIAL_POPUP_STATE,
  popupReducer,
} from "../reducers/popupReducer.reducer";
import { createAction } from "../utils/createAtion.utils";

const PopupContext = createContext();

const PopupContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(popupReducer, INITIAL_POPUP_STATE);
  const { isSidebarOpen, isModalOpen } = state;

  const toggleSidebar = () => {
    dispatch(createAction(POPUP_ACITON_TYPE.TOGGLE_SIDE_BAR, !isSidebarOpen));
  };

  const toggleModal = () => {
    dispatch(createAction(POPUP_ACITON_TYPE.TOGGLE_MODAL, !isModalOpen));
  };

  const value = {
    ...state,
    toggleSidebar,
    toggleModal,
  };

  return (
    <PopupContext.Provider value={value}>{children}</PopupContext.Provider>
  );
};

const usePopupContext = () => {
  return useContext(PopupContext);
};

export { PopupContextProvider, usePopupContext };
