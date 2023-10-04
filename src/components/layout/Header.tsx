import { UserIcon } from '../icons/UserIcon';
import { MenuIcon } from '../icons/MenuIcon';

export default function Header({toggleSidebar}: {toggleSidebar: () => void}) {
  
  return (
    <>
      <header className="flex justify-between items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white rounded-md w-full px-10 h-16">
        <div>
          <MenuIcon className="w-8 h-8 cursor-pointer" onClick={toggleSidebar} />
        </div>
        <div>
          <UserIcon className='w-8 h-8 cursor-pointer' />
        </div>
      </header>
    </>
  );
}
