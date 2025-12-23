import PageHeader from "components/pageHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Resources",
    alternates: {
        canonical: "https://www.daniel-pointecker.net/resources"
    }
}

export default function ResourcesPage() {
    return (
        <>
            <div className="pb-20">
                <PageHeader>Resources</PageHeader>
                <p className="mt-4 text-center">coming soon</p>
            </div>
        </>
    );
}
