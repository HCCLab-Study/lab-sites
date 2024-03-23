import React from "react";
import { Link } from "react-router-dom";

// 동아리 소개
function Section2 () {

    return (
        <section className='relative w-full h-[450px] left-0 right-0'>
            <div className='absolute h-[350px] w-[1000px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-roboto text-custom-navy'>
                <div className='flex relative w-full h-[500px]'>
                        <img src='src/assets/images/club/chic.png' className='col-span-2 relative w-[350px] h-[300px] right-12 top-10' />
                    <div className='grid grid-cols-3'>
                        <div className='relative top-9 right-8 h-[290px] w-[2px] bg-custom-blue' />
                    </div>
                        <div className='grid grid-rows-2 relative left- w-[720px]'>
                            <div className='relative top-10'>
                                <span className='font-black text-4xl'>C</span><span className='font-semibold text-3xl mr-2'>omputer</span>
                                <span className='font-black text-4xl'>H</span><span className='font-semibold text-3xl mr-2'>uman</span>
                                <span className='font-black text-4xl'>I</span><span className='font-semibold text-3xl mr-2'>nteraction</span>
                                <span className='font-black text-4xl'>C</span><span className='font-semibold text-3xl'>ommunity</span>
                            </div>
                            <div className='relative bottom-36 w-[720px]'>
                                <p className='tracking-tighter leading-8 mt-8'>
                                    컴퓨터와 인간의 모든 접점에서, 기획, 설계, 개발을 수행하면서 전공의 실전적 지식을 함양하고,<br/>
                                    나아가 인류에게 도움이 되는 소프트웨어를 만드는 것을 목표로 하는 컴퓨터인간상호작용커뮤니티입니다.
                                    현재 약 25명의 회원들이 활동하고 있습니다.
                                </p>
                            </div>
                            <div className='flex relative bottom-52'>
                                <img src='src/assets/images/club/github.png' className='w-8' />
                                <Link to='https://github.com/kw-chi-community/' target='_blank' rel='noopener noreferrer' className='underline font-semibold mt-1 ml-1'>
                                    @kw-chi-community
                                </Link>
                            </div>
                            <div className='flex relative bottom-48'>
                                <img src='src/assets/images/club/instagram.png' className='w-8' />
                                <Link to='https://www.instagram.com/chic_stg/' target='_blank' rel='noopener noreferrer' className='underline font-semibold mt-1 ml-1'>
                                    @chic_stg
                                </Link>
                            </div>
                        </div>
                </div>


            </div>
            
        </section>
    );
}

export default Section2;