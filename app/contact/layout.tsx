import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - NdujaLovers",
  description: "Get in touch with NdujaLovers. Order authentic Calabrian 'nduja from Filiera Madeo, inquire about wholesale pricing, or ask questions. We ship to all 50 states.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
