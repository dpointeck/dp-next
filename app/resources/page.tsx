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
            <div>
                <PageHeader>Resources</PageHeader>
                <p>coming soon</p>
            </div>
        </>
    );
}
