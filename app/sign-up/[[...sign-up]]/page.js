import { SignUp } from "@clerk/nextjs";
import Image from "next/image";


export default function Page() {
  return (
    <div>
      <Image
        src="/uber-logo.jpg"
        width={900}
        height={900}
        className="object-contain w-full h-full"
      />
      <div className="absolute top-10 right-0">
        <SignUp />
      </div>
    </div>
  );
}
