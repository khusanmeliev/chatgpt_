import React, { useState } from "react";
import { api } from "../api/api";
import { ENDPOINTS } from "../api/endpoins";
import {
  ChatMessageType,
  ChatResponseType,
  MessageRequestBodyType,
  MessageResponseType,
} from "../types";
import {
  Button,
  ChattingBox,
  Input,
  Name,
  ProfileBox,
  ProfilePhoto,
  Question,
  Response,
  SendMessageBox,
  Wrapper,
} from "./styles";

const Chatting = () => {
  const [message, setMessage] = useState<string>("");
  const [chatMessages, setChatMessages] = useState<ChatMessageType[]>([]);
  const [chatGptResponse, setChatGptResponse] = useState<MessageResponseType>();
  const [typing, setTyping] = useState<boolean>(false);

  const handleNewUserImage = async () => {
    setChatGptResponse(undefined);
    setTyping(true);
    const requestBody: MessageRequestBodyType = {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }],
    };

    const response = await api.post(ENDPOINTS.chatCompletions, requestBody);
    const chatResponse: ChatResponseType = response.data;
    setChatGptResponse(chatResponse.choices[0].message);
    setChatMessages([
      ...chatMessages,
      {
        question: message,
        response: chatResponse.choices[0].message,
      },
    ]);
    setMessage("");
    setTyping(false);
  };

  return (
    <div>
      <Wrapper>
        <ProfileBox>
          <ProfilePhoto src="https://imageio.forbes.com/specials-images/imageserve/64213c10fc7ed6f0a3eb47ae/The-Intersection-Of-AI-And-Human-Creativity--Can-Machines-Really-Be-Creative-/960x0.jpg?format=jpg&width=960" />
          <div>
            <Name>ChatGPT</Name>
            {typing && <p style={{ color: "white" }}>typing...</p>}
          </div>
        </ProfileBox>
        <ChattingBox>
          {chatMessages.map((chatMSG, index) => (
            <div key={index}>
              <Question>
                <p>{chatMSG.question}</p>
              </Question>
              <Response>
                <p>{chatMSG.response.content}</p>
              </Response>
            </div>
          ))}
        </ChattingBox>
        <SendMessageBox>
          <Input
            type="text"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            placeholder="enter..."
          />
          <Button onClick={handleNewUserImage}>send</Button>
        </SendMessageBox>
      </Wrapper>
    </div>
  );
};

export default Chatting;
