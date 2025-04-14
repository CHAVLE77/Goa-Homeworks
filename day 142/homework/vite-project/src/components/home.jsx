export function Nav() {
    return (
      <header className="w-full h-[80px] bg-black">
        <nav className="flex justify-center items-center h-20 text-white">
          <ul className="flex gap-6">
            <li><a className="hover:text-amber-400" href="/home">login</a></li>
            <li><a className="hover:text-amber-400" href="/signup">register</a></li>
            <li><a className="hover:text-amber-400" href="/contact">contact</a></li>
            <li><a className="hover:text-amber-400" href="/about">about</a></li>
          </ul>
        </nav>
      </header>
    );
  }
  