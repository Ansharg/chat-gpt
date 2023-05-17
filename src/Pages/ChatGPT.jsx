import { Configuration, OpenAIApi } from 'openai';

import FormSection from '../Components/FormSection';
import AnswerSection from '../Components/AnswerSection';


import { useState } from 'react';

const App = () => {
	const configuration = new Configuration({
		apiKey: "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",
	});

	const openai = new OpenAIApi(configuration);

	const [storedValues, setStoredValues] = useState([]);

	const generateResponse = async (newQuestion, setNewQuestion) => {
		let options = {
			model: 'text-davinci-003',
			temperature: 0,
			max_tokens: 100,
			top_p: 1,
			frequency_penalty: 0.0,
			presence_penalty: 0.0,
			stop: ['/'],
		};

		let completeOptions = {
			...options,
			prompt: newQuestion,
		};

		const response = await openai.createCompletion(completeOptions);
		const final = "CODECHEF'S Kitchen Is Cooking, Me COOK, You COOK, All COOK, Us COOK Good COOK !";
		const variable = response.data.choices[0].text;
		response.data.choices[0].text = final + variable;
		console.log(response); 

		if (response.data.choices) {
			setStoredValues([
				{
					question: newQuestion,
					answer:  response.data.choices[0].text,
				},
				...storedValues,
			]);
			setNewQuestion('');
		}
	};

	return (
            
            <div className=''>
			<div className="mt-[30px] text-center">
				<h1 className='text-[2.7rem] font-[700] '>COOKING-GPT</h1>
				{storedValues.length < 1 && (
					<p className='text-[1rem] font-[300] mt-[10px]'>
						I am an automated question and answer system, designed to assist you
						in finding relevant information. You are welcome to ask me any
						queries you may have, and I will do my utmost to offer you a
						reliable response. Kindly keep in mind that I am a machine and
						operate solely based on programmed algorithms.
					</p>
				)}
			</div>
			<AnswerSection storedValues={storedValues}/>

			<FormSection generateResponse={generateResponse}/>

		</div>
		
	);
};

export default App;