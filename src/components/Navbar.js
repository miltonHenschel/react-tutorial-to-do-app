import { useState, useEffect, useRef } from 'react';

function Navbar() {
  const [dropdown, setDropdown] = useState(false);

  const ref = useRef();

  useEffect(() => {
    document.title = `Current state value: ${dropdown}`;

    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener('mousedown', handler);
  }, [dropdown]);

  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li ref={ref}>
          <button type="button" onClick={() => setDropdown((prev) => !prev)}>
            Services
            {' '}
            <span>&#8595;</span>
          </button>
          {dropdown && (
            <ul>
              <li>Design</li>
              <li>Development</li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
