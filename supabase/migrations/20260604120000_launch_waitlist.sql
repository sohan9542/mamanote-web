-- Public waitlist signups from the marketing site (pre-launch).
CREATE TABLE IF NOT EXISTS public.launch_waitlist (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  source text,
  created_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT launch_waitlist_email_unique UNIQUE (email),
  CONSTRAINT launch_waitlist_email_format CHECK (
    email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
    AND char_length(email) <= 320
  )
);

CREATE INDEX IF NOT EXISTS launch_waitlist_created_at_idx
  ON public.launch_waitlist (created_at DESC);

ALTER TABLE public.launch_waitlist ENABLE ROW LEVEL SECURITY;

-- Signups only: no public read/update/delete.
CREATE POLICY "anon can insert waitlist email"
  ON public.launch_waitlist
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

GRANT INSERT ON TABLE public.launch_waitlist TO anon, authenticated;
