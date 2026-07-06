import styled, { keyframes } from "styled-components";

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-12px); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50%       { opacity: 0.8; transform: scale(1.05); }
`;

export const Container = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  padding-top: 10rem;
  overflow: hidden;

  .hero-content {
    max-width: 72rem;
    position: relative;
    z-index: 2;
  }

  .greeting {
    font-size: 1.8rem;
    color: var(--text-secondary);
    margin-bottom: 1.2rem;
    letter-spacing: 0.05rem;
  }

  h1 {
    font-size: clamp(4.8rem, 8vw, 8rem);
    font-weight: 800;
    line-height: 1.05;
    margin-bottom: 1.2rem;
    letter-spacing: -0.02em;
  }

  .role {
    font-size: clamp(2rem, 3.5vw, 2.8rem);
    font-weight: 500;
    color: var(--text-secondary);
    margin-bottom: 2rem;

    .accent {
      color: var(--green);
      font-weight: 600;
    }
  }

  .tagline {
    font-size: 1.7rem;
    color: var(--text-secondary);
    line-height: 1.7;
    max-width: 56rem;
    margin-bottom: 2.8rem;
  }

  .cta-row {
    display: flex;
    gap: 1.4rem;
    flex-wrap: wrap;
    margin-bottom: 3.2rem;
    align-items: center;

    a { display: inline-block; }
  }

  .social-row {
    display: flex;
    gap: 1.2rem;
    align-items: center;
  }

  /* Decorative orbs */
  .orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    pointer-events: none;
    z-index: 0;
    animation: ${pulse} 6s ease-in-out infinite;
  }
  .orb-1 {
    width: 45rem;
    height: 45rem;
    background: radial-gradient(circle, rgba(59,130,246,0.18), transparent 70%);
    top: -10rem;
    right: -10rem;
    animation-delay: 0s;
  }
  .orb-2 {
    width: 35rem;
    height: 35rem;
    background: radial-gradient(circle, rgba(139,92,246,0.15), transparent 70%);
    bottom: 5rem;
    right: 20rem;
    animation-delay: 3s;
  }

  @media (max-width: 960px) {
    padding-top: 12rem;
    min-height: auto;
    padding-bottom: 6rem;
    .orb-1, .orb-2 { display: none; }
  }

  @media (max-width: 600px) {
    padding-top: 10rem;
    h1 { font-size: 4.2rem; }
  }
`;

export const GradientText = styled.span`
  background: linear-gradient(135deg, #fff 0%, var(--blue) 50%, var(--purple) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const CTAButton = styled.button`
  padding: 1.2rem 3rem;
  font-size: 1.6rem;
  font-weight: 600;
  border-radius: 0.8rem;
  background: linear-gradient(135deg, var(--blue), var(--purple));
  color: #fff;
  border: none;
  cursor: pointer;
  box-shadow: 0 0 30px rgba(59, 130, 246, 0.35);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 0 45px rgba(59, 130, 246, 0.55);
  }
`;

export const OutlineButton = styled.button`
  padding: 1.2rem 3rem;
  font-size: 1.6rem;
  font-weight: 600;
  border-radius: 0.8rem;
  background: transparent;
  color: var(--text-primary);
  border: 1px solid rgba(59, 130, 246, 0.4);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--blue);
    background: rgba(59, 130, 246, 0.08);
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.2);
  }
`;

export const BadgesRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-bottom: 2.8rem;
`;

export const Badge = styled.span`
  display: inline-block;
  padding: 0.4rem 1.2rem;
  font-size: 1.2rem;
  font-weight: 500;
  border-radius: 10rem;
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.25);
  color: var(--blue);
  letter-spacing: 0.03rem;
  animation: ${float} 4s ease-in-out infinite;

  &:nth-child(2n)   { animation-delay: 0.5s; color: var(--purple); background: rgba(139,92,246,0.1); border-color: rgba(139,92,246,0.25); }
  &:nth-child(3n)   { animation-delay: 1s;   color: var(--green);  background: rgba(0,255,136,0.08); border-color: rgba(0,255,136,0.25); }
  &:nth-child(4n)   { animation-delay: 1.5s; }
  &:nth-child(5n)   { animation-delay: 2s;   color: var(--purple); background: rgba(139,92,246,0.1); border-color: rgba(139,92,246,0.25); }
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4.4rem;
  height: 4.4rem;
  border-radius: 0.8rem;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  transition: all 0.3s ease;

  img { width: 2rem; filter: brightness(0.8); transition: filter 0.3s; }

  &:hover {
    background: rgba(59, 130, 246, 0.12);
    border-color: rgba(59, 130, 246, 0.4);
    box-shadow: 0 0 16px rgba(59, 130, 246, 0.25);
    img { filter: brightness(1.2); }
  }
`;
