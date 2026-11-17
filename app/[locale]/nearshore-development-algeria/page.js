import { LandingPage, landingMetadata } from '@/components/marketing/LandingPage';

const SLUG = 'nearshore-development-algeria';

export async function generateMetadata({ params }) {
  return landingMetadata(SLUG, params);
}

export default async function NearshorePage({ params }) {
  return LandingPage({ slug: SLUG, params });
}
