import { useDispatch, useSelector } from 'react-redux';
import { restar, sumar } from '../actions/contadorActions';

export const Contador = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Contador Redux</h2>
      <nav>
        <button onClick={() => dispatch(sumar())}>+1</button>
        <button onClick={() => dispatch(restar())}>-1</button>
      </nav>
      <h3>{state.contador}</h3>
    </div>
  );
};
