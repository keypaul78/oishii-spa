//libs
import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
//comps
//styles
//data

const InputSearch = (props) => {
  const location = useLocation();
  const { term, setTerm } = useState('');
  const { focus, setFocus } = useState(false);
  const classes = `input ${props.classes}`;
  const inputRef = useRef();

  useEffect(() => {
    if (location.pathname === '/search') {
      console.log(inputRef);
      inputRef.current.click();
    }
  }, [location.pathname, inputRef]);

  /*
  onInputChange = (e) => {
    e.preventDefault();
    this.setState({ term: e.target.value });
    if (e.target.value.length >= 2) {
      this.props.onChangeSubmit(this.state.term);
    }
  };
  */

  return (
    <input
      id={props.id}
      className={classes}
      type={props.type}
      placeholder={props.placeholder}
      aria-label={props.id}
      describedby={props.describedby}
      value={term}
      ref={inputRef}
    />
  );
};

export default InputSearch;
