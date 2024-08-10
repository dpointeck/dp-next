import { Metadata } from "next";
import { getPostBySlug } from "lib/post";

type PageProps = {
    params: { slug: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    // read route params
    const slug = params.slug;
    const { title, metadesc } = await getPostBySlug(slug);

    return {
        title: title,
        description: metadesc,
        alternates: {
            canonical: `https://www.daniel-pointecker.net/journal/${slug}`
        }
    };
}

export default async function Page({ params }: PageProps) {

    const slug = params.slug;
    const { title, content } = await getPostBySlug(slug);

    return (
        <>
            <div>
                <h1>
                    { title }
                </h1>
                <article
                    dangerouslySetInnerHTML={{ __html: content }}
                ></article>
            </div>
        </>
    );
}