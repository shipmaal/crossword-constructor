import { createClient } from '@/utils/supabase/server';
import s from './NavBar.module.css';
import NavItems from './NavItems';

export default async function Navbar() {
  const supabase = createClient();

  const {
    data: { user }
  } = await supabase.auth.getUser();

  return (
    <nav className={s.root}>
      <a href="#skip" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
      <div className="max-w-6xl px-6 mx-auto">
        <NavItems user={user} />
      </div>
    </nav>
  );
}