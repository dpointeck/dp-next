import { getAllPosts } from "@lib/post";

async function fetchPosts() {
    return await getAllPosts();
}


export default async function Page() {
    const post = await fetchPosts()


    console.log(post)

    return <div>Blog</div>;
}
