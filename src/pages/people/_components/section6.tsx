import React from 'react';

// Developer internship 부분

const developerInternshipData = [
  {name: '이지은',
    department: '정보융합학부 4학년',
    interests: ['#back-end', '#spring', '#HCI'],
    imageUrl: 'src/assets/images/people/이지은.png',
  },
  {name: '이종민',
    department: '정보융합학부 4학년',
    interests: ['#full-stack', '#AI'],
    imageUrl: 'src/assets/images/people/이종민.png',
  },
  {name: '이건희',
    department: '정보융합학부 4학년',
    interests: ['#full-stack', '#spring'],
    imageUrl: 'src/assets/images/people/이건희.png',
  },
  {name: '고석환',
    department: '정보융합학부 4학년',
    interests: ['#front-end', '#react'],
    imageUrl: 'src/assets/images/people/고석환.png',
  },
  {name: '서대원',
    department: '정보융합학부 4학년',
    interests: ['#front-end', '#react'],
    imageUrl: 'src/assets/images/people/서대원.png',
  },
  {name: '홍유진',
    department: '정보융합학부 3학년',
    interests: ['#front-end', '#react'],
    imageUrl: 'src/assets/images/people/홍유진.png',
  },
  {name: '이승훈',
    department: '정보융합학부 4학년',
    interests: ['#front-end', '#mobile'],
    imageUrl: 'src/assets/images/people/이승훈.png',
  },
  {name: '강준우',
    department: '정보융합학부 3학년',
    interests: ['#FullStack'],
    imageUrl: 'src/assets/images/people/강준우.png',
  },
  {name: '박준수',
    department: '정보융합학부 4학년',
    interests: ['#FullStack', '#ML', '#기획', '#HumanFactors'],
    imageUrl: 'src/assets/images/people/박준수.png',
  },
];

function Section6() {
  return (
    <section className='relative w-full	h-[700px] left-0 right-0'>
      <div className='absolute h-[650px] w-[1000px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-roboto text-custom-navy'>
        <div className='absolute h-[50px] w-full border-b-2 border-custom-blue'>
          <h2 className='absolute flex items-center text-3xl font-semibold tracking-widest'>Undergraduate Researchers</h2>
        </div>
        <div className="flex flex-row relative top-[50px]">
          {developerInternshipData.slice(0, 5).map((person, index) => (
            <div key={index} className='flex flex-col items-center justify-center'>
              <img src={person.imageUrl} alt={`${person.name} 이미지`} className='w-[160px] h-[160px] object-cover mx-5 my-4'/>
              <p className='font-bold'>{person.name}</p>
              <p className='text-sm p-1'>{person.department}</p>
              <p className='text-sm text-font-gray w-[140px] h-[50px] text-center items-center flex justify-center items-center'>{person.interests.join(' ')}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-row relative top-[50px]">
          {developerInternshipData.slice(5, 9).map((person, index) => (
            <div key={index} className='flex flex-col items-center justify-center'>
              <img src={person.imageUrl} alt={`${person.name} 이미지`} className='w-[160px] h-[160px] object-cover mx-5 my-4'/>
              <p className='font-bold'>{person.name}</p>
              <p className='text-sm p-1'>{person.department}</p>
              <p className='text-sm text-font-gray w-[140px] h-[50px] text-center items-center flex justify-center items-center'>{person.interests.join(' ')}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Section6;