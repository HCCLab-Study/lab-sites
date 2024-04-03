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
	const getLinkStyle = (path: string) => (isClickActive(path) ? 'font-black underline' : '');

	// 뷰 크기 조절
	const [width] = useWindowSize();
	// Menu (햄버거바) 상태관리
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	// 메뉴 아이템 배열 생성
	const menuItems = [
		{ path: '/home', label: 'HOME' },
		{ path: '/people', label: 'PEOPLE' },
		{ path: '/projects', label: 'PROJECT' },
		{ path: '/publications', label: 'PUBLICATIONS' },
		{ path: '/lectures', label: 'LECTURES' },
		{ path: '/club', label: '전공동아리' },
	];

	return (
		<>
			<header className='fixed top-0 flex items-center justify-between w-full z-[999] h-14 bg-gradient-to-r from-sky-500 to-indigo-500'>
				{width > 1468 ? (
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
				{width <= 1468 && (
					<div className='hamburger-menu' onClick={() => setIsMenuOpen(!isMenuOpen)}>
						<button className='hamburger-icon text-white font-semibold mr-4'>
							<img src='../src/assets/images/header/burger.png' alt='MENU' className='w-8' />
						</button>
					</div>
				)}
				{width > 1468 && (
					<nav className='mr-32'>
						<ul className='flex items-center justify-center mr-10 space-x-8 text-white navi'>
							{menuItems.map((item) => (
								<li key={item.path}>
									<Link to={item.path} className={getLinkStyle(item.path)}>
										{item.label}
									</Link>
								</li>
							))}
							<li>
								<button
									onClick={() => {
										fetch('/api/people')
											.then((res) => res.json())
											.then((data) => console.log(data));
									}}>
									api 호출
								</button>
							</li>
							<div className='relative rounded-full inline-flex mt-1.1'>
								<input className='py-2 pl-4 pr-2 text-black rounded-full' type='text' placeholder='Search' />
								<button className='absolute top-0 right-0 mt-2 mr-2'>
									<img src='../src/assets/images/header/magnifying-glass.png' alt='magnifying-glass' className='w-6' />
								</button>
							</div>
						</ul>
					</nav>
				)}
			</header>
			{isMenuOpen && width <= 1468 && (
				<div className="fixed top-0 left-0 w-full bg-white bg-opacity-60 z-50 flex flex-col items-center justify-cente">
					<ul className='flex flex-col items-center mt-16 text-lg'>
						{menuItems.map((item) => (
							<li key={item.path}>
								<Link to={item.path} className={getLinkStyle(item.path)} onClick={() => setIsMenuOpen(false)}>
									{item.label}
								</Link>
							</li>
						))}
					</ul>
				</div>
			)}

			<Outlet />
		</>
	);
}
