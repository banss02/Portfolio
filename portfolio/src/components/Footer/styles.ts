import styled, { keyframes } from "styled-components";

const spin = keyframes`
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
`;

export const Container = styled.footer`
  margin-top: 10rem;
  padding: 3rem 10rem;
  background: rgba(15, 23, 42, 0.6);
  border-top: 1px solid rgba(59, 130, 246, 0.1);
  backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;

  .logo {
    font-size: 2rem;
    font-weight: 700;
    background: linear-gradient(135deg, var(--blue), var(--purple));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .made-with {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    font-size: 1.4rem;
    color: var(--text-secondary);

    img {
      width: 2rem;
      animation: ${spin} 6s linear infinite;
    }
  }

  .social-media {
    display: flex;
    align-items: center;
    gap: 1rem;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 3.8rem;
      height: 3.8rem;
      border-radius: 0.8rem;
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.08);
      transition: all 0.3s ease;

      img { width: 1.8rem; filter: brightness(0.7); transition: filter 0.3s; }

      &:hover {
        background: rgba(59, 130, 246, 0.12);
        border-color: rgba(59, 130, 246, 0.4);
        box-shadow: 0 0 14px rgba(59, 130, 246, 0.25);
        img { filter: brightness(1.2); }
        transform: translateY(-2px);
      }
    }
  }

  @media (max-width: 800px) {
    padding: 3rem 4rem;
    flex-direction: column;
    text-align: center;
  }

  @media (max-width: 480px) {
    padding: 3rem 2rem;
  }
`;
