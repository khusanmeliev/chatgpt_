export type MessageResponseType = {
  role: "user" | "assistant";
  content: string;
};

export type ChatMessageType = {
  response: MessageResponseType;
  question: string;
};

export type MessageRequestBodyType = {
  model: string;
  messages: MessageResponseType[];
};

export type ChoiceType = {
  finish_reason: string;
  index: number;
  message: MessageResponseType;
};

export type ChatResponseType = {
  choices: ChoiceType[];
  created: number;
  id: string;
  model: string;
  object: string;
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
};
