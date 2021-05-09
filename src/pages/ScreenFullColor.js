import React from "react";
import styled from "styled-components";

let value;

const selectHandler = (e) => {
  return (value = parseInt(e.target.value));
};

const ScreenFullColor = () => {
  return (
    <FrameStyled>
      <div className="select">
        <p>Amount of colors</p>
        <select name="colorsAmount" id="colorAmount" onChange={selectHandler}>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
    </FrameStyled>
  );
};

const FrameStyled = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 900;
  background-color: #898988;
  display: flex;
  flex: 1;
  animation: color-change-left 0.2s infinite;
  .select {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 30px;
    width: 200px;
    top: 10px;
    left: 10px;
    p {
      color: white;
    }
    select {
      height: 100%;
    }
  }

  ${console.log(selectHandler)}

  @keyframes color-change-left {
    0% {
      background-color: #424242;
    }
    /* 20% {
      background-color: #ed3fe5;
    }
    40% {
      background-color: #daff33;
    } */
    50% {
      background-color: #2185ff;
    }
    /* 80% {
      background-color: #ff7809;
    } */
    100% {
      background-color: #1e0af9;
    }
  }

  @keyframes color-change-middle {
    0% {
      background-color: #42f3b2;
    }
    100% {
      background-color: #f36842;
    }
  }

  @keyframes color-change-right {
    0% {
      background-color: #ff4141;
    }
    100% {
      background-color: #ed23cc;
    }
  }
`;
export default ScreenFullColor;
