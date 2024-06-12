import { notFound } from "next/navigation";

const ReviewDetails = ({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) => {
  if (parseInt(params.reviewId) > 100) {
    notFound();
  }
  return (
    <div>
      Review {params.reviewId} from product {params.productId}
    </div>
  );
};

export default ReviewDetails;
