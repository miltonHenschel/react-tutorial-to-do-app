import { useState, useRef } from 'react';
import useOnClickOutside from '../useOnClickOutside';

function Navbar() {
  const [dropdown, setDropdown] = useState(false);

  const ref = useRef();

  useOnClickOutside(ref, dropdown, () => setDropdown(false));

  return (
    <>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li ref={ref}>
            <button type="button" onClick={() => setDropdown((prev) => !prev)}>
              Services
              {' '}
              <span>&darr;</span>
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
    </>
  );
}

export default Navbar;
