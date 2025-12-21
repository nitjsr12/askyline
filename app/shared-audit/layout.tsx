// Force dynamic rendering for shared audit page
export const dynamic = 'force-dynamic';

export default function SharedAuditLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

