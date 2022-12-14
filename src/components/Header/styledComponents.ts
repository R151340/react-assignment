import styled from "styled-components";

export const HeaderBgContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 72px;
  padding: 16px 32px;
  border-bottom: 1px solid #d7dfe9;
  background-color: white;
`;

export const WebsiteLogo = styled.img`
  width: 82px;
  height: 40px;
`;

export const ProfilePhoto = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  cursor: pointer;
`;

export const AddButton = styled.button`
  background-color: #0b69ff;
  padding: 8px 20px;
  border: none;
  margin-right: 16px;
  border-radius: 4px;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: white;
  cursor: pointer;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
