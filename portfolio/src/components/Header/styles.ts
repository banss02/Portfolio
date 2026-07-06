import styled from "styled-components";

export const Container = styled.header<{ scrolled?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.6rem 10rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 1000;
  transition: all 0.4s ease;
  background: ${({ scrolled }) =>
    scrolled
      ? "rgba(59, 136, 246, 0.06)"
      : "transparent"};
  backdrop-filter: ${({ scrolled }) => (scrolled ? "blur(20px)" : "none")};
  border-bottom: ${({ scrolled }) =>
    scrolled ? "1px solid rgba(59,130,246,0.12)" : "none"};

  nav {
    display: flex;
    align-items: center;
    gap: 0.4rem;

    a {
      color: var(--text-secondary);
      padding: 0.6rem 1.2rem;
      font-size: 1.4rem;
      font-weight: 500;
      letter-spacing: 0.05rem;
      border-radius: 0.6rem;
      transition: all 0.25s ease;
      position: relative;

      &:hover {
        color: var(--text-primary);
        background: rgba(59, 130, 246, 0.08);
      }

      &.active-link {
        color: var(--blue);
      }

      &.button {
        margin-left: 0.8rem;
        padding: 0.7rem 1.8rem;
        background: linear-gradient(135deg, var(--blue), var(--purple));
        color: #fff;
        font-size: 1.4rem;
        border-radius: 0.8rem;
        box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);

        &:hover {
          box-shadow: 0 0 30px rgba(59, 130, 246, 0.5);
          transform: translateY(-1px);
          background: rgba(59, 130, 246, 0.08);
          color: var(--text-primary);
        }
      }
    }
  }

  /* hide theme toggle — replaced by scroll-aware design */
  input[type=checkbox],
  label {
    display: none;
  }

  .menu {
    width: 2.2rem;
    height: 0.2rem;
    background: var(--text-primary);
    position: relative;
    cursor: pointer;
    display: none;
    border-radius: 2px;

    &::before, &::after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 0.2rem;
      background: var(--text-primary);
      border-radius: 2px;
      transition: 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    }
    &::before { bottom: 0.6rem; }
    &::after  { top: 0.6rem; }

    &.active {
      background: transparent;
      &::before { bottom: 0; transform: rotate(45deg); }
      &::after  { top: 0;    transform: rotate(-45deg); }
    }
  }

  @media (max-width: 960px) {
    padding: 1.6rem 3rem;

    .menu { display: block; }

    nav {
      opacity: 0;
      visibility: hidden;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      position: fixed;
      inset: 0;
      background: rgba(2, 6, 23, 0.97);
      backdrop-filter: blur(20px);
      transition: opacity 0.3s ease, visibility 0.3s ease;

      a {
        font-size: 2rem;
        padding: 1rem 2rem;
      }

      a.button {
        margin-left: 0;
        padding: 1rem 3rem;
        font-size: 1.8rem;
      }

      &.active {
        opacity: 1;
        visibility: visible;
      }
    }
  }
`;
