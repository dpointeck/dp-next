import { Helmet } from "react-helmet";

import PageLayout from "../layouts/pageLayout";
import PageHeader from "@components/pageHeader";

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>
      <PageLayout>
        <div className="pt-0 pb-20">
          <PageHeader>About</PageHeader>
          <article className="prose max-w-3xl mx-auto relative z-50 mt-8">
            <h2>Hi there 👋 I'm Daniel Pointecker </h2>
            <p>
              I'm a self taught web developer from Schärding, Upper Austria 🇦🇹.
              <br />
              I'm makeing websites since 2014.
            </p>
            <p>
              I love working in webdevelopment because our business is in
              constant change and there is always new stuff to learn. My day to
              day tools are HTML, CSS, Javasript and PHP. At the moment I'm
              studying golang and try to implement tests in my day to day work.
            </p>
          </article>
        </div>
      </PageLayout>
    </>
  );
}
