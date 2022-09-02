import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchDisLikes,
  fetchLikes
} from "../../features/likeDislike/likeDislikeSlice";

export default function LikeUnlike({ likes, unlikes }) {
  const amount = 1;
  const { videoId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {}, [likes, unlikes]);

  const isLiked = () => {
    dispatch(fetchLikes({ videoId, amount, likes }));
  };
  const isDisLiked = () => {
    dispatch(fetchDisLikes({ videoId, amount, unlikes }));
  };
  // const state = useSelector(
  //   (state) => state
  // );
  // console.log(state);
  return (
    <div className="flex gap-10 w-48">
      <div className="flex gap-1">
        <div className="shrink-0">
          {/* <img className="w-5 block" src={likeImage} alt="Like" /> */}
          <span className="w-5 block cursor-pointer" onClick={isLiked}>
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-thumbs-up"
            >
              <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
            </svg>
          </span>
        </div>
        <div className="text-sm leading-[1.7142857] text-slate-600 mx-1">
          {likes}
        </div>
      </div>
      <div className="flex gap-1">
        <div className="shrink-0">
          {/* <img className="w-5 block" src={unlikeImage} alt="Unlike" /> */}
          <span className="w-5 block cursor-pointer" onClick={isDisLiked}>
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.9159 13.3371L13.6607 20.7609C13.21 21.7888 12.0001 22.3199 11.0189 21.7944C9.4919 20.9766 9.79819 20.2101 9.79819 15.3984H4.03407C2.78769 15.3984 1.83456 14.2723 2.02408 13.0237L3.43199 3.74785C3.58461 2.74229 4.43823 2 5.44198 2H16.9159M16.9159 13.3371V2M16.9159 13.3371H19.9664C21.0895 13.3371 22 12.4143 22 11.2758V4.06132C22 2.9229 21.0895 2.00003 19.9664 2.00003L16.9159 2"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
        <div className="text-sm leading-[1.7142857] text-slate-600 mx-1">
          {unlikes}
        </div>
      </div>
    </div>
  );
}
