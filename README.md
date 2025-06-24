# ChatGPT Node.js Chatbot 🤖

This project is a command-line chatbot built with **Node.js** that leverages the **OpenAI API** to enable intelligent conversational interactions. It demonstrates how to integrate a language model into a JavaScript backend and handle real-time user input through the terminal.

The application uses the `readline` module to capture user input and sends it to the OpenAI GPT model via HTTP requests using the `axios` library. Responses are parsed and displayed directly in the terminal, providing a smooth and responsive chat experience. API credentials are securely managed using the `dotenv` package to load environment variables.

To run the chatbot locally, clone the repository and install the required dependencies using `npm install`. Then, create a `.env` file in the root directory with your OpenAI API key.

This setup provides a clean and extensible foundation for building more advanced AI-powered tools or integrating conversational agents into other applications.
