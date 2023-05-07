// import { GetStaticPaths } from "next";
// import { useRouter } from "next/router";

// import Head from "next/head";
// import { getPostBySlug, getAllPosts } from "../../../lib/post";
// import { Context } from "vm";

// export default function Post(props: any) {
//     const router = useRouter();

//     return (
//         <>
//             <Head>
//                 <title>{props.title}</title>
//                 <meta name="description" content={props.metadesc} />
//                 <link
//                     rel="canonical"
//                     href={`https://www.daniel-pointecker.net${router.asPath}`}
//                 />
//             </Head>
//             <div className="relative z-50">
//                 <h1 className="text-center text-3xl md:text-4xl font-bold">
//                     {props.title}
//                 </h1>
//                 <article
//                     className="prose max-w-2xl mx-auto relative z-50 mt-8 dark:prose-invert"
//                     dangerouslySetInnerHTML={{ __html: props.content }}
//                 ></article>
//             </div>
//         </>
//     );
// }

// export async function getStaticProps(ctx: Context) {
//     return {
//         props: await getPostBySlug(ctx.params.slug),
//     };
// }

// export const getStaticPaths: GetStaticPaths = async function () {
//     const paths = await getAllPosts();
//     let postPaths = paths.map((post: any) => ({
//         params: {
//             slug: post.slug,
//         },
//     }));
//     return {
//         paths: postPaths,
//         fallback: false,
//     };
// };

export default function Page() {
    return <div>Test</div>
}