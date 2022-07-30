import styled from "styled-components";

export const PaginationBgContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 8px auto;
`;

export const PageButton: any = styled.button`
  border-radius: 4px;
  padding: 8px 12px;
  margin: 0 8px;
  background-color: ${(p: any) => (p.isActive ? "#0b69ff" : "white")};
  color: ${(p: any) => (p.isActive ? "white" : "black")};
  border: ${(p: any) => (p.isActive ? "none" : "1px solid #d7dfe9")};
  outline: none;
  cursor: pointer;
  box-shadow: 0 0 5px #d7dfe9;
`;
