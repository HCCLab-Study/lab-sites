import React from "react";

// 동아리 title
function Section1 () {

    return (
        <section className='relative w-full	h-[250px] left-0 right-0 bg-gradient-to-br from-custom-red to-custom-blue'>
        <div className="absolute bottom-0 inset-x-0 font-roboto font-bold text-5xl leading-6 flex items-center justify-center text-white" style={{ marginBottom: '50px' }}>
          전공동아리 CHIC
        </div>
      </section>
    );
}

export default Section1;