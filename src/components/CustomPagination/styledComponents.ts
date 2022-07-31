import styled from "styled-components";

export const PaginationBgContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 24px auto 4px auto;
`;

export const PageButton: any = styled.button`
  border-radius: 4px;
  padding: 8px 12px;
  margin: 0 8px;
  background-color: white;
  border: ${(p: any) => (p.isActive ? "1px solid black" : "1px solid #d7dfe9")};
  outline: none;
  cursor: pointer;
  box-shadow: 0 0 5px #d7dfe9;
  transition: 0.3s all;
  &:active {
    transform: scale(0.8);
  }
`;
