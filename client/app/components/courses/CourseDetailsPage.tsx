import { useEffect, useState } from "react";
import Loader from "../loader/Loader";
import Heading from "@/app/utils/Heading";
import Header from "../Header";
import CourseDetails from "./CourseDetails";
import Footer from "../Footer";
import { loadStripe } from "@stripe/stripe-js";
import { useGetCourseDetailsQuery } from "@/redux/features/courses/coursesApi";
import {
  useCreatePaymentIndentMutation,
  useGetStripePublishablekeyQuery,
} from "@/redux/features/orders/ordersApi";

type Props = {
  id: string;
};

const CourseDetailsPage = ({ id }: Props) => {
  const [route, setRoute] = useState("Login");
  const [open, setOpen] = useState(false);
  const { data, isLoading } = useGetCourseDetailsQuery(id);
  const { data: config } = useGetStripePublishablekeyQuery({});
  const [stripePromise, setStripePromise] = useState<any>(null);
  const [clientSecret, setClientSecret] = useState("");
  const [createPaymentIndent, { data: paymentIndentData }] =
    useCreatePaymentIndentMutation();

  useEffect(() => {
    if (config) {
      const publishablekey = config?.publishablekey;
      setStripePromise(loadStripe(publishablekey));
    }
    if (data) {
      const amount = Math.round(data.course.price * 100);
      createPaymentIndent(amount);
    }
  }, [data, config]);

  useEffect(() => {
    if (paymentIndentData) {
      setClientSecret(paymentIndentData?.client_secret);
    }
  }, [paymentIndentData]);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Heading
            title={data.course.name + " - ScholarNet"}
            description={
              "ScholarNet is a programming community which is developed by Unknown for helping programmers."
            }
            keywords={data?.course?.tags}
          />
          <Header
            route={route}
            setRoute={setRoute}
            open={open}
            setOpen={setOpen}
            activeItem={1}
          />
          {stripePromise && (
            <CourseDetails
              data={data?.course}
              stripePromise={stripePromise}
              clientSecret={clientSecret}
            />
          )}
          <Footer />
        </div>
      )}
    </>
  );
};

export default CourseDetailsPage;
