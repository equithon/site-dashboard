import React from "react";
import styled from "styled-components";
import onClickOutside from "react-onclickoutside";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { mediaSize } from "../../../utils/siteTools";

const Container = styled.div`
  position: relative;
  margin: auto;
  border-radius: ${props => props.theme.app.border.radius};
  color: white;
`;

const CloseButton = styled.button`
  position: absolute;
  top: -1vw;
  right: -1vw;
  width: 2vw;
  height: 2vw;
  border: none;
  border-radius: 50%;

  cursor: pointer;

  transition: transform 150ms ease-in-out;
  transform: scale(1.01);
  &:hover {
    transform: scale(1.2);
  }

  ${mediaSize.tablet`
    top: -1.5vw;
    right: -1.5vw;
    width: 4vw;
    height: 4vw;
  `};

  ${mediaSize.phone`
    top: -2vw;
    right: -2vw;
    width: 6vw;
    height: 6vw;
  `};
`;

const Modal = ({
  className,
  backgroundColor,
  onCloseClickHandler,
  children
}) => (
  <Container className={className} backgroundColor={backgroundColor}>
    <CloseButton onClick={() => onCloseClickHandler()}>
      <FontAwesomeIcon icon="times" size="1x" color="grey" />
    </CloseButton>
    {children}
  </Container>
);

const enhance = compose(
  onClickOutside,
  withRouter
);

export default enhance(Modal);
