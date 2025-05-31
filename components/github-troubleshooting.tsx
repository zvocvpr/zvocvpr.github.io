import { AlertCircle, CheckCircle2, RefreshCw, Settings, FileCode, Github } from "lucide-react"

export const GitHubTroubleshooting = () => {
  return (
    <div className="space-y-8">
      {/* Repository Configuration */}
      <div className="border rounded-lg p-6 bg-white shadow-sm">
        <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
          <Settings className="h-5 w-5 text-blue-600" />
          Repository Configuration
        </h3>

        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="mt-1">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
            </div>
            <div>
              <h4 className="font-medium">Verify Repository Settings</h4>
              <p className="text-gray-600 mt-1">
                Go to your repository settings (Settings tab) and scroll down to the "GitHub Pages" section. Make sure
                it's configured to deploy from the correct branch (usually <code>main</code> or <code>master</code>).
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="mt-1">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
            </div>
            <div>
              <h4 className="font-medium">Check Branch Configuration</h4>
              <p className="text-gray-600 mt-1">
                Ensure you're pushing to the correct branch that GitHub Pages is configured to deploy from. Run{" "}
                <code>git branch</code> to see your current branch.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Deployment Verification */}
      <div className="border rounded-lg p-6 bg-white shadow-sm">
        <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
          <RefreshCw className="h-5 w-5 text-blue-600" />
          Deployment Verification
        </h3>

        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="mt-1">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
            </div>
            <div>
              <h4 className="font-medium">Check Deployment Status</h4>
              <p className="text-gray-600 mt-1">
                Go to the "Actions" tab in your repository to see if there are any failed workflows or deployments.
                GitHub Pages deployments usually appear as workflow runs.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="mt-1">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
            </div>
            <div>
              <h4 className="font-medium">Check Deployment Branch</h4>
              <p className="text-gray-600 mt-1">
                If you're using a custom GitHub Actions workflow, make sure it's deploying to the correct branch
                (usually <code>gh-pages</code> for project sites).
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Verification */}
      <div className="border rounded-lg p-6 bg-white shadow-sm">
        <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
          <FileCode className="h-5 w-5 text-blue-600" />
          Content Verification
        </h3>

        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="mt-1">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
            </div>
            <div>
              <h4 className="font-medium">Verify Committed Files</h4>
              <p className="text-gray-600 mt-1">
                Check that your new ZeroVO content files were actually committed and pushed. Run <code>git status</code>{" "}
                to see if there are any uncommitted changes.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="mt-1">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
            </div>
            <div>
              <h4 className="font-medium">Check Repository Content</h4>
              <p className="text-gray-600 mt-1">
                Browse your repository on GitHub to confirm that the ZeroVO content is present in the correct branch.
                Make sure you've replaced all necessary files.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Troubleshooting Steps */}
      <div className="border rounded-lg p-6 bg-white shadow-sm">
        <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
          <AlertCircle className="h-5 w-5 text-amber-500" />
          Troubleshooting Steps
        </h3>

        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="mt-1">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
            </div>
            <div>
              <h4 className="font-medium">Force Rebuild</h4>
              <p className="text-gray-600 mt-1">
                Make a small change to your repository (like updating the README) and push it to trigger a new build.
                This can help if the issue is related to build caching.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="mt-1">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
            </div>
            <div>
              <h4 className="font-medium">Clear Browser Cache</h4>
              <p className="text-gray-600 mt-1">
                Try accessing your site in an incognito/private browsing window or clear your browser cache. Sometimes
                browsers cache the old version of your site.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="mt-1">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
            </div>
            <div>
              <h4 className="font-medium">Check for Index Files</h4>
              <p className="text-gray-600 mt-1">
                Ensure you have an <code>index.html</code> file in the root of your deployed branch. GitHub Pages looks
                for this file as the entry point.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Solutions */}
      <div className="border rounded-lg p-6 bg-white shadow-sm">
        <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
          <Github className="h-5 w-5 text-blue-600" />
          Advanced Solutions
        </h3>

        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="mt-1">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
            </div>
            <div>
              <h4 className="font-medium">Reset Deployment</h4>
              <p className="text-gray-600 mt-1">
                If all else fails, you can try disabling GitHub Pages in your repository settings, waiting a few
                minutes, and then re-enabling it.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="mt-1">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
            </div>
            <div>
              <h4 className="font-medium">Check Custom Domain</h4>
              <p className="text-gray-600 mt-1">
                If you're using a custom domain, verify that it's correctly configured in both your repository settings
                and your domain registrar.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="mt-1">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
            </div>
            <div>
              <h4 className="font-medium">Create a New Repository</h4>
              <p className="text-gray-600 mt-1">
                As a last resort, you can create a new repository specifically for your ZeroVO paper and deploy from
                there. This ensures a clean start.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GitHubTroubleshooting
