import React from 'react';
import { Button } from '@nextui-org/button';
import { useNavigate } from 'react-router-dom';
import { useUserStore, initialState } from '../../store/userstore.ts';

const LogoutButton = () => {
  const user = useUserStore((state) => state.user);
  const { logged } = user;
  const [state, setState] = React.useState(false);
  const navigate = useNavigate();
  const dispatch = useUserStore((state) => state.dispatch);
  const onButtonEvent = () => {
    state
      ? dispatch({ type: 'LOG_OUT', payload: { ...initialState } })
      : navigate('/register');
  };
  React.useEffect(() => {
    logged === true ? setState(true) : setState(false);
  }, [logged]);
  return (
    <Button
      color={state ? 'danger' : 'primary'}
      onPress={() => {
        onButtonEvent();
      }}
      className='text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-extrabold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800'
    >
      {state ? 'Log out' : 'Sign Up'}
    </Button>
  );
};

export default LogoutButton;
