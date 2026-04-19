import Image from "next/image";

export default function ProfileImage() {
  return (
    <div className="w-37.5 h-37.5 mx-auto rounded-full overflow-hidden border-2 border-accent">
      <Image
        src="/profile.jpg"
        alt="Profile photo"
        width={150}
        height={150}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
