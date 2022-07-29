import styled from "styled-components";

export const TabsContainer = styled.span`
  margin: 0 auto;
  width: 100%;
  max-width: 600px;
  border: 1px solid #d7dfe9;
  display: flex;
  border-radius: 4px;
  margin-top: 46px;
  margin-bottom: 32px;
  background-color: #d7dfe93d;
`;

export const SingleTab: any = styled.span`
  background-color: ${(p: any) => (p.active ? "#0B69FF" : "#D7DFE93D")};
  color: ${(p: any) => (p.active ? "#ffffff" : "#171F46")};
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  border: 1px solid #d7dfe9;
  border-radius: 4px;
  flex-grow: 1;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
