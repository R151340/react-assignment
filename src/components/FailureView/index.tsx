import {
  FailureHeading,
  FailureImg,
  FailureText,
  FailureViewContainer,
  RetryBtn,
} from "./styledComponents";

type CustomProps = {
  retryMethod: () => void;
};

const FailureView = ({ retryMethod }: CustomProps) => {
  return (
    <FailureViewContainer>
      <FailureImg
        alt="failure view"
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
      />
      <FailureHeading>Oops! Something Went Wrong</FailureHeading>
      <FailureText>
        We are having some trouble to complete your request. Please try again.
      </FailureText>
      <RetryBtn type="button" onClick={() => retryMethod()}>
        Retry
      </RetryBtn>
    </FailureViewContainer>
  );
};

export default FailureView;
