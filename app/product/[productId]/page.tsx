import { Metadata } from "next";

type Props = {
  params: {
    productId: string;
  };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iphone ${params.productId}`);
    });
  });
  return {
    title: `Product ${title}`,
  };
};

const ProductDetailsPage = ({ params }: Props) => {
  return <div>ProductDetailsPage{params.productId}</div>;
};

export default ProductDetailsPage;
