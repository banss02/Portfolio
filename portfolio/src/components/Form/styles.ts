import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  place-items: center;

  h2 {
    font-size: 2.4rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 2.4rem;
    color: var(--text-primary);
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    width: 100%;
    max-width: 60rem;

    input, textarea {
      width: 100%;
      padding: 1.2rem 1.8rem;
      border-radius: 1rem;
      outline: none;
      border: 1px solid rgba(59, 130, 246, 0.2);
      background: rgba(15, 23, 42, 0.6);
      color: var(--text-primary);
      font-size: 1.5rem;
      font-weight: 500;
      backdrop-filter: blur(8px);
      transition: border-color 0.3s ease, box-shadow 0.3s ease;

      &::placeholder {
        color: var(--text-secondary);
        font-weight: 400;
      }

      &:focus {
        border-color: var(--blue);
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
      }
    }

    textarea {
      height: 16rem;
      resize: none;
      overflow-y: auto;
    }

    button {
      padding: 1.2rem;
      font-size: 1.6rem;
      font-weight: 600;
      border-radius: 1rem;
      background: linear-gradient(135deg, var(--blue), var(--purple));
      color: #fff;
      border: none;
      cursor: pointer;
      box-shadow: 0 0 24px rgba(59, 130, 246, 0.3);
      transition: all 0.3s ease;

      &:hover:not(:disabled) {
        box-shadow: 0 0 40px rgba(59, 130, 246, 0.5);
        transform: translateY(-1px);
      }

      &:disabled {
        opacity: 0.45;
        cursor: not-allowed;
        transform: none;
      }
    }
  }
`;

export const ContainerSucces = styled.div`
  margin-top: 6rem;
  text-align: center;
  padding: 4rem;
  border-radius: 1.6rem;
  background: rgba(15, 23, 42, 0.7);
  border: 1px solid rgba(0, 255, 136, 0.2);
  backdrop-filter: blur(12px);

  h3 {
    font-size: 2.4rem;
    font-weight: 700;
    color: var(--green);
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.6rem;
    color: var(--text-secondary);
    margin-bottom: 2rem;
  }

  button {
    padding: 1rem 3rem;
    font-size: 1.5rem;
    font-weight: 600;
    border-radius: 0.8rem;
    background: linear-gradient(135deg, var(--blue), var(--purple));
    color: #fff;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      box-shadow: 0 0 24px rgba(59, 130, 246, 0.4);
      transform: translateY(-1px);
    }
  }
`;
