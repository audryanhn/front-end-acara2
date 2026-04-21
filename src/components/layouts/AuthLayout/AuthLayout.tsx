import PageHead from "@/components/commons/PageHead";
import { ReactNode } from "react";

interface propTypes {
  title: string;
  children: ReactNode;
}

const AuthLayout = (props: propTypes) => {
  const { title, children } = props;
  return (
    <>
      <PageHead title={title} />
      <section className="max-w-screen-3xl 3xl:container py-10 lg:py-0">
        {children}
      </section>
    </>
  );
};

export default AuthLayout;
