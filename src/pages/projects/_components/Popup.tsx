import React from 'react';

interface PopupProps {
  onClose: () => void; // 팝업 닫기 이벤트 핸들러
}

const PopupComponent: React.FC<PopupProps> = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-30">
      <div className="w-[50%] h-[80%] bg-white m-4 rounded shadow-md relative">
        {/* 팝업 닫기 버튼 */}
        <button className="text-red-500 hover:text-red-700 absolute top-0 right-0 m-2" onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {/* 팝업 내용 */}
        <div className="h-full p-3 flex flex-col">
          <div id='title' className="font-roboto text-custom-navy py-4 border-2 border-solid border-white border-b-custom-blue text-xl" style={{ wordWrap: 'break-word' }}>
              제목 길면 아래로 줄넘김titlesfsdfsdfasdfasdzxcvzxcvdddddddddddddddddddddddddddddddddddd
          </div>
          <div id='content' className="font-roboto text-font-gray py-4 flex-1 overflow-y-auto">
              content
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupComponent;
