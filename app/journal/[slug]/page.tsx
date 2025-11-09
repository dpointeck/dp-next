import { Metadata } from "next";
import { getPostBySlug } from "lib/post";

type PageProps = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    // Await params to access the slug property
    const { slug } = await params;
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
    // Await params to access the slug property
    const { slug } = await params;
    const { title, content } = await getPostBySlug(slug);

    return (
        <>
            <div className="relative z-50">
                <h1 className="text-center text-3xl md:text-4xl font-bold">
                    {title}
                </h1>
                <article
                    className="prose max-w-2xl mx-auto relative z-50 mt-8 dark:prose-invert"
                    dangerouslySetInnerHTML={{ __html: content }}
                ></article>
            </div>
        </>
    );
}