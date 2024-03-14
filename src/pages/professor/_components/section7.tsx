import React from 'react';

// 전문 활동
function Section7() {
    return (
        <section className='relative w-full h-[850px] left-0 right-0 bg-section-gray'>
            <div className='absolute h-[750px] w-[1000px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-roboto text-custom-navy'>
                <div className='absolute h-[50px] w-full border-b-2 border-custom-blue'>
                    <h2 className='absolute flex items-center text-3xl font-semibold tracking-widest'>Professional Activities</h2>
                </div>
                <div className='pt-20 pl-6'>
                    <ul className='list-disc'>
                        <li className='mb-2'>활동 학회</li>
                        <ul className='list-disc pl-8'>
                          <li className='mb-2'>한국정보과학회 Computer Graphics & Interaction Society 운영이사</li>
                          <li className='mb-2'>HCI Korea 2022 학술대회 프로그램위원장 (기술분야)</li>
                          <li className='mb-2'>International Conference on Computers in Education 2014 박사컨소시엄위원회</li>
                          <li className='mb-2'>Journal of Information Processing Systems, Associate Editor</li>
                          <li className='mb-2'>ACM SIGCHI Member</li>
                          <li className='mb-2'>대한인간공학회 종신회원, 평의원</li>
                          <li className='mb-2'>한국HCI학회 종신회원</li>
                          <li className='mb-2'>한국컴퓨터교육학회 정회원</li>
                          <li className='mb-2'>대한산업공학회 정회원</li>
                          <li className='mb-2'>한국정보과학회 정회원</li>
                          <li className='mb-8'>한국재활복지공확회 정회원</li>
                        </ul>
                        <li className='mb-2'>심사활동</li>
                        <ul className='list-disc pl-8'>
                          <li className='mb-2'>IEEE Transactions on Software Engineering (SCIE)</li>
                          <li className='mb-2'>Behavior & Information Technology (SSCI)</li>
                          <li className='mb-2'>Mobile Information Systems (SCIE)</li>
                          <li className='mb-2'>International Review of Research in Open and Distributed Learning (SSCI)</li>
                          <li className='mb-2'>International Journal of Automotive Technology (SCIE)</li>
                          <li className='mb-2'>Applied Sciences (SCIE)</li>
                          <li className='mb-2'>Universal Access in the Information Society (SSCI)</li>
                        </ul>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Section7;
