import AuthLayout from "@/components/layouts/AuthLayout";
import Register from "@/components/views/Register";

const AuthRegister = () => {
  return (
    <>
      <AuthLayout title="Auth | Register">
        <Register />
      </AuthLayout>
    </>
  );
};

export default AuthRegister;
