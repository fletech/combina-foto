import React from "react";
//Font awesome
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";
//Style
import { SectionStyled, DescriptionStyled, ImageStyled } from "../style";
import styled from "styled-components";
//Custom hooks
import { useScroll } from "../hooks/useScroll";
//Animation
import { fadeSection } from "../animation";

import home2 from "../img/combina-home1.png";

const ServicesSection = () => {
  const [elements, controls] = useScroll();
  return (
    <ServicesStyled
      ref={elements}
      variants={fadeSection}
      initial="hidden"
      animate={controls}
    >
      <DescriptionStyled>
        <h2>
          High <span>quality</span> services
        </h2>
        <CardsStyled>
          <CardStyled>
            <div className="icon">
              <Icon icon={faCameraRetro} />
              <h3>Efficient</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
              ad.
            </p>
          </CardStyled>
          <CardStyled>
            <div className="icon">
              <Icon icon={faCameraRetro} />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </CardStyled>
          <CardStyled>
            <div className="icon">
              <Icon icon={faCameraRetro} />
              <h3>Diaphragm</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              accusantium esse et odit, vitae ducimus.
            </p>
          </CardStyled>
          <CardStyled>
            <div className="icon">
              <Icon icon={faCameraRetro} />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </CardStyled>
        </CardsStyled>
      </DescriptionStyled>
      <ImageStyled>
        <img alt="camera" src={home2} />
      </ImageStyled>
    </ServicesStyled>
  );
};

const ServicesStyled = styled(SectionStyled)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;
const CardsStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const CardStyled = styled.div`
  flex-basis: 15rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      font-size: 1rem;
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
  p {
    font-size: 1rem !important;
    line-height: 1.8rem;
  }
`;

export default ServicesSection;
