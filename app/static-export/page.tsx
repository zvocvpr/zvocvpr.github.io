import { FileCode, Github, Terminal } from "lucide-react"

export default function StaticExportPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <h1 className="text-3xl font-bold mb-2">Static Export for GitHub Pages</h1>
      <p className="text-gray-600 mb-8">
        If you're using Next.js or another framework, follow these steps to properly export a static site for GitHub
        Pages.
      </p>

      <div className="space-y-8">
        <div className="border rounded-lg p-6 bg-white shadow-sm">
          <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
            <FileCode className="h-5 w-5 text-blue-600" />
            Next.js Static Export
          </h3>

          <p className="mb-4 text-gray-700">
            Next.js can generate a static website that works with GitHub Pages. Here's how to set it up:
          </p>

          <div className="space-y-6 mt-6">
            <div className="bg-gray-50 p-4 rounded-lg border">
              <h4 className="font-medium flex items-center gap-2 mb-2">
                <FileCode className="h-4 w-4 text-gray-700" />
                Step 1: Configure next.config.js
              </h4>
              <div className="bg-gray-900 text-gray-100 p-3 rounded font-mono text-sm overflow-x-auto">
                <pre>{`/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // If your repository name is different from your username
  // you'll need to set the basePath
  basePath: '/your-repo-name', // e.g., '/zerovo-paper'
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;`}</pre>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg border">
              <h4 className="font-medium flex items-center gap-2 mb-2">
                <Terminal className="h-4 w-4 text-gray-700" />
                Step 2: Build the Static Site
              </h4>
              <div className="bg-gray-900 text-gray-100 p-3 rounded font-mono text-sm overflow-x-auto">
                <pre>npm run build</pre>
              </div>
              <p className="mt-2 text-sm text-gray-600">This will generate a static export in the 'out' directory.</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg border">
              <h4 className="font-medium flex items-center gap-2 mb-2">
                <FileCode className="h-4 w-4 text-gray-700" />
                Step 3: Add .nojekyll File
              </h4>
              <p className="text-gray-600 mb-2">
                Create an empty .nojekyll file in the 'out' directory to prevent GitHub Pages from processing your site
                with Jekyll.
              </p>
              <div className="bg-gray-900 text-gray-100 p-3 rounded font-mono text-sm overflow-x-auto">
                <pre>touch out/.nojekyll</pre>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg border">
              <h4 className="font-medium flex items-center gap-2 mb-2">
                <Github className="h-4 w-4 text-gray-700" />
                Step 4: Deploy to GitHub Pages
              </h4>
              <p className="text-gray-600 mb-2">
                You can manually copy the contents of the 'out' directory to your repository, or use a GitHub Action to
                automate deployment.
              </p>
              <div className="bg-gray-900 text-gray-100 p-3 rounded font-mono text-sm overflow-x-auto">
                <pre>{`# Example GitHub Action workflow file (.github/workflows/deploy.yml)
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
        
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Add .nojekyll file
        run: touch out/.nojekyll
        
      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: out
          branch: gh-pages`}</pre>
              </div>
            </div>
          </div>
        </div>

        <div className="border rounded-lg p-6 bg-white shadow-sm">
          <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
            <Terminal className="h-5 w-5 text-blue-600" />
            Testing Locally
          </h3>

          <p className="mb-4 text-gray-700">
            Before deploying, test your static export locally to ensure it works correctly:
          </p>

          <div className="bg-gray-900 text-gray-100 p-3 rounded font-mono text-sm overflow-x-auto">
            <pre>npx serve out</pre>
          </div>

          <p className="mt-4 text-gray-700">
            This will start a local server serving your static files. Check that all links, images, and styles work
            correctly.
          </p>

          <div className="mt-4 p-4 bg-amber-50 rounded-lg border border-amber-200">
            <p className="text-amber-800 text-sm">
              <strong>Important:</strong> Make sure all internal links in your application use relative paths that
              account for the basePath. For Next.js, use the Link component which handles this automatically.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
