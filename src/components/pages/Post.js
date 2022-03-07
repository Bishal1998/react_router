import { useParams } from "react-router-dom";

const Post = () => {

    let {category, id} = useParams();
  return (
    <>
        <h1>Post - {category}</h1>
        <h1>Post Id - {id}</h1>
    </>
  )
}

export default Post