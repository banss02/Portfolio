import styled, { keyframes } from "styled-components";

const gridMove = keyframes`
  0%   { background-position: 0 0, 0 0, top right, bottom left, center; }
  100% { background-position: 40px 40px, 40px 40px, top right, bottom left, center; }
`;

export const Container = styled.main`
  position: relative;
  z-index: 0;
  overflow-x: hidden;
  padding: 0 10rem;

  background:
    linear-gradient(rgba(59, 130, 246, 0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(59, 130, 246, 0.06) 1px, transparent 1px),
    radial-gradient(ellipse at 80% 10%, rgba(59, 130, 246, 0.18) 0%, transparent 50%),
    radial-gradient(ellipse at 20% 90%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
    radial-gradient(ellipse at 50% 50%, rgba(0, 255, 136, 0.04) 0%, transparent 60%),
    linear-gradient(180deg, #020617 0%, #0a0f1e 50%, #020617 100%);

  background-size:
    50px 50px,
    50px 50px,
    auto, auto, auto, auto;

  animation: ${gridMove} 8s linear infinite;

  #tsparticles {
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    pointer-events: none;
  }

  @media (max-width: 740px) {
    padding: 0 3rem;
  }

  @media (max-width: 360px) {
    padding: 0 1.6rem;
  }
`;
