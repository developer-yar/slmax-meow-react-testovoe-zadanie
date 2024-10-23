import Link from "next/link";
import { Title } from "@/components/title/title";

export default function NotFoundPage() {
  return (
    <div>
      <Title text="Not found" />
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
