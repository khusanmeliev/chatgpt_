import styled from "styled-components";

export const Wrapper = styled.div`
  width: 500px;
  height: 600px;
  background-color: #474242;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 20px;
`;

export const ProfileBox = styled.div`
  width: 95%;
  height: 10%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid white;

  div {
    display: flex;
    flex-direction: column;
    margin: 0px 10px;
  }
`;

export const ProfilePhoto = styled.img`
  width: 50px;
  height: 40px;
  border-radius: 50%;
  margin: 0px 10px;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 700;
`;

export const ChattingBox = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  overflow: auto;
  overscroll-behavior: contain;

  div {
    width: 100%;
    margin-top: 20px 20px;
  }
`;

export const Question = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: white;

  P {
    width: auto;
    font-size: 15px;
    background-color: #65ccef;
    padding: 10px;
    margin: 0px 10px;
    border-radius: 10px;
  }
`;

export const Response = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: grey;

  P {
    width: auto;
    font-size: 15px;
    background-color: #2a2e3f;
    padding: 10px;
    border-radius: 10px;
    margin: 10px 10px;
  }
`;

export const SendMessageBox = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-top: 1px solid white;
`;

export const Input = styled.input`
  width: 600px;
  height: 50px;
  text-indent: 10px;
  border-radius: 10px;
  border: none;
  outline: none;
  background-color: #2a2e3f;
  color: white;
`;

export const Button = styled.button`
  width: 60px;
  height: 50px;
  border-radius: 10px;
  border: none;
  background-color: #65ccef;
`;
