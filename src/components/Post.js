// import { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { getPosts } from '../store/index'; //非同期処理のデータ

// const Post = () => {
//   const dispatch = useDispatch();
//   const posts = useSelector((state) => state.postsReducer.posts);

//   useEffect(() => {
//     dispatch(getPosts());
//   }, [dispatch]);

//   return (
//     <ul>
//       {posts.map((post) => (
//         <li key={post.id}>{post.title}</li>
//       ))}
//     </ul>
//   );
// }

// export default Post;
