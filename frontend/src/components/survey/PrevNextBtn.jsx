import { styled } from 'twin.macro';

const Btn = styled.button`
  width: 9rem;
  height: 3rem;
  border-radius: 10px;
  position: absolute;
  bottom: 2rem;

  &.prev {
    left: 2rem;
    color: #8dcd84;
    border: 1px solid #8dcd84;
    background-color: transparent;
  }

  &.next {
    right: 2rem;
    color: #fff;
    border: 0;
    background-color: #8dcd84;
  }
`;

function InputBtn({ children, btnClass, onClick }) {
  return (
    <Btn type="button" className={btnClass} onClick={onClick}>
      {children}
    </Btn>
  );
}

export default InputBtn;
