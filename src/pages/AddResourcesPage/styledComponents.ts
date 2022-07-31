import styled from "styled-components";

export const PageWrapper = styled.div`
  width: 100%;
  display: flex;
`;

export const FormContainer = styled.div`
  width: 50%;
  padding: 22px 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const BannerImg = styled.img`
  width: 100%;
`;

export const BannerContainer = styled.div`
  width: 50%;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const BackNavigation = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #7e858e;
  cursor: pointer;
  align-self: flex-start;
`;

export const AddResourcesForm = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormTitle = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  color: #171f46;
  margin-top: 100px;
  text-align: center;
`;

export const FormLabel = styled.label`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  color: #7e858e;
  margin-top: 32px;
  margin-bottom: 8px;
`;

export const FormInput: any = styled.input`
  padding: 8px 16px;
  width: 320px;
  background: #ffffff;
  border: 1px solid #d7dfe9;
  outline: none;
  border-radius: 2px;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: ${(p: any) => (p.isLink ? "#0B69FF" : "#171f46")};
`;

export const IconTitleRow = styled.div`
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #7e858e;
  margin-top: 32px;
`;

export const IconContainer = styled.div`
  background: #ffffff;
  border: 2px solid #d7dfe9;
  border-radius: 4px;
  padding: 8px;
  height: 44px;
  width: 44px;
  margin-right: 16px;
`;

export const Icon = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 4px;
`;

export const CreateButton = styled.button`
  padding: 8px 20px;
  background: ${(p) => (p.disabled ? "gray" : "#0b69ff")};
  border-radius: 4px;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: #ffffff;
  border: none;
  outline: none;
  align-self: center;
  cursor: ${(p) => (p.disabled ? "not-allowed" : "pointer")};
  margin-top: 80px;
`;
