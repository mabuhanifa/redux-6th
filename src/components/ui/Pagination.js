export default function Pagination({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
}) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log(postsPerPage, totalPosts, paginate);
  return (
    <nav className="mt-20">
      <ul className="flex justify-center">
        {pageNumbers.map((number, index) => (
          <li key={index} className="mx-5">
            <button
              onClick={() => paginate(number)}
              className={
                number === currentPage
                  ? "bg-blue-500 px-3 py-2 text-white rounded-xl"
                  : "px-3 py-2 rounded-xl bg-gray-200"
              }
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
