import Image from "next/image";
interface Props {
  email: string;
}

export default function Email({ email }: Props) {
  if (!email) return <></>;
  return (
    <div className={`flex items-center text-[14px] gap-2`}>
      <Image
        src="/images/icon/email.png"
        alt="email_icon"
        width={24}
        height={24}
      />
      <p>{email}</p>
    </div>
  );
}
