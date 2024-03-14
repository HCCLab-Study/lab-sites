import React from "react";
import { Link } from "react-router-dom";

// 교수님 연구실 소개, 연락처 정보
function Section2 () {

    const copyEmail = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            alert('클립보드에 메일주소가 복사되었습니다.');
        } catch (e) {
            alert('복사에 실패했습니다.');
        }
    };

    return (
        <section className='relative w-full h-[280px] left-0 right-0'>
             <div className='absolute h-[250px] w-[900px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-roboto text-custom-navy'>
                <p className='relative left-48'>인공지능융합대학 정보융합학부 / 일반대학원 인공지능응용학과</p>
                <div className='mt-6'>
                    <p className='relative left-48'>
                        컴퓨터공학을 기반으로 <strong>HCI/UX/</strong>인간공학과의 융합연구를 수행하여 박사학위를 받았습니다. 
                        2번의 창업, 벤처인큐베이팅,<br /> 대기업의 다양한 근무 경험을 살려 지금은 인간-컴퓨터 상호작용 분야의 실용적인 교육과 연구를 수행하고 있습니다.
                        <br /> 현재, 사용자 경험의 관점에서 소프트웨어를 설계/기획, 분석, 개발하는 <Link to='/' className='text-custom-blue underline font-semibold'>인간중심컴퓨팅 연구실</Link>을 운영하고 있습니다.
                    </p>
                </div>
                <div className='relative left-56 mt-6'>
                    <ul className='font-semibold list-disc'>
                        <li>Email: <u className='cursor-pointer' onClick={() => copyEmail('kdpark@kw.ac.kr')}>kdpark@kw.ac.kr</u></li>
                        <li>Tel: 02-940-5638</li>
                        <li>Office: 서울시 노원구 광운로 20, 광운대학교 새빛관 804호</li>
                    </ul>
                </div>

            </div>
            
        </section>
    );
}

export default Section2;