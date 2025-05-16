import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Github, FileText, Database, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
                ZeroVO: Visual Odometry with Minimal Assumptions
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                A novel visual odometry algorithm that achieves zero-shot generalization across diverse cameras and
                environments.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <Link href="#paper">
                    Read Paper <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="https://github.com/zvocvpr/zerovo" target="_blank">
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex-1">
              <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-xl">
                <video 
                  src="/assets/VIDEO_final.mp4" 
                  controls
                  autoPlay={true}
                  loop={true}
                  muted={true}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Authors Section */}
      <section className="py-12 bg-white" id="authors">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Authors</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {["Lei Lai", "Zekai Yin", "Eshed Ohn-Bar"].map((author, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                  <Image
                    src={`/placeholder.svg?height=128&width=128&query=researcher portrait`}
                    alt={author}
                    width={128}
                    height={128}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium">{author}</h3>
                <p className="text-gray-600">Boston University</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Abstract Section */}
      <section className="py-12 bg-gray-50" id="abstract">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Abstract</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              We introduce ZeroVO, a novel visual odometry (VO) algorithm that achieves zero-shot generalization across
              diverse cameras and environments, overcoming limitations in existing methods that depend on predefined or
              static camera calibration setups. Our approach incorporates three main innovations. First, we design a
              calibration-free, geometry-aware network structure capable of handling noise in estimated depth and camera
              parameters. Second, we introduce a language-based prior that infuses semantic information to enhance
              robust feature extraction and generalization to previously unseen domains. Third, we develop a flexible,
              semi-supervised training paradigm that iteratively adapts to new scenes using unlabeled data, further
              boosting the models' ability to generalize across diverse real-world scenarios.
            </p>
            <p>
              We analyze complex autonomous driving contexts, demonstrating over 30% improvement against prior methods
              on three standard benchmarks—KITTI, nuScenes, and Argoverse 2—as well as a newly introduced, high-fidelity
              synthetic dataset derived from Grand Theft Auto (GTA). By not requiring fine-tuning or camera calibration,
              our work broadens the applicability of VO, providing a versatile solution for real-world deployment at
              scale.
            </p>
          </div>
        </div>
      </section>

      {/* Method Section */}
      <section className="py-12 bg-white" id="method">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Method</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <Image
                src="assets/pipeline.png"
                alt="ZeroVO Architecture"
                width={700}
                height={500}
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Multimodal and Geometry-Guided Network</h3>
              <p className="text-gray-700">
                Our architecture leverages cross-attention to fuse complementary cues, including flow, depth, camera
                intrinsics, and language-based features in a geometry-aware manner. The language prior is first used to
                refine both the depth map and 2D flow estimates.
              </p>
              <h3 className="text-2xl font-semibold">Key Innovations</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Calibration-free, geometry-aware network structure</li>
                <li>Language-based prior for semantic information</li>
                <li>Flexible, semi-supervised training paradigm</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12 bg-gray-50" id="results">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Results</h2>

          <Tabs defaultValue="qualitative" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
              <TabsTrigger value="qualitative">Qualitative Results</TabsTrigger>
              <TabsTrigger value="quantitative">Quantitative Results</TabsTrigger>
            </TabsList>

            <TabsContent value="qualitative" className="mt-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Trajectory Visualization on KITTI</h3>
                <div className="aspect-video relative">
                  <Image
                    src="/placeholder-q8irx.png"
                    alt="Qualitative Results on KITTI"
                    width={900}
                    height={500}
                    className="rounded-lg"
                  />
                </div>
                <p className="mt-4 text-gray-700">
                  Trajectory prediction results across complex driving sequences from the KITTI dataset. Our approach
                  achieves the highest alignment with ground truth, particularly in challenging turns and extended
                  straight paths.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="quantitative" className="mt-6">
              <div className="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
                <h3 className="text-xl font-semibold mb-4">Comparative Analysis Across Datasets</h3>
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                        Method
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                        KITTI (ATE)
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                        nuScenes (ATE)
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                        Argoverse (ATE)
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                        GTA (ATE)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-900">XVO</td>
                      <td className="px-4 py-3 text-sm text-gray-900">168.43</td>
                      <td className="px-4 py-3 text-sm text-gray-900">8.30</td>
                      <td className="px-4 py-3 text-sm text-gray-900">5.70</td>
                      <td className="px-4 py-3 text-sm text-gray-900">28.02</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-900">M+DS</td>
                      <td className="px-4 py-3 text-sm text-gray-900">154.77</td>
                      <td className="px-4 py-3 text-sm text-gray-900">10.46</td>
                      <td className="px-4 py-3 text-sm text-gray-900">8.51</td>
                      <td className="px-4 py-3 text-sm text-gray-900">12.96</td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="px-4 py-3 text-sm font-medium text-blue-900">ZeroVO</td>
                      <td className="px-4 py-3 text-sm font-medium text-blue-900">105.07</td>
                      <td className="px-4 py-3 text-sm font-medium text-blue-900">6.79</td>
                      <td className="px-4 py-3 text-sm font-medium text-blue-900">4.10</td>
                      <td className="px-4 py-3 text-sm font-medium text-blue-900">8.55</td>
                    </tr>
                    <tr className="bg-blue-100">
                      <td className="px-4 py-3 text-sm font-medium text-blue-900">ZeroVO+</td>
                      <td className="px-4 py-3 text-sm font-medium text-blue-900">104.69</td>
                      <td className="px-4 py-3 text-sm font-medium text-blue-900">6.03</td>
                      <td className="px-4 py-3 text-sm font-medium text-blue-900">3.05</td>
                      <td className="px-4 py-3 text-sm font-medium text-blue-900">8.24</td>
                    </tr>
                  </tbody>
                </table>
                <p className="mt-4 text-gray-700">
                  Our models demonstrate strong performance across metrics and datasets, particularly in metric
                  translation estimation.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-12 bg-white" id="resources">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="mr-2 h-5 w-5" /> Paper
                </CardTitle>
                <CardDescription>Read our research paper</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">ZeroVO: Visual Odometry with Minimal Assumptions</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="https://arxiv.org/abs/zerovo" target="_blank">
                    View Paper
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Code className="mr-2 h-5 w-5" /> Code
                </CardTitle>
                <CardDescription>Access our implementation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">GitHub repository with code, models, and documentation</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="https://github.com/zvocvpr/zerovo" target="_blank">
                    View Code
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Database className="mr-2 h-5 w-5" /> Dataset
                </CardTitle>
                <CardDescription>Download our GTA dataset</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">High-fidelity synthetic dataset derived from Grand Theft Auto</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="https://zvocvpr.github.io/dataset" target="_blank">
                    Access Dataset
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Citation Section */}
      <section className="py-12 bg-gray-50" id="citation">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Citation</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              {`@inproceedings{PLACE_HOLDER_DO_NOT_CITATE,
  title={ZeroVO: Visual Odometry with Minimal Assumptions},
  author={Lai, Lei and Yin, Zekai and Ohn-Bar, Eshed},
  booktitle={Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition},
  year={2023}
}`}
            </pre>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold">ZeroVO</h3>
              <p className="text-gray-400">Boston University</p>
            </div>
            <div>
              <p className="text-gray-400">© 2023 ZeroVO Team. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
