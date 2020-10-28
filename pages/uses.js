import { Helmet } from "react-helmet";
import PageLayout from "../layouts/pageLayout";
import PageHeader from "@components/pageHeader";

export default function UsesPage() {
  return (
    <>
      <Helmet>
        <title>Uses</title>
      </Helmet>
      <PageLayout>
        <div className="pb-20">
          <PageHeader>Uses</PageHeader>
          <p class="mt-4 text-center">under development</p>
        </div>
      </PageLayout>
    </>
  );
}
