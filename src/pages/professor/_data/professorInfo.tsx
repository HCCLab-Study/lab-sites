// data/professorInfo.js
import { Link } from 'react-router-dom';

export const professorInfo = {
    university: '인공지능융합대학 정보융합학부',
    undergraduateSchool: '일반대학원 인공지능응용학과',
    description: (
        <>
            컴퓨터공학을 기반으로 <strong>HCI/UX</strong>/인간공학과의 융합연구를 수행하여 박사학위를 받았습니다.
            2번의 창업, 벤처인큐베이팅, <br />대기업의 다양한 근무 경험을 살려 지금은 인간-컴퓨터 상호작용 분야의 실용적인 교육과 연구를 수행하고 있습니다.
            <br />현재, 사용자 경험의 관점에서 소프트웨어를 설계/기획, 분석, 개발하는{' '} 
            <Link to='/' className='text-custom-blue underline font-semibold'>인간중심컴퓨팅 연구실</Link>을 운영하고 있습니다.
        </>
    ),
    contact: {
        email: 'kdpark@kw.ac.kr',
        phone: '02-940-5638',
        office: '서울시 노원구 광운로 20, 광운대학교 새빛관 804호'
    }
};