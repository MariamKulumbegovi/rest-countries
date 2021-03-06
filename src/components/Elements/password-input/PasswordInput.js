import { useState, useEffect } from 'react';
import { TEST_IDS } from '../../../constants/TestIds';
import { Password_Min_Value } from '../../../constants/Validation';

export const PasswordInput = () => {
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // let number = /[0-9]/;
  // || !number.test(password)
  // || !number.test(password)

  useEffect(() => {
    if (password && password.length < Password_Min_Value) {
      setPasswordError(true);
    } else if (password && password.length >= Password_Min_Value) {
      setPasswordError(false);
    }
  }, [password]);

  const getClassName = () => {
    let errorClassName = '';
    if (passwordError && password) {
      errorClassName = 'is-danger';
    } else if (!passwordError && password) {
      errorClassName = 'is-success';
    }
    return errorClassName;
  };

  return (
    <>
      <p className="control has-icons-left has-icons-right">
        <input
          className={`input ${getClassName()}`}
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          required
          onChange={({ target }) => setPassword(target.value)}
          data-testid={TEST_IDS.passwordinput.passinput}
        />
        <span className="icon is-small is-left">
          <i className="fas fa-lock"></i>
        </span>
        {!passwordError && password && (
          <span
            className="icon is-small is-right"
            data-testid={TEST_IDS.passwordinput.success}
          >
            <i className="fas fa-check"></i>
          </span>
        )}
        {passwordError && password && (
          <span
            className="icon is-small is-right"
            data-testid={TEST_IDS.passwordinput.error}
          >
            <i className="fas fa-exclamation-triangle"></i>
          </span>
        )}
      </p>
    </>
  );
};
