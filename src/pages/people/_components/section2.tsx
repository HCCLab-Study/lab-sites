import React from 'react';

// 교수님 소개 부분
function Section2() {
  return (
    <section className='relative w-full	h-[400px] left-0 right-0'>
      <div className='absolute h-[350px] w-[1000px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-roboto text-custom-navy'>
        <div className='absolute h-[50px] w-full border-b-2 border-custom-blue'>
          <h2 className='absolute flex items-center text-3xl font-semibold tracking-widest	'>Professor</h2>
        </div>
        <div className='absolute h-[300px] w-[250px] top-[50px] flex justify-center items-center'>
          <img src='src\assets\images\people\교수님.png' alt='박규동교수님 이미지' className='w-[210px] h-[210px] object-cover ' />
        </div>
        <div className='absolute h-[300px] w-[750px] top-[50px] left-[250px] p-5'>
          <p className='text-xl'><strong>박규동(Kyudong Park, PhD) | </strong>공학박사 조교수</p>
          <p className='pt-3 pb-3'>인공지능융합대학 정보융합학부/일반대학원 인공지능응용학과</p>
          <ul className='list-disc list-inside pb-4'>
            <li>Email : kdpark@kw.ac.kr</li>
            <li>Tel : 02-940-5638</li>
            <li>Office : 광운대학교 새빛관 804호</li>
            <li>Office : 광운대학교 새빛관 808호</li>
            <li><a href="https://sites.google.com/view/hcclab/people/schedule" className='underline underline-offset-1'>일정보기</a></li>
          </ul>
          <a href="/people/professor" target="_blank" rel="noopener noreferrer" className="inline-block w-[144.68px] h-[40px] bg-custom-blue rounded-full text-white filter drop-shadow-[0px 4px 4px rgba(0, 0, 0, 0.25)] flex justify-center items-center">자세히</a>
        </div>
      </div>
    </section>
  );
}

export default Section2;