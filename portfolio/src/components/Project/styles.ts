import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;

  .section-sub {
    font-size: 1.6rem;
    color: var(--text-secondary);
    margin-top: 0.8rem;
  }

  .projects {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.4rem;
  }

  @media (max-width: 960px) {
    .projects { grid-template-columns: 1fr 1fr; }
  }

  @media (max-width: 640px) {
    .projects { grid-template-columns: 1fr; }
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

export const ProjectCard = styled.div<{ accentColor?: string }>`
  position: relative;
  padding: 2.4rem;
  border-radius: 1.6rem;
  background: rgba(15, 23, 42, 0.7);
  border: 1px solid rgba(59, 130, 246, 0.12);
  backdrop-filter: blur(12px);
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  cursor: default;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    border-color: ${({ accentColor }) => accentColor ?? "var(--blue)"}66;
    box-shadow: 0 20px 60px ${({ accentColor }) => accentColor ?? "var(--blue)"}22,
                0 0 0 1px ${({ accentColor }) => accentColor ?? "var(--blue)"}22;
  }

  .card-glow {
    position: absolute;
    top: -40%;
    right: -20%;
    width: 20rem;
    height: 20rem;
    border-radius: 50%;
    background: radial-gradient(circle, ${({ accentColor }) => accentColor ?? "var(--blue)"}18, transparent 70%);
    pointer-events: none;
    transition: opacity 0.3s;
    opacity: 0;
  }

  &:hover .card-glow { opacity: 1; }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;

    .project-links {
      display: flex;
      gap: 0.8rem;

      a img {
        width: 2.4rem;
        filter: brightness(0.7);
        transition: filter 0.25s, transform 0.25s;
      }
      a:hover img {
        filter: brightness(1.2);
      }
    }
  }

  .body {
    flex: 1;

    h3 {
      font-size: 1.8rem;
      font-weight: 700;
      color: var(--text-primary);
      margin-bottom: 1rem;
      line-height: 1.3;
    }

    p {
      font-size: 1.4rem;
      color: var(--text-secondary);
      line-height: 1.7;
    }
  }

  footer {
    margin-top: 2rem;

    .tech-list {
      display: flex;
      flex-wrap: wrap;
      gap: 0.6rem;

      li {
        font-size: 1.1rem;
        font-weight: 500;
        padding: 0.3rem 0.9rem;
        border-radius: 10rem;
        background: rgba(59, 130, 246, 0.08);
        border: 1px solid rgba(59, 130, 246, 0.2);
        color: var(--text-secondary);
        letter-spacing: 0.03rem;
      }
    }
  }
`;
