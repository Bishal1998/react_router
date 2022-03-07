import { useParams, useSearchParams } from "react-router-dom";

const Post = () => {

    let {category, id} = useParams();
    let [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams)
    console.log(searchParams.get('price'));
  return (
    <>
        <h1>Post - {category}</h1>
        <h1>Post Id - {id}</h1>
    </>
  )
}

export default Post