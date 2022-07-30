import { PageButton, PaginationBgContainer } from "./styledComponents";

type CustomProps = {
  totalLength: number;
  activePage: number;
  setActivePage: React.Dispatch<React.SetStateAction<number>>;
};

const CustomPagination = ({
  totalLength,
  activePage,
  setActivePage,
}: CustomProps) => {
  const totalPages = Math.ceil(totalLength / 9);
  // generate 0 to N nums.
  const nums = [...Array(totalPages)].map((_, index) => index);

  return (
    <PaginationBgContainer>
      {totalPages > 3 && (
        <PageButton key="first" onClick={() => setActivePage(0)}>
          <i className="fa-solid fa-angles-left"></i>
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
        <PageButton key="last" onClick={() => setActivePage(totalPages - 1)}>
          <i className="fa-solid fa-angles-right"></i>
        </PageButton>
      )}
    </PaginationBgContainer>
  );
};

export default CustomPagination;
