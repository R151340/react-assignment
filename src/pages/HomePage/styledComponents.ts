import styled from "styled-components";

export const FullVH = styled.div`
  min-height: 100vh;
  background-color: #f5f5f5;
`;

export const HomePageContainer = styled.div`
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const CardsContainer = styled.ul`
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: center;
`;

export const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  max-width: 648px;
  background: #ffffff;
  border: 1px solid #d7dfe9;
  border-radius: 3px;
  padding: 8px 16px;
  font-size: 14px;
  margin: 0 auto;
  margin-bottom: 32px;
`;

export const SearchBox = styled.input`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  margin-left: 16px;
  width: 100%;
  border: none;
  outline: none;
`;
