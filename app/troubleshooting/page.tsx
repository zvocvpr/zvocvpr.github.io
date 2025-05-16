import GitHubTroubleshooting from "@/components/github-troubleshooting"

export default function TroubleshootingPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <h1 className="text-3xl font-bold mb-2">GitHub Pages Troubleshooting</h1>
      <p className="text-gray-600 mb-8">Follow these steps to resolve issues with your GitHub Pages deployment.</p>

      <GitHubTroubleshooting />

      <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-200">
        <h2 className="text-xl font-semibold mb-4">Need More Help?</h2>
        <p className="mb-4">If you're still experiencing issues after trying these steps, consider:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Checking the{" "}
            <a href="https://docs.github.com/en/pages" className="text-blue-600 hover:underline">
              GitHub Pages documentation
            </a>
          </li>
          <li>
            Looking at{" "}
            <a href="https://www.githubstatus.com/" className="text-blue-600 hover:underline">
              GitHub Status
            </a>{" "}
            for any ongoing service issues
          </li>
          <li>
            Posting a question on{" "}
            <a href="https://stackoverflow.com/questions/tagged/github-pages" className="text-blue-600 hover:underline">
              Stack Overflow
            </a>{" "}
            with the github-pages tag
          </li>
          <li>Contacting GitHub Support if you believe there's a platform issue</li>
        </ul>
      </div>
    </div>
  )
}
