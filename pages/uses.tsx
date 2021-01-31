import Head from "next/head";
import PageLayout from "../layouts/pageLayout";
import PageHeader from "@components/pageHeader";

export default function UsesPage() {
  return (
    <>
      <Head>
        <title>Uses</title>
        <link
          rel="canonical"
          href="https://https://www.daniel-pointecker.net/uses/"
        />
      </Head>
      <PageLayout>
        <div className="pb-20">
          <PageHeader>Uses</PageHeader>
          <p className="mt-4 text-center">under development</p>
        </div>
      </PageLayout>
    </>
  );
}
