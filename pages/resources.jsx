import Head from "next/head";
import PageLayout from "../layouts/pageLayout";
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
      </Head>
      <PageLayout>
        <div className="pb-20">
          <PageHeader>Resources</PageHeader>
          <p class="mt-4 text-center">under development</p>
        </div>
      </PageLayout>
    </>
  );
}