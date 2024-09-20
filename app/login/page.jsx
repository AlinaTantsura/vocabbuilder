import LoginForm from "@/components/LoginForm"
import Image from "next/image"
import Link from "next/link"


const LoginPage = () => {
  return (
    <div className="w-full flex flex-col md:flex-col-reverse desk:flex-row-reverse desk:justify-between desk:px-[100px]">
      <section>
        <div className="relative w-[241px] h-[191px] md:hidden mx-auto">
          <Image
            fill
            src="/assets/images/main-picture-mobile.png"
            alt="Boy and girl are reading books"
            srcSet="/assets/images/main-picture-mobile@2x.png 2x, /assets/images/main-picture-mobile.png 1x"
          />
        </div>
        <div className="relative hidden desk:block desk:w-[498px] desk:h-[435px]">
          <Image
            fill
            src="/assets/images/main-picture-desktop.png"
            alt="Boy and girl are reading books"
            srcSet="/assets/images/main-picture-desktop@2x.png 2x, /assets/images/main-picture-desktop.png 1x"
          />
        </div>
        <p className="mt-4 mb-[43px] text-center font-normal text-[14px] md:text-[16px] md:leading-[150%] text-[#121417]/[.8]">
          Word · Translation · Grammar · Progress
        </p>
      </section>
      <section className=" max-w-[375px] md:max-w-[628px] mx-auto desk:mx-0 bg-[#85aa9f]/[.1] rounded-[25px] md:rounded-[30px] px-4 md:px-16 pt-8 pb-[57px] md:py-12">
        <h1 className="mb-4 md:mb-5 font-semibold text-[30px] md:text-[40px] leading-[107%] md:leading-[120%] tracking-[-0.02em]">
          Login
        </h1>
        <p className="mb-4 md:mb-8 font-normal text-[16px] md:text-[20px] leading-[150%] text-[#121417]/[.8]">
          Please enter your login details to continue using our service:
        </p>

        <LoginForm />
        <Link
          href="/register"
          className="mt-4 block mx-auto text-center underline text-[#121417]/[.5] font-bold text-[16px] md:text-[18px] leading-[150%] md:leading-[156%]"
        >
          Register
        </Link>
      </section>
    </div>
  )
}

export default LoginPage