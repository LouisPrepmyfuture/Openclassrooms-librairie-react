import React, { createContext } from "react";
import useModal from "./useModal.js";
import PropTypes from 'prop-types';

let ModalContext;
let { Provider } = (ModalContext = createContext());

/**
 * Creates a ModalProvider component.
 *
 * @param {Object} children - The child components.
 * @return {JSX.Element} The rendered ModalProvider component.
 */

const ModalProvider = ({ children }) => {
  let { modal, handleModal, contentModal, title, styleModal } = useModal();
  return (
    <Provider value={{ modal, handleModal, contentModal, title, styleModal}}>
      <div id="modal"></div>
      {children}
    </Provider>
  );
};

export { ModalContext, ModalProvider };

ModalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};