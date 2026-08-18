'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { Button } from '@/components/core/Button';
import { Tag } from '@/components/core/Tag';
import { Toast } from '@/components/feedback/Toast';

const TIMELINE_LABELS = { asap: 'ASAP', q: 'This quarter', flex: 'Flexible' };

function formatDate(iso) {
  return new Date(iso).toLocaleString('en-GB', {
    day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit',
  });
}

function toCsv(rows) {
  const cols = ['created_at', 'name', 'email', 'company', 'type', 'timeline', 'details', 'nda', 'status'];
  const escape = (v) => `"${String(v ?? '').replace(/"/g, '""')}"`;
  return [cols.join(','), ...rows.map((r) => cols.map((c) => escape(r[c])).join(','))].join('\n');
}

export function SubmissionsTable({ initialRows, loadError }) {
  const router = useRouter();
  const [rows, setRows] = React.useState(initialRows);
  const [openId, setOpenId] = React.useState(null);
  const [error, setError] = React.useState(loadError);
  const supabase = React.useMemo(() => createClient(), []);

  const unread = rows.filter((r) => r.status === 'new').length;

  async function setStatus(row, status) {
    const { error: err } = await supabase
      .from('contact_submissions').update({ status }).eq('id', row.id);
    if (err) return setError(err.message);
    setRows((rs) => rs.map((r) => (r.id === row.id ? { ...r, status } : r)));
  }

  async function remove(row) {
    if (!window.confirm(`Delete submission from ${row.name}? This cannot be undone.`)) return;
    const { error: err } = await supabase
      .from('contact_submissions').delete().eq('id', row.id);
    if (err) return setError(err.message);
    setRows((rs) => rs.filter((r) => r.id !== row.id));
  }

  function exportCsv() {
    const blob = new Blob([toCsv(rows)], { type: 'text/csv' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `contact-submissions-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(a.href);
  }

  async function signOut() {
    await supabase.auth.signOut();
    router.push('/admin/login');
    router.refresh();
  }

  function toggleOpen(row) {
    setOpenId((id) => (id === row.id ? null : row.id));
    if (row.status === 'new') setStatus(row, 'read');
  }

  const cellStyle = { padding: 'var(--space-3) var(--space-4)', borderBottom: '1px solid var(--border-subtle)', textAlign: 'left' };
  const dtStyle = { color: 'var(--fg-3)' };
  const ddStyle = { margin: 0 };

  return (
    <div>
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--space-4)', marginBottom: 'var(--space-8)' }}>
        <div>
          <h1 style={{ margin: 0 }}>Contact submissions</h1>
          <span className="field-note">{rows.length} total · {unread} unread</span>
        </div>
        <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
          <Button variant="secondary" onClick={exportCsv} disabled={rows.length === 0}>Export CSV</Button>
          <Button variant="ghost" onClick={signOut}>Sign out</Button>
        </div>
      </header>

      {error && <Toast tone="danger" title="Something went wrong" message={error} />}

      {rows.length === 0 ? (
        <p style={{ color: 'var(--fg-3)' }}>No submissions yet.</p>
      ) : (
        <div style={{ overflowX: 'auto', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-card)', background: 'var(--surface-raised)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
            <thead>
              <tr style={{ color: 'var(--fg-3)' }}>
                <th style={cellStyle}>Status</th>
                <th style={cellStyle}>Name</th>
                <th style={cellStyle}>Email</th>
                <th style={cellStyle}>Type</th>
                <th style={cellStyle}>Received</th>
                <th style={cellStyle} />
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <React.Fragment key={row.id}>
                  <tr onClick={() => toggleOpen(row)} style={{ cursor: 'pointer', fontWeight: row.status === 'new' ? 600 : 400 }}>
                    <td style={cellStyle}><Tag active={row.status === 'new'}>{row.status}</Tag></td>
                    <td style={cellStyle}>{row.name}</td>
                    <td style={cellStyle}><a href={`mailto:${row.email}`} onClick={(e) => e.stopPropagation()} style={{ color: 'var(--text-accent)' }}>{row.email}</a></td>
                    <td style={cellStyle}>{row.type || '—'}</td>
                    <td style={cellStyle}>{formatDate(row.created_at)}</td>
                    <td style={{ ...cellStyle, whiteSpace: 'nowrap' }}>
                      <Button variant="ghost" size="sm" onClick={(e) => { e.stopPropagation(); setStatus(row, row.status === 'new' ? 'read' : 'new'); }}>
                        {row.status === 'new' ? 'Mark read' : 'Mark unread'}
                      </Button>
                      <Button variant="ghost" size="sm" onClick={(e) => { e.stopPropagation(); remove(row); }}>Delete</Button>
                    </td>
                  </tr>
                  {openId === row.id && (
                    <tr>
                      <td colSpan={6} style={{ ...cellStyle, background: 'var(--bg-3)' }}>
                        <dl style={{ display: 'grid', gridTemplateColumns: 'max-content 1fr', gap: 'var(--space-2) var(--space-6)', margin: 0 }}>
                          <dt style={dtStyle}>Company</dt><dd style={ddStyle}>{row.company || '—'}</dd>
                          <dt style={dtStyle}>Timeline</dt><dd style={ddStyle}>{TIMELINE_LABELS[row.timeline] || row.timeline || '—'}</dd>
                          <dt style={dtStyle}>NDA</dt><dd style={ddStyle}>{row.nda ? 'Yes' : 'No'}</dd>
                          <dt style={dtStyle}>Details</dt><dd style={{ ...ddStyle, whiteSpace: 'pre-wrap' }}>{row.details || '—'}</dd>
                        </dl>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
