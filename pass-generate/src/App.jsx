import { useState, useCallback, useEffect, useRef } from "react";
function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(true);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (number) str += "0123456789";
    if (char) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * str.length);
      pass += str.charAt(index);
    }

    setPassword(pass);
  }, [length, number, char, setPassword]);

  const copyPasswordToClipboard = () => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  };

  useEffect(() => {
    passwordGenerator();
  }, [length, number, char, passwordGenerator]);
  return (
    <div className="p-5 border-5 m-5">
      <h1>Password generator</h1>

      <div>
        <input
          type="text"
          value={password}
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button >copy</button>
      </div>

      <div>
        <div>
          <input
            type="range"
            min={6}
            max={10}
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label>Length: {length}</label>
        </div>

        <div>
          <input
            type="checkbox"
            defaultChecked={number}
            id="numberInput"
            onChange={() => {
              setNumber((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>

        <div>
          <input
            type="checkbox"
            defaultChecked={char}
            id="characterInput"
            onChange={() => {
              setChar((prev) => !prev);
            }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
