import { Outlet } from 'react-router-dom';

export default function Tablet_Footer() {
    return (
        <div className=''>
            <main className=''>
            <Outlet />
            </main>
            <footer className='bg-custom-navy border border-black flex h-20 items-center justify-center mt-auto'>
                <p className='text-white'>Copyright © HCC Lab. All rights reserved.</p>
            </footer>
        </div>
    );
}
