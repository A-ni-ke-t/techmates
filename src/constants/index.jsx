import { ShieldHalf } from "lucide-react";
import { Figma } from "lucide-react";
import { GlobeLock } from "lucide-react";
import { TabletSmartphone } from "lucide-react";
import { Laptop } from "lucide-react";
import { Hammer } from "lucide-react";

export const navItems = [
  { label: "Services", href: "#services" },
  { label: "Expertise", href: "#expertise" },
  { label: "Contact", href: "#contact" },
];

export const features = [
  {
    icon: <Figma />,
    text: "UI/UX Designing",
    description:
      "Creating seamless, user-centered designs that enhance engagement and elevate digital experiences.",
  },
  {
    icon: <Laptop />,
    text: "Web development",
    description:
      "Crafting responsive, high-performing websites tailored to your business needs.",
  },
  {
    icon: <TabletSmartphone />,
    text: "Mobile app development",
    description:
      "Building intuitive, feature-rich mobile apps to elevate your brand on iOS and Android.",
  },
  {
    icon: <GlobeLock />,
    text: "DevOps Services",
    description:
      "CI/CD setup, automation, infrastructure management, and deployment optimization.",
  },

  {
    icon: <ShieldHalf />,
    text: "Quality Assurance (QA)",
    description:
      "Ensuring your digital products are reliable, bug-free, and deliver a flawless user experience.",
  },
  {
    icon: <Hammer />,
    text: "Maintenance & Support",
    description:
      "Providing ongoing updates, performance monitoring, and technical support to keep your digital solutions running smoothly.",
  },
];

export const checklistItems = [
  {
    title: "Beautiful, Functional Designs",
    description:
      "Delivering intuitive UI/UX that blends aesthetics with usability to elevate user experience.",
  },
  {
    title: "Robust Web Development",
    description:
      "Building scalable, high-performing websites tailored to your business goals.",
  },
  {
    title: "Mobile Apps That Scale",
    description:
      "Creating powerful mobile applications for iOS and Android to grow your digital reach.",
  },
  {
    title: "Streamlined DevOps Integration",
    description:
      "Automating deployments, CI/CD, and infrastructure to accelerate your product lifecycle.",
  },
  {
    title: "Thorough Testing & QA",
    description:
      "Ensuring reliability with manual and automated testing for bug-free performance.",
  },
  {
    title: "Ongoing Maintenance & Support",
    description:
      "Providing continuous updates, monitoring, and technical support post-launch.",
  },
];
