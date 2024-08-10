import PageHeader from "components/pageHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Site Notice",
    alternates: {
        canonical: "https://www.daniel-pointecker.net/site-notice"
    }
}

export default function SiteNoticePage() {
    return (
        <>
            <div>
                <PageHeader>Site Notice</PageHeader>
                <article>
                    <h2>Daniel Pointecker</h2>
                    <p>
                        <b>Site description:</b> Portfolio & Blog for me - Daniel
                        Pointecker
                    </p>
                    <p>
                        <b>Address:</b> 4776 Diersbach, Großwaging 10 | Austria
                    </p>
                    <p>
                        <b>E-Mail:</b> daniel.pointecker@gmail.com
                    </p>
                </article>
            </div>
        </>
    );
}
