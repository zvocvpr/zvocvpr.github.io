import CompleteReplacementGuide from "@/components/complete-replacement-guide"

export default function CompleteReplacementPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <h1 className="text-3xl font-bold mb-2">Complete Repository Replacement</h1>
      <p className="text-gray-600 mb-8">
        Follow this guide to completely replace your repository content with your ZeroVO paper website.
      </p>

      <CompleteReplacementGuide />

      <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-200">
        <h2 className="text-xl font-semibold mb-4">Important Considerations</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>This approach will preserve your repository URL and Git history</li>
          <li>Make sure to back up any important content from the old repository before replacing it</li>
          <li>If you're using a custom domain, your settings will be preserved</li>
          <li>
            Consider creating a new branch instead of replacing main if you want to keep the old content accessible
          </li>
        </ul>
      </div>
    </div>
  )
}
