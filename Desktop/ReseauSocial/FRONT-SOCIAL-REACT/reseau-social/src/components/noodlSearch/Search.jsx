import React, { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';

import { useStateContext } from '../../context/StateContextProvider';
import { Links } from './Links';

export const Search = () => {
  const { setSearchTerm } = useStateContext();
  const [text, setText] = useState('PâteMan');
  const [debouncedValue] = useDebounce(text, 300);

  useEffect(() => {
    if (debouncedValue) setSearchTerm(debouncedValue);
  }, [debouncedValue]);

  return (
    <div className="boxSearch">
      <input
        value={text}
        type="text"
        className="inputNoodl"
        placeholder="🔎 Cherche sur Noodl ou via une URL"
        onChange={(e) => setText(e.target.value)}
      />
      {text !== '' && (
        <button type="button" className="buttunNoodl " onClick={() => setText('')}>
          x
        </button>
      )}
      <Links />
    </div>
  );
};
