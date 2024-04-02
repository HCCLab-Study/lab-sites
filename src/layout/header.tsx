import { useState, useEffect } from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';

function useWindowSize() {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);

  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
}

export default function Header() {
	// pathname, useLocation을 이용해 클릭 시 경로 표시
	const location = useLocation();
	const isClickActive = (path: string) => location.pathname === path;

	// 경로를 나타내는 스타일 함수로 빼기
	const getLinkStyle = (path: string) => (isClickActive(path) ? 'font-bold underline' : '');

	// 뷰 크기 조절
	const [width] = useWindowSize();
	// Menu (햄버거바) 상태관리
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<>
			<header className='fixed top-0 flex items-center justify-between w-full z-[999] h-14 bg-gradient-to-r from-sky-500 to-indigo-500'>
				{width > 1415 ? (
				<div className='flex items-center ml-32'>
					<Link to='home' className='text-white logo'>
						<img src='../src/assets/images/header/kw-logo.png' alt='KW MARK' className='w-36' />
					</Link>
					<Link to='home' className='ml-4 text-white logo'>
						<h3 className='text-xl font-bold'>IDEA LAB</h3>
					</Link>
				</div>
				) : (
				<div className='flex items-center justigy-start ml-4'>
					<Link to='home' className='text-white logo'>
						<img src='../src/assets/images/header/kw-logo.png' alt='KW MARK' className='w-36' />
					</Link>
					<Link to='home' className='ml-4 text-white logo'>
						<h3 className='text-xl font-bold'>IDEA LAB</h3>
					</Link>
				</div>
				)}
				{width <= 1415 && (
				<div className='hamburger-menu' onClick={() => setIsMenuOpen(!isMenuOpen)}>
					<button className='hamburger-icon text-white font-semibold mr-4'>
						<img src='../src/assets/images/header/burger.png' alt='MENU' className='w-8' />
					</button>
				</div>
				)}
				{width > 1415 && (
				<nav className='mr-32'>
					<ul className='flex items-center justify-center mr-10 space-x-8 text-white navi'>
						<li>
							<Link to="people" className={getLinkStyle('/people')}>
								PEOPLE
							</Link>
						</li>
						<li>
							<Link to="projects" className={getLinkStyle('/projects')}>
								PROJECT
							</Link>
						</li>
						<li>
							<Link to="publications" className={getLinkStyle('/publications')}>
								PUBLICATIONS
							</Link>
						</li>
						<li>
							<Link to="lectures" className={getLinkStyle('/lectures')}>
								LECTURES
							</Link>
						</li>
						<li>
							<Link to="club" className={getLinkStyle('/club')}>
								전공동아리
							</Link>
						</li>

						<div className="relative rounded-full inline-flex mt-1.1">
							<input className="py-2 pl-4 pr-2 text-black rounded-full" type="text" placeholder="Search" />
							<button className="absolute top-0 right-0 mt-2 mr-2">
								<img src="../src/assets/images/header/magnifying-glass.png" alt="magnifying-glass" className="w-6" />
							</button>
						</div>
					</ul>
					{width <= 1415 && (
					<div className='hamburger-menu' onClick={() => setIsMenuOpen(!isMenuOpen)}>
						<div className='hamburger-icon'>Menu</div>
					</div>
					)}
				</nav>
				)}
			</header>
			{isMenuOpen && width <= 1415 && (
				<div className='mobile-menu h-24'>
					<ul className='flex flex-col items-center mt-16 text-lg'>
						<li>
							<Link to='people' className={getLinkStyle('/people')}>
								PEOPLE
							</Link>
						</li>
						<li>
							<Link to='projects' className={getLinkStyle('/projects')}>
								PROJECT
							</Link>
						</li>
						<li>
							<Link to='publications' className={getLinkStyle('/publications')}>
								PUBLICATIONS
							</Link>
						</li>
						<li>
							<Link to='lectures' className={getLinkStyle('/lectures')}>
								LECTURES
							</Link>
						</li>
						<li>
							<Link to='club' className={getLinkStyle('/club')}>
								전공동아리
							</Link>
						</li>
					</ul>
				</div>
			)}
			<Outlet />
		</>
	);
}
