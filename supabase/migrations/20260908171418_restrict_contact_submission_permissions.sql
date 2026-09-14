/*
# Restrict contact submission permissions

1. Modified Tables
- `contact_submissions`
  - Keep public INSERT access for the contact form.
  - Remove direct client SELECT, UPDATE, and DELETE access so visitor messages
    cannot be read, changed, or removed through the browser data API.

2. Security
- Revoke SELECT, UPDATE, and DELETE from anon and authenticated.
- Preserve INSERT for anon and authenticated so the public form continues to work.

3. Notes
- Contact submissions remain available to the project owner through privileged
  server-side access or the Supabase dashboard.
*/

REVOKE SELECT, UPDATE, DELETE ON TABLE contact_submissions FROM anon, authenticated;
GRANT INSERT ON TABLE contact_submissions TO anon, authenticated;
