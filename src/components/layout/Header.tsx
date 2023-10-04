import { useLocation } from 'react-router-dom';
import avatarImg from '../../assets/icons/avatar.jpg';

export default function Header() {
  const location = useLocation();

  return (
    <>
      <header className="flex justify-between items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md w-full px-10 h-16">
        <div>
          {/* <h1>{location.pathname}</h1> */}
          <input type="text" placeholder='Search' className='border p-2 w-96 rounded' />
        </div>
        <div>
          <img src={avatarImg} className='rounded-full w-8 h-8 bg-contain' alt="user" />
        </div>
      </header>
    </>
  );
}
