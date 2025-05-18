import { Star } from 'lucide-react';
import { NavLink } from 'react-router';

const items = [
  { label: 'Home', path: '/' },
  { label: 'Project', path: '/projects' },
  { label: 'Laboratory', path: '/laboratory' },
];

function Header() {
  return (
    <header className="w-full h-14 fixed top-0 bg-white/10 backdrop-blur-md mx-auto z-50 flex flex-row justify-center">
      <nav className="w-full h-full max-w-[30rem] flex flex-row justify-center items-center px-4 gap-8 md:gap-16">
        {items.map(item => (
          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }) =>
              isActive ? 'nav-link active-nav-link flex items-center gap-2' : 'nav-link flex items-center gap-2'
            }
          >
            {({ isActive }) => (
              <>
                {isActive && <Star size={16} className="text-witch-purple animate-twinkle" />}
                <span>{item.label}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default Header;
