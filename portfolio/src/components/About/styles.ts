import styled, { keyframes } from "styled-components";

const floatSlow = keyframes`
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-8px); }
`;

export const Container = styled.section`
  margin-top: 10rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  align-items: start;

  .about-text {
    p {
      font-size: 1.7rem;
      color: var(--text-secondary);
      line-height: 1.8;
      letter-spacing: 0.02rem;
    }
  }

  .skills-heading {
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.12rem;
    margin-top: 2.8rem;
    margin-bottom: 1.6rem;
  }

  .hard-skills {
    display: flex;
    flex-wrap: wrap;
    gap: 1.6rem;
  }

  .hability {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.6rem;

    span {
      font-size: 1.1rem;
      color: var(--text-secondary);
      font-weight: 500;
    }
  }

  .about-image {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 2rem;

    .image-wrapper {
      position: relative;
      display: inline-block;
    }

    img {
      width: 100%;
      max-width: 38rem;
      border-radius: 2rem;
      border: 1px solid rgba(59, 130, 246, 0.2);
      position: relative;
      z-index: 1;
    }

    .image-glow {
      position: absolute;
      inset: -2px;
      border-radius: 2rem;
      background: linear-gradient(135deg, rgba(59,130,246,0.3), rgba(139,92,246,0.3));
      filter: blur(20px);
      z-index: 0;
      opacity: 0.6;
    }
  }

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    gap: 4rem;
    text-align: center;

    .hard-skills { justify-content: center; }

    .about-image {
      img { max-width: 28rem; }
    }
  }
`;

export const SectionTitle = styled.h2`
  font-size: clamp(3rem, 5vw, 4rem);
  font-weight: 800;
  margin-bottom: 2rem;
  background: linear-gradient(135deg, var(--text-primary), var(--blue));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: inline-block;
`;

export const SkillIcon = styled.div`
  width: 5.6rem;
  height: 5.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1.2rem;
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid rgba(59, 130, 246, 0.15);
  cursor: pointer;
  transition: all 0.3s ease;
  animation: ${floatSlow} 4s ease-in-out infinite;

  img { width: 2.8rem; }

  &:hover {
    border-color: var(--blue);
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.35);
    background: rgba(59, 130, 246, 0.08);
  }

  &:nth-child(2n) { animation-delay: 0.5s; }
  &:nth-child(3n) { animation-delay: 1s; }
  &:nth-child(4n) { animation-delay: 1.5s; }
`;

export const InfoCard = styled.div`
  margin-top: 2rem;
  padding: 1.8rem 2rem;
  border-radius: 1.2rem;
  background: rgba(15, 23, 42, 0.6);
  border: 1px solid rgba(59, 130, 246, 0.12);
  backdrop-filter: blur(10px);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    border-color: rgba(59, 130, 246, 0.3);
    box-shadow: 0 0 24px rgba(59, 130, 246, 0.1);
  }

  h3 {
    font-size: 1.4rem;
    font-weight: 700;
    color: var(--blue);
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    margin-bottom: 0.6rem;
  }

  h4 {
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 0.4rem;
  }

  p {
    font-size: 1.4rem !important;
    color: var(--text-secondary) !important;
    line-height: 1.6 !important;
  }

  .highlight {
    color: var(--green) !important;
    font-weight: 600 !important;
    margin-top: 0.4rem;
  }
`;
