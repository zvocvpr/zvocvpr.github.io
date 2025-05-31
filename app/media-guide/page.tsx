import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MediaGuidePage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-8">
        <Button asChild variant="outline" size="sm">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>
        </Button>
      </div>

      <h1 className="text-3xl font-bold mb-6">Media Guide: Adding and Removing Videos/Images</h1>

      <div className="prose prose-lg max-w-none">
        <h2>Adding Images</h2>
        <p>To add new images to the website, follow these steps:</p>
        <ol>
          <li>
            <strong>Prepare your image:</strong> Optimize your image for web (recommended formats: JPEG, PNG, WebP). Aim
            for a file size under 500KB for optimal performance.
          </li>
          <li>
            <strong>Add the image to the public folder:</strong> Place your image in the appropriate subfolder within
            the <code>public</code> directory (e.g., <code>public/images/</code>).
          </li>
          <li>
            <strong>Update the code:</strong> Find the relevant section in the code where you want to add the image and
            update the <code>Image</code> component:
            <pre>
              {`<Image 
  src="/images/your-new-image.jpg" 
  alt="Description of your image" 
  width={600} 
  height={400}
  className="rounded-lg"
/>`}
            </pre>
          </li>
        </ol>

        <h2>Adding Videos</h2>
        <p>To add videos to the website, follow these steps:</p>
        <ol>
          <li>
            <strong>Prepare your video:</strong> Compress your video for web viewing. Consider providing multiple
            formats (MP4, WebM) for better browser compatibility.
          </li>
          <li>
            <strong>Add the video to the public folder:</strong> Place your video in the appropriate subfolder within
            the <code>public</code> directory (e.g., <code>public/videos/</code>).
          </li>
          <li>
            <strong>Update the code:</strong> Add a video element to the desired section:
            <pre>
              {`<div className="aspect-video relative rounded-lg overflow-hidden">
  <video 
    controls 
    className="w-full h-full"
    poster="/images/video-thumbnail.jpg"
  >
    <source src="/videos/your-video.mp4" type="video/mp4" />
    <source src="/videos/your-video.webm" type="video/webm" />
    Your browser does not support the video tag.
  </video>
</div>`}
            </pre>
          </li>
        </ol>

        <h2>Embedding YouTube Videos</h2>
        <p>For YouTube videos, you can use an iframe:</p>
        <pre>
          {`<div className="aspect-video relative rounded-lg overflow-hidden">
  <iframe
    className="absolute top-0 left-0 w-full h-full"
    src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>`}
        </pre>

        <h2>Removing Media</h2>
        <p>To remove images or videos:</p>
        <ol>
          <li>Locate the relevant component in the code</li>
          <li>Delete the entire component or replace it with new content</li>
          <li>
            If the file is no longer needed anywhere on the site, you can also delete it from the <code>public</code>{" "}
            directory
          </li>
        </ol>

        <h2>Recommended Image Sizes</h2>
        <ul>
          <li>
            <strong>Hero images:</strong> 1200×600px (2:1 aspect ratio)
          </li>
          <li>
            <strong>Author photos:</strong> 400×400px (1:1 aspect ratio)
          </li>
          <li>
            <strong>Method diagrams:</strong> 800×600px (4:3 aspect ratio)
          </li>
          <li>
            <strong>Results visualizations:</strong> 1000×600px (5:3 aspect ratio)
          </li>
        </ul>

        <h2>Best Practices</h2>
        <ul>
          <li>Always include descriptive alt text for images for accessibility</li>
          <li>Optimize images before uploading to improve page load times</li>
          <li>Use responsive design techniques to ensure media looks good on all devices</li>
          <li>Consider lazy loading for images that are lower on the page</li>
        </ul>
      </div>
    </div>
  )
}
