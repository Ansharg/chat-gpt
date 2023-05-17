import React from 'react'
import image from '../Asests/Images/spinner.gif'

const AnswerSection = ({ storedValues }) => {
    const copyText = (text) => {
        navigator.clipboard.writeText(text);
    };

    return (
        <>
            <hr className="hr-line" />
            <div className="answer-container">
                {storedValues.map((value, index) => {
                    return (
                        <div className="answer-section my-[30px] relative" key={index}>
                            <p className=" bg-[#cf7a19] p-[20px]">{value.question}</p>
                            <img src={image} alt="Cooking" className='h-56' />
                            <p className=" bg-[rgb(79,54,25)] p-[20px]">{value.answer}</p>
                            <div
                                className="copy-icon absolute bg-black w-[50px] h-[50px] rounded-[5px] flex justify-center items-center bottom-[-10px] right-[-10px] text-[1.2rem] cursor-pointer hover:bg-[#cf7a19]"
                                onClick={() => copyText(value.answer)}
                            >
                                <i className="fa-solid fa-copy"></i>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    )
}

export default AnswerSection