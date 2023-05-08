
import { usePathname } from "next/navigation";
import { getPostBySlug, getAllPosts } from "@lib/post";
import { Context } from "vm";

type PageProps = {
    params: { slug: string }
}

export default async function Page({ params }: PageProps) {

    const slug = params.slug;
    const post = await getPostBySlug(slug);

    return (
        <>
            <div className="relative z-50">
                <h1 className="text-center text-3xl md:text-4xl font-bold">
                    {post !== false && post.title}
                </h1>
                {
                    post !== false && <article
                        className="prose max-w-2xl mx-auto relative z-50 mt-8 dark:prose-invert"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    ></article>
                }

            </div>
        </>
    );
}