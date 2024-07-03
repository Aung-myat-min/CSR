import QR from "@/public/images/csr-qr.png";
import kpayLogo from "@/public/svg/kpay_logo.svg";
import Image from "next/image";
import phoneLogo from "@/public/svg/phone_icon.svg";
import emailLogo from "@/public/svg/email_icon.svg";
export default function DonateUs() {
  return (
    <section className="w-11/12 mx-auto ">
      <h1 className="text-center text-4xl">Donate Us!</h1>
      <div className="lg:w-6/12 md:w9/12 flex flex-col md:flex-row border-2 rounded-md mx-auto my-2 p-6 shadow-[rgba(0,0,0,0.15)_1.95px_1.95px_2.6px] gap-0">
        <div className="flex-1 flex flex-col items-center justify-center">
          <Image src={kpayLogo} alt="kpay logo" width={75} height={75} />
          <Image src={QR} alt="our kbz pay qr" className="py-3" />
        </div>
        <div className="flex-1 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold">{"(or)"} Contact Us!</h1>
          <h2 className="text-xl font-semibold my-4">via</h2>
          <p className="flex flex-row gap-5 hover:text-blue-400 transition-colors">
            <Image src={phoneLogo} alt="phone logo" />
            <a href="tel:+959420027772">+959420027772</a>
          </p>
          <p className="flex flex-row gap-5 hover:text-blue-400 transition-colors">
            <Image src={emailLogo} alt="email logo" />
            <a href="mailto:gustocsrprogram@gmail.com">
              gustocsrprogram@gmail.com
            </a>
          </p>
        </div>
      </div>
      <p className="lg:w-5/12 md:w-8/12 mx-auto text-center text-white bg-main p-1 rounded mt-5">
        If you donate us, please include{" "}
        <span className="text-xl font-bold">'CSR donation'</span> in the note.
      </p>
    </section>
  );
}
