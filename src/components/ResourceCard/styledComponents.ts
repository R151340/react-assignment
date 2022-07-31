import styled from "styled-components";

export const CardBgContainer = styled.li`
  background: #ffffff;
  border: 1px solid #d7dfe9;
  border-radius: 4px;
  padding: 24px;
  padding-bottom: 8px;
  width: 360px;
`;

export const IconTitleRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const IconContainer = styled.div`
  background: #ffffff;
  border: 2px solid #d7dfe9;
  border-radius: 4px;
  padding: 8px;
  height: 48px;
  width: 48px;
  margin-right: 16px;
`;

export const Icon = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 4px;
`;

export const Title = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #171f46;
`;

export const Subtitle = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #7e858e;
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: ${(p: any) => (p.as === "a" ? "#0B69FF" : "#7e858e")};
  word-wrap: break-word;
`;
