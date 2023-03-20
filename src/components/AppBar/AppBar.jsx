import css from './AppBar.module.css';

const AppBar = () => {
  const navItems = [
    { href: '/', text: 'Home' },
    { href: 'movies', text: 'Movies' },
  ];
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        {navItems.map(({ href, text }) => {
          return (
            <div className={css.navItem} to={href} key={href}>
              {text}
            </div>
          );
        })}
      </nav>
    </header>
  );
};

export default AppBar;
