import { useEffect } from "react";
import Header from "../components/Header";
import { getAllPosts } from "../components/services/api";
const AllPosts = () => {

    useEffect(() => {
        const getData = async () => {
            await getAllPosts();
        }
        getData();
    }, [])
    return (
        <>
        <Header/>
        </>
    )
}
export default AllPosts;