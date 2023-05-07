import PageHeader from "@components/pageHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Uses",
    alternates: {
        canonical: "https://www.daniel-pointecker.net/uses/"
    }
}

export default function UsesPage() {
    return (
        <>
            <div className="pb-20">
                <PageHeader>Uses</PageHeader>
                <p className="mt-4 text-center">under development</p>
            </div>
        </>
    );
}
