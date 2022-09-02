import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearAll } from "../../features/filter/filterSlice";
import { fetchTags } from "../../features/tags/tagsSlice";
import Tag from "./Tag";

export default function Tags() {
  const { tags } = useSelector((state) => state.tags);
  const { tags: fTags, search, authors } = useSelector((state) => state.filter);
  console.log(fTags, search, authors);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTags());
  }, [dispatch]);

  return tags?.length > 0 ? (
    <section className="flex justify-center items-center">
      <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
        {tags.map((tag) => (
          <Tag key={tag.id} title={tag.title} />
        ))}
      </div>
      <div
        className={`pr-40 ${
          fTags.length > 0 || search || authors ? "block" : "hidden"
        }`}
      >
        <button
          className="bg-red-500 p-2 text-white rounded"
          onClick={() => dispatch(clearAll())}
        >
          Clear Filter
        </button>
      </div>
    </section>
  ) : null;
}
