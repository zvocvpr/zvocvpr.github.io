import { FileCode, FolderTree, GitBranch, Github, Terminal, Trash2 } from "lucide-react"

export const CompleteReplacementGuide = () => {
  return (
    <div className="space-y-8">
      <div className="border rounded-lg p-6 bg-white shadow-sm">
        <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
          <FolderTree className="h-5 w-5 text-blue-600" />
          Complete Repository Replacement
        </h3>

        <p className="mb-4 text-gray-700">
          If troubleshooting steps don't work, the most reliable solution is to completely replace the repository
          content with your ZeroVO paper website.
        </p>

        <div className="space-y-6 mt-6">
          <div className="bg-gray-50 p-4 rounded-lg border">
            <h4 className="font-medium flex items-center gap-2 mb-2">
              <Terminal className="h-4 w-4 text-gray-700" />
              Step 1: Clone the Repository
            </h4>
            <div className="bg-gray-900 text-gray-100 p-3 rounded font-mono text-sm overflow-x-auto">
              <pre>git clone https://github.com/yourusername/your-repo.git cd your-repo</pre>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg border">
            <h4 className="font-medium flex items-center gap-2 mb-2">
              <Trash2 className="h-4 w-4 text-gray-700" />
              Step 2: Remove All Existing Content
            </h4>
            <div className="bg-gray-900 text-gray-100 p-3 rounded font-mono text-sm overflow-x-auto">
              <pre>
                # Remove all files except .git directory find . -mindepth 1 -maxdepth 1 -not -name ".git" -exec rm -rf{" "}
                {} \;
              </pre>
            </div>
            <p className="mt-2 text-sm text-gray-600">This command keeps your Git history but removes all content.</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg border">
            <h4 className="font-medium flex items-center gap-2 mb-2">
              <FileCode className="h-4 w-4 text-gray-700" />
              Step 3: Add Your ZeroVO Content
            </h4>
            <p className="text-gray-600 mb-2">Copy all your ZeroVO website files into the repository directory.</p>
            <div className="bg-gray-900 text-gray-100 p-3 rounded font-mono text-sm overflow-x-auto">
              <pre># Example: copy from another directory cp -r /path/to/zerovo-website/* .</pre>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg border">
            <h4 className="font-medium flex items-center gap-2 mb-2">
              <GitBranch className="h-4 w-4 text-gray-700" />
              Step 4: Commit and Push Changes
            </h4>
            <div className="bg-gray-900 text-gray-100 p-3 rounded font-mono text-sm overflow-x-auto">
              <pre>git add . git commit -m "Complete replacement with ZeroVO paper website" git push origin main</pre>
            </div>
            <p className="mt-2 text-sm text-gray-600">Replace 'main' with your deployment branch if different.</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg border">
            <h4 className="font-medium flex items-center gap-2 mb-2">
              <Github className="h-4 w-4 text-gray-700" />
              Step 5: Verify Deployment
            </h4>
            <p className="text-gray-600">
              Go to the "Actions" tab in your GitHub repository to monitor the deployment process. Once complete, visit
              your GitHub Pages URL to verify the new content is displayed.
            </p>
          </div>
        </div>
      </div>

      <div className="border rounded-lg p-6 bg-white shadow-sm">
        <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
          <FileCode className="h-5 w-5 text-blue-600" />
          Essential Files Check
        </h3>

        <p className="mb-4 text-gray-700">Make sure your ZeroVO website includes these essential files:</p>

        <ul className="space-y-2 pl-5 list-disc text-gray-700">
          <li>
            <strong>index.html</strong> - The main entry point for your website
          </li>
          <li>
            <strong>README.md</strong> - Project documentation (also displayed on the GitHub repository page)
          </li>
          <li>
            <strong>.nojekyll</strong> - An empty file that tells GitHub not to process your site with Jekyll (important
            for sites with underscores in filenames)
          </li>
          <li>
            <strong>404.html</strong> - A custom page for handling 404 errors
          </li>
        </ul>

        <div className="mt-4 p-4 bg-amber-50 rounded-lg border border-amber-200">
          <p className="text-amber-800 text-sm">
            <strong>Note:</strong> If you're using a framework like Next.js, make sure you're properly exporting static
            HTML files that can be served by GitHub Pages.
          </p>
        </div>
      </div>
    </div>
  )
}

export default CompleteReplacementGuide
