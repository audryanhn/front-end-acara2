import {
  At,
  Eye,
  EyeSlash,
  PersonPencil,
  ShieldKeyhole,
} from "@gravity-ui/icons";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  FieldError,
  InputGroup,
  Label,
  TextField,
} from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import useRegister from "./useRegister";

const Register = () => {
  const { visiblePassword, handleVisiblePassword } = useRegister();

  return (
    <div className="lg:h-screen">
      <div className="flex lg:flex- flex-col row items-center justify-center w-full gap-10 h-full">
        <div className="flex flex-col items-center justify-center w-2/3 lg:w-1/3 gap-10">
          <Image
            src={`/images/general/logo.svg`}
            alt="logo"
            width={180}
            height={180}
          />
          <Image
            src={`/images/illustration/login.svg`}
            alt="logo"
            width={1024}
            height={1024}
          />
        </div>

        <Card className="p-6 shadow-lg border border-slate-200">
          <CardHeader>
            <CardTitle className="text-pink-600 font-bold text-2xl">
              Create Account
            </CardTitle>
            <CardDescription>
              Having an Account? &nbsp;
              <Link
                href={"/login"}
                className="font-semibold text-pink-500 text-sm"
              >
                Login
              </Link>
            </CardDescription>
          </CardHeader>
          <form className="flex flex-col ">
            <CardContent className="gap-4 w-80 flex flex-col">
              <TextField name="FullName" className={"w-full"}>
                <Label
                  htmlFor="input-fullname"
                  className="text-pink-600 font-semibold "
                >
                  Fullname
                </Label>
                <InputGroup className={"border border-slate-200"}>
                  <InputGroup.Prefix>
                    <PersonPencil className="size-4 text-muted" />
                  </InputGroup.Prefix>
                  <InputGroup.Input
                    placeholder="Full Name"
                    id="input-fullname"
                  />
                </InputGroup>
              </TextField>

              <TextField name="Email" className={"w-full"} type="email">
                <Label
                  htmlFor="input-email"
                  className="text-pink-600 font-semibold "
                >
                  Email
                </Label>
                <InputGroup className={"border border-slate-200"}>
                  <InputGroup.Prefix>
                    <At className="size-4 text-muted" />
                  </InputGroup.Prefix>
                  <InputGroup.Input placeholder="Email" id="input-email" />
                </InputGroup>

                <FieldError>Please enter a valid email address</FieldError>
              </TextField>

              <TextField name="Username" className={"w-full"}>
                <Label
                  htmlFor="input-username"
                  className="text-pink-600 font-semibold "
                >
                  Username
                </Label>
                <InputGroup className={"border border-slate-200"}>
                  <InputGroup.Prefix>
                    <PersonPencil className="size-4 text-muted" />
                  </InputGroup.Prefix>
                  <InputGroup.Input
                    type="email"
                    placeholder="Username"
                    id="input-username"
                  />
                </InputGroup>
              </TextField>

              <TextField name="password" className={"w-full"}>
                <Label
                  htmlFor="input-password"
                  className="text-pink-600 font-semibold "
                >
                  Password
                </Label>
                <InputGroup className={"border border-slate-200"}>
                  <InputGroup.Prefix>
                    <ShieldKeyhole className="size-4 text-muted" />
                  </InputGroup.Prefix>
                  <InputGroup.Input
                    placeholder="Password"
                    type={visiblePassword.password ? "text" : "password"}
                    id="input-password"
                  />
                  <InputGroup.Suffix className="pr-0">
                    <Button
                      isIconOnly
                      aria-label={
                        visiblePassword.password
                          ? "Hide password"
                          : "Show password"
                      }
                      size="sm"
                      variant="ghost"
                      onPress={() => handleVisiblePassword("password")}
                    >
                      {visiblePassword.password ? (
                        <Eye className="size-4" />
                      ) : (
                        <EyeSlash className="size-4" />
                      )}
                    </Button>
                  </InputGroup.Suffix>
                </InputGroup>
              </TextField>

              <TextField
                name="confirmPassword"
                className={"w-full"}
                type="password"
              >
                <Label
                  htmlFor="input-password"
                  className="text-pink-600 font-semibold "
                >
                  Confirm Password
                </Label>
                <InputGroup className={"border border-slate-200"}>
                  <InputGroup.Prefix>
                    <ShieldKeyhole className="size-4 text-muted" />
                  </InputGroup.Prefix>
                  <InputGroup.Input
                    placeholder="Confirm Password"
                    type={visiblePassword.confirmPassword ? "text" : "password"}
                    id="input-password"
                  />
                  <InputGroup.Suffix className="pr-0">
                    <Button
                      isIconOnly
                      aria-label={
                        visiblePassword.confirmPassword
                          ? "Hide password"
                          : "Show password"
                      }
                      size="sm"
                      variant="ghost"
                      onPress={() => handleVisiblePassword("confirmPassword")}
                    >
                      {visiblePassword.confirmPassword ? (
                        <Eye className="size-4" />
                      ) : (
                        <EyeSlash className="size-4" />
                      )}
                    </Button>
                  </InputGroup.Suffix>
                </InputGroup>
              </TextField>

              <Button size="lg" className={"bg-pink-600 w-full font-semibold"}>
                {" "}
                Register
              </Button>
            </CardContent>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Register;
