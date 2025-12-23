import PageHeader from "components/pageHeader";
import { Metadata } from "next";
import { getData } from "lib/uses";

export const metadata: Metadata = {
    title: "Uses",
    alternates: {
        canonical: "https://www.daniel-pointecker.net/uses"
    }
}

export default async function UsesPage() {
    const usesData = await getData();
    console.log(usesData);
    return (
        <>
            <div className="pb-20">
                <PageHeader>Uses</PageHeader>
                <section>
                    <h2>Tech</h2>
                    <ul>
                        {usesData.equiptment.map((item: string) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </section>
                <section>
                    <h2>Software</h2>
                    <ul>
                        {usesData.software.map((item: string) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </section>
                <section>
                    <h2>EDC</h2>
                    <ul>
                        {usesData.edc.map((item: string) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </section>
            </div>
        </>
    );
}
