import styled from "styled-components";

export const TabsContainer = styled.span`
  margin: 0 auto;
  width: 100%;
  max-width: 600px;
  border: 2px solid #d7dfe9;
  display: flex;
  border-radius: 4px;
  margin-top: 46px;
  margin-bottom: 32px;
  background-color: #d7dfe9;
  gap: 3px;
`;

export const SingleTab: any = styled.span`
  background-color: ${(p: any) => (p.active ? "#0B69FF" : "#e7ebf0")};
  color: ${(p: any) => (p.active ? "#ffffff" : "#171F46")};
  box-shadow: ${(p: any) => (p.active ? "0 0 10px gray" : "none")};
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  flex-grow: 1;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
