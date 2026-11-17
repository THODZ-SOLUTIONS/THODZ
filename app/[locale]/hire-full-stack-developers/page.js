import { LandingPage, landingMetadata } from '@/components/marketing/LandingPage';

const SLUG = 'hire-full-stack-developers';

export async function generateMetadata({ params }) {
  return landingMetadata(SLUG, params);
}

export default async function HireDevelopersPage({ params }) {
  return LandingPage({ slug: SLUG, params });
}
