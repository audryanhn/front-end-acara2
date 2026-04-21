import authServices from "@/service/auth";
import { IRegister } from "@/types/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const registerSchema = yup.object().shape({
  fullName: yup.string().required("please input fullname"),
  username: yup.string().required("please input username"),
  email: yup.string().required("please input email").email(),
  password: yup
    .string()
    .min(8, "password at least 8 characters")
    .required("please input password"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), ""], "Password not match")
    .required("please input password confirmation"),
});

const useRegister = () => {
  const router = useRouter();
  const [visiblePassword, setVisiblePassword] = useState({
    password: false,
    confirmPassword: false,
  });

  const handleVisiblePassword = (key: "password" | "confirmPassword") => {
    setVisiblePassword({ ...visiblePassword, [key]: !visiblePassword[key] });
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const registerService = async (payload: IRegister) => {
    const result = await authServices.register(payload);
    return result;
  };

  const { mutate: mutateRegister, isPending: isPendingRegister } = useMutation({
    mutationFn: registerService,
    onSuccess: () => {
      router.push("/auth/register/success");
      reset();
    },
  });

  const handleRegister = (data: IRegister) => mutateRegister(data);
  return {
    visiblePassword,
    handleVisiblePassword,
    control,
    handleSubmit,
    handleRegister,
    errors,
    isPendingRegister,
  };
};

export default useRegister;
