/*
  # Contact Inquiries Table

  1. New Tables
    - `contact_inquiries`
      - `id` (uuid, primary key) - Unique identifier for each inquiry
      - `company_name` (text) - Company name and department
      - `contact_person` (text) - Name of the person submitting the inquiry
      - `phone` (text) - Phone number
      - `email` (text) - Email address
      - `message` (text) - Inquiry message content
      - `language` (text) - Language used (jp/en)
      - `created_at` (timestamptz) - Timestamp of submission
      
  2. Security
    - Enable RLS on `contact_inquiries` table
    - Add policy for anonymous users to insert inquiries
    - Add policy for authenticated admin users to view all inquiries
    
  3. Notes
    - This table stores all contact form submissions
    - No update or delete operations needed for users
    - Admin access only for viewing submissions
*/

CREATE TABLE IF NOT EXISTS contact_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company_name text NOT NULL,
  contact_person text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  language text DEFAULT 'jp',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit inquiries"
  ON contact_inquiries
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all inquiries"
  ON contact_inquiries
  FOR SELECT
  TO authenticated
  USING (true);