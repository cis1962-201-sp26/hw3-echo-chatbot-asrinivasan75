[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/be_2yLDO)
# Homework 3: Echo ChatBot Reflection

## How many hours did you spend working on this homework?

Around 3 hours.

## What challenges/roadblocks did you face during this homework?

Getting the localStorage persistence to work correctly with the chat state took a bit of debugging. I initially had issues where the chat would not reload properly because I was forgetting to parse the JSON string back into an object. I also spent some time figuring out how to keep the send button disabled when the input is empty, including re-disabling it after a message is sent. Flexbox layout for the chat bubbles (aligning user messages to the right and bot messages to the left) required some trial and error with align-self.

## Did you use AI/LLM tools for this assignment? If so, please provide a transcript or document your usage extensively below. If you did use AI, please explain why you decided to use AI for the task you used it for, what you learned from the AI responses, and explain any relevant unfamiliar terms and concepts that the AI responses generated.

Yes, I used ChatGPT briefly to help me understand TypeScript type assertions when working with DOM elements. I was confused about why `document.getElementById('chat-input')` was returning `HTMLElement | null` instead of an `HTMLInputElement`, and I couldn't access the `.value` property on it without TypeScript throwing an error. I asked ChatGPT to explain how to handle this, and it explained the concept of type assertions using the `as` keyword.