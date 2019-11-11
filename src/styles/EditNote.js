import styled from 'styled-components'

export const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(32, 33, 36, 0.75);
`

export const StyledModal = styled.form`
  position: fixed;
  top: 38%;
  left: 50%;
  transform: translate(-50%, -38%);
  border-radius: var(--radius);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--border);
  box-shadow: var(--large-shadow);
  max-width: 550px;
  width: calc(100% - 2rem);
  max-height: calc(100% - 2rem);
  overflow-y: auto;
  background: var(--background);

  input,
  .textarea {
    width: 100%;
    resize: none;
    padding: 1rem;
    color: var(--color);
    border: none;
    background: var(--background);
  }

  input {
    font-size: 1.25rem;
    font-weight: 500;
  }

  .textarea {
    padding-top: 0rem;
    min-height: 3.5rem;
    white-space: pre-wrap;
  }
`

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 0.5rem 1rem;
  align-items: center;

  button {
    cursor: pointer;
    margin-left: 0.5rem;
    padding: 0.6rem 1.5rem;
    border-radius: 4px;
    font-weight: 500;
    border: 0;
    background: var(--background);
    color: var(--color);

    &:hover {
      background-color: rgba(255, 255, 255, 0.025);
    }

    &[type='reset'] {
      padding: 0.3rem 0.5rem;

      &:hover {
        background: #dc3545;
      }
    }
  }
`
