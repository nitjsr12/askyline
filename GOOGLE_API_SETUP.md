# Google PageSpeed Insights API Setup Guide

## Step 1: Get Your Google API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Navigate to **APIs & Services** > **Library**
4. Search for "PageSpeed Insights API"
5. Click on it and click **Enable**

## Step 2: Create API Credentials

1. Go to **APIs & Services** > **Credentials**
2. Click **Create Credentials** > **API Key**
3. Copy your API key
4. (Optional) Restrict the API key to only PageSpeed Insights API for security

## Step 3: Add API Key to Environment Variables

1. Open the `.env.local` file in the root of your project
2. Add your API key:
   ```
   GOOGLE_API_KEY=your_actual_api_key_here
   ```
3. Save the file
4. Restart your Next.js development server

## Step 4: Verify Setup

After restarting your server, try running a website audit. The API key should now be recognized.

## Important Notes

- Never commit `.env.local` to version control (it's already in .gitignore)
- The API has a free tier with quotas
- For production, set the environment variable in your hosting platform (Vercel, Netlify, etc.)

## Troubleshooting

If you still see the error:
1. Make sure the `.env.local` file is in the root directory (same level as `package.json`)
2. Restart your development server completely
3. Check that the API key doesn't have extra spaces or quotes
4. Verify the PageSpeed Insights API is enabled in your Google Cloud project

