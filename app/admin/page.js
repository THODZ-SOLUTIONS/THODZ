import { createClient } from '@/lib/supabase/server';
import { SubmissionsTable } from './SubmissionsTable';

export const metadata = { title: 'Submissions' };
export const dynamic = 'force-dynamic';

export default async function AdminPage() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('contact_submissions')
    .select('*')
    .order('created_at', { ascending: false });

  return <SubmissionsTable initialRows={data ?? []} loadError={error?.message || null} />;
}
