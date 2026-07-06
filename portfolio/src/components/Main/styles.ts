import styled from "styled-components";

export const Container = styled.main`
  position: relative;
  z-index: 0;
  overflow-x: hidden;
  padding: 0 10rem;

  background:
  linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px),
  linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px),
  radial-gradient(circle at top right, rgba(0,255,136,.12), transparent 35%),
  radial-gradient(circle at bottom left, rgba(59,130,246,.10), transparent 35%),
  linear-gradient(180deg, #0f172a 0%, #020617 60%, #000000 100%);

background-size:
  40px 40px,
  40px 40px,
  auto,
  auto,
  auto;

  #tsparticles {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  @media (max-width: 740px) {
    padding: 0 4rem;
  }

  @media (max-width: 360px) {
    padding: 0 2rem;
  }
`;