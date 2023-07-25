import Link from 'next/link';
// import { AiOutlineInfoCircle, AiOutlineProject, AiOutlineContacts } from 'react-icons/ai';
import { FaHome, FaUser, FaBriefcase } from 'react-icons/fa';


const BottomNav = () => {
  return (
    <nav className="main-nav">
      <div className="flex justify-around items-center max-w-4xl mx-auto px-4">
        <Link href="/#about" title="About" className="nav-link hover:text-white">
          <FaUser className="nav-icon" />
          <span className="sr-only">About</span>
        </Link>
        
        <Link href="/" title='Home' className="nav-link nav-home-link hover:text-white">
          <FaHome className="nav-icon" />
          <span className="sr-only">Home</span>
        </Link>

        <Link href="/#projects" title="Projects" className="nav-link hover:text-white">
          <FaBriefcase className="nav-icon" />
          <span className="sr-only">Projects</span>
        </Link>
      </div>
    </nav>
  );
};



// const BottomNav = () => {
//   return (
//     <nav className="main-nav">
//       <div className="flex justify-between items-center max-w-4xl mx-auto px-4">
//         <Link href="/" className="nav-link">
//           <AiOutlineInfoCircle size={20} />
//           <span>Home</span>
//         </Link>
//         <Link href="/#about" className="nav-link">
//           <AiOutlineInfoCircle size={20} />
//           <span>About</span>
//         </Link>
//         <Link href="/#projects" className="nav-link">
//           <AiOutlineProject size={20} />
//           <span>Projects</span>
//         </Link>
//         <Link href="/contact" className="nav-link">
//           <AiOutlineContacts size={20} />
//           <span>Contact</span>
//         </Link>
//       </div>
//     </nav>
//   );
// };




export default BottomNav;