import OpenAI from 'openai';


const openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_KEY,
    dangerouslyAllowBrowser: true // This is the default and can be omitted
});

// const response = await client.responses.create({
//     model: 'gpt-4o',
//     instructions: 'You are a coding assistant that talks like a pirate',
//     input: 'Are semicolons optional in JavaScript?',
// });

export default openai;