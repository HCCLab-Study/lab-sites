import { Outlet } from 'react-router-dom';

export default function Mobile_Footer() {
    return (
        <div className='flex flex-col'>
            <main className=''>
                <Outlet />
            </main>
            <footer className='bg-custom-navy border border-black h-20 flex items-center justify-center mt-auto'>
                <p className='text-white'>Copyright © HCC Lab. All rights reserved.</p>
            </footer>
        </div>
    );
}
