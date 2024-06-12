import { resourceUsage } from "process";

const DocsPage = ({
  params,
}: {
  params: {
    slug: string[];
  };
}) => {
  if (params.slug?.length === 2) {
    return (
      <h1>
        docs features {params.slug[0]} and concept {params.slug[1]}
      </h1>
    );
  } else if (params.slug?.length === 1) {
    return <h1>docs features {params.slug[0]}</h1>;
  }
  return <div>DocsPage</div>;
};

export default DocsPage;
