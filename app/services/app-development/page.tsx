
import { AppDevelopmentPage } from "@/components/App/AppDev";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Top App Development Latest Technology Company in India',
  description: `We are the top mobile app developers in Bangalore. From idea to launch, we craft seamless and cutting-edge Android and iOS apps that scale with your brand.
  Our app development services are tailored to meet your business needs, ensuring a seamless user experience and robust functionality.`,
  keywords: 'app development, mobile app development, iOS app development, Android app development, cross-platform apps, custom mobile solutions, top app development company',
  openGraph: {
    title: 'Top App Development Latest Technology Company in India',
    description: 'We are the top mobile app developers in Bangalore. From idea to launch, we craft seamless and cutting-edge Android and iOS apps that scale with your brand.',
    url: 'https://askylinedigital.com/app-development',
    siteName: 'Askylinedigital',
  }
};

export default function AppPage() {
  return (
    <main>
      <AppDevelopmentPage />
    </main>
  );
}