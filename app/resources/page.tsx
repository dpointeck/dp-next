import Head from "next/head";
import PageLayout from "../../layouts/pageLayout";
import PageHeader from "@components/pageHeader";

export default function ResourcesPage() {
  return (
    <>
      <Head>
        <title>Resources</title>
        <meta
          name="description"
          content="The resources page is still under development."
        />
        <link
          rel="canonical"
          href="https://www.daniel-pointecker.net/resources/"
        />
      </Head>
      <PageLayout>
        <div className="pb-20">
          <PageHeader>Resources</PageHeader>
          <p className="mt-4 text-center">coming soon</p>
        </div>
      </PageLayout>
    </>
  );
}
