import React from "react";
import styled from "styled-components";

const Frame = () => {
  return (
    <Frame_>
      <div className="top"></div>
      <div className="right"></div>
      <div className="bottom"></div>
      <div className="left"></div>
    </Frame_>
  );
};

const Frame_ = styled.div`
  height: 100vh;
  width: 99vw;
  position: fixed;
  background: transparent;
  border: solid 7px #23d997;
  top: 0;
  left: 0;
  z-index: 900;
  /* .top,
  .bottom {
    position: fixed;
    height: 7px;
    background-color: #b3dc10;
    z-index: 900;
  }
  .right,
  .left {
    position: fixed;
    width: 7px;
    background-color: #fff;
    z-index: 900;
  }
  .top {
    top: 0;
    left: 0;
  }
  .bottom {
    bottom: 0;
  }
  .left {
    left: 0;
  }
  .rigth {
    right: 0;
  } */
`;
export default Frame;
