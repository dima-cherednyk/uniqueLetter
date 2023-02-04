import React, { useState } from 'react';
import classNames from 'classnames';
import './App.scss';

export const App: React.FC = () => {
  const [string, setString] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const findUniqueLetter = (text: string) => {
    const words = text.split(' ');
    const deleteNewLine = words.map(x => x.replace(/[\n]/g, ' '));
    const deleteSpaces = deleteNewLine.filter(word => word !== '');
    const uniqueLetterFromWord: string[] = [];

    deleteSpaces.forEach(word => {
      const x = word.split('');

      x.find(t => {
        if (word.indexOf(t) === word.lastIndexOf(t)) {
          return uniqueLetterFromWord.push(t);
        }

        return null;
      });
    });

    const resultLetter = uniqueLetterFromWord.filter(letter => {
      if (uniqueLetterFromWord.indexOf(letter) === uniqueLetterFromWord.lastIndexOf(letter)) {
        return letter;
      }

      return null;
    });

    return setResult(resultLetter[0] || 'No unique letter!');
  };

  return (
    <div className="app">
      <h3>Find unique letter</h3>
      <div className="app__main">
        <input value={string} onChange={(e) => setString(e.currentTarget.value)} type="text" />

        <button
          onClick={() => setString('')}
          type="button"
          disabled={!string}
        >
          Delete all
        </button>
      </div>

      <button
        onClick={() => findUniqueLetter(string)}
        type="button"
        disabled={!string}
      >
        Find unique letter
      </button>

      <p
        className={classNames(
          'app__result', {
            'app__result--hidden': !result,
          },
        )}
      >
        {`Result: ${result}`}
      </p>
    </div>
  );
};
