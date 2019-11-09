import styled from 'styled-components'

export const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(32, 33, 36, 0.75);
  display: flex;
  justify-content: center;
`

export const StyledModal = styled.form`
  position: fixed;
  top: 38%;
  left: 50%;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  transform: translate(-50%, -38%);
  border-radius: var(--radius);
  border: 1px solid var(--border);
  max-width: 550px;
  width: calc(100% - 2rem);
  box-shadow: var(--shadow);

  input,
  .textarea {
    width: 100%;
    resize: none;
    border: none;
    background: var(--background);
    padding: 1rem;
    color: var(--color);
  }

  input {
    font-size: 1.25rem;
    font-weight: 500;
  }

  .textarea {
    padding-top: 0;
    font-size: 1rem;
    min-height: 3.5rem;
  }
`

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 0.25rem 1rem;
  background: var(--background);

  button {
    cursor: pointer;
    border: none;
    font-size: 0.875rem;
    background: var(--background);
    color: var(--color);
    margin-left: 0.5rem;
    padding: 0.65rem 1.5rem;
    border-radius: 4px;
    font-weight: 500;

    &:hover {
      background-color: rgba(255, 255, 255, 0.025);
    }
  }
`
