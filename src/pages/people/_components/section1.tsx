import React from 'react';

// 타이틀부분
function Section1() {
  return (
    <section className='relative w-full	h-[397px] left-0 right-0 bg-gradient-to-br from-custom-red to-custom-blue'>
      <div className="absolute bottom-0 inset-x-0 justify-center font-roboto font-medium text-5xl leading-6 flex items-center justify-center text-white" style={{ marginBottom: '50px' }}>
        People
      </div>
    </section>
  );
}

export default Section1;