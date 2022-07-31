import { notifyErrorToast } from "../../config/toastNotify";
import { PageButton, PaginationBgContainer } from "./styledComponents";

type CustomProps = {
  totalLength: number;
  activePage: number;
  setActivePage: React.Dispatch<React.SetStateAction<number>>;
};

const CustomPagination = (props: CustomProps) => {
  const { totalLength, activePage, setActivePage } = props;
  const totalPages = Math.ceil(totalLength / 9);
  // generate [0 to N] nums. here, [0, 1, 2, ...totalPages]
  const nums = [...Array(totalPages)].map((_, index) => index);

  const goToPreviousPage = () => {
    if (activePage - 1 >= 0) setActivePage(activePage - 1);
    else notifyErrorToast("Reached to First page");
  };
  const goToNextPage = () => {
    if (activePage + 1 < totalPages) setActivePage(activePage + 1);
    else notifyErrorToast("Reached to Last page");
  };

  return (
    <PaginationBgContainer>
      {totalPages > 3 && (
        <PageButton key="prev" onClick={goToPreviousPage}>
          <i className="fa-solid fa-angle-left"></i>
        </PageButton>
      )}
      {nums.map((n) => (
        <PageButton
          key={n}
          onClick={() => setActivePage(n)}
          isActive={activePage === n}
        >
          {n + 1}
        </PageButton>
      ))}
      {totalPages > 3 && (
        <PageButton key="next" onClick={goToNextPage}>
          <i className="fa-solid fa-angle-right"></i>
        </PageButton>
      )}
    </PaginationBgContainer>
  );
};

export default CustomPagination;
