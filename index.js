import openai from './config/open-ai.js';
import readlineSync from 'readline-sync';
import colors from 'colors';

async function main() {
  console.log(colors.bold.green(`Welcome to the Chatbot Program!`));
  console.log(colors.bold.green(`Ask me Anything!!!`));
  // Initialize chat history
  const chatHistory = [];
  while(true){
    const userInput = readlineSync.question(colors.yellow('You: '));
  
    try{
      // construct messages by iterating over the history
      const messages = chatHistory.map(([role, content]) => ({ role, content }))
      // Add the latest user input to the messages
      messages.push({ role: 'user', content: userInput });

        // Call the API with user input
        const completion = await openai.createChatCompletion({
          model: 'gpt-3.5-turbo',
          messages: messages,
        });
        // Get response from the API
        const completionText = completion.data.choices[0].message.content;

      if (userInput.toLowerCase() == 'exit'){
      console.log(colors.green('Bot: ')+completionText);
        return;
      }
      console.log(colors.green('Bot: ')+completionText);

      //update history with user input and bot response
      chatHistory.push(['user', userInput]);
      chatHistory.push(['assistant', completionText]);
    } catch (error) {
        console.error(colors.red.bold(error));
      }

    }}
main();