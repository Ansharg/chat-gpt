import { useState } from 'react';

const FormSection = ({ generateResponse }) => {
    const [newQuestion, setNewQuestion] = useState('');

    return (
        <div className="mt-[30px]">
            <textarea
                rows="5"
                className="form-control w-[100%] rounded-[5px] mb-[20px] p-[20px] text-[1rem] outline-0 bg-[rgb(79,54,25)] text-[#DADADB]"
                placeholder="Ask me anything..."
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
            ></textarea>
            <button className="btn w-[100%] rounded-[5px] bg-black text-[#DADADB] py-[20px] text-[1.2rem] font-[500] cursor-pointer" onClick={() => generateResponse(newQuestion, setNewQuestion)}>
                COOK 🍳
            </button>
        </div>
    )
}

export default FormSection