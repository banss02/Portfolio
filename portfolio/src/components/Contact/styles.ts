import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;

  .section-sub {
    font-size: 1.6rem;
    color: var(--text-secondary);
    margin-top: 0.8rem;
  }

  .contacts {
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
    margin-bottom: 4rem;
  }

  @media (max-width: 640px) {
    .contacts { flex-direction: column; align-items: center; }
  }
`;

export const SectionTitle = styled.h2`
  font-size: clamp(3rem, 5vw, 4rem);
  font-weight: 800;
  display: inline-block;
  background: linear-gradient(135deg, var(--text-primary), var(--blue));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const ContactCard = styled.a`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  padding: 1.8rem 2.8rem;
  border-radius: 1.4rem;
  background: rgba(15, 23, 42, 0.7);
  border: 1px solid rgba(59, 130, 246, 0.15);
  backdrop-filter: blur(12px);
  min-width: 28rem;
  text-decoration: none;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    border-color: rgba(59, 130, 246, 0.4);
    box-shadow: 0 0 30px rgba(59, 130, 246, 0.15);
  }

  .icon-wrap {
    width: 4.8rem;
    height: 4.8rem;
    border-radius: 1rem;
    background: rgba(59, 130, 246, 0.1);
    border: 1px solid rgba(59, 130, 246, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    img { width: 2.2rem; }
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }

  .contact-label {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--blue);
    text-transform: uppercase;
    letter-spacing: 0.08rem;
  }

  .contact-text {
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--text-primary);
  }
`;
