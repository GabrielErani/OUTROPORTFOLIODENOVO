// Acknowledgment.js
export function Acknowledgment({ href, children }) {
    return (
      <li>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-800 hover:text-zinc-600 hover:underline transition-colors duration-200"
        >
          {children}
        </a>
      </li>
    );
  }
  