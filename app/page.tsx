"use client"

import Image from "next/image"
import {
  BookOpen,
  Code2,
  Cpu,
  Database,
  TestTubeIcon as Experiment,
  FileText,
  Github,
  Globe,
  Lightbulb,
  Mail,
  Settings,
  Share2,
  Sparkles,
  TestTube2,
  Users,
  Video,
  Award,
  BarChart3,
  Eye,
  Layers3,
  Puzzle,
  FlaskConical,
  SlidersHorizontal,
  ImageIcon,
  AlertTriangle,
  ListChecks,
  ClipboardCopy,
  Download,
  ExternalLink,
  CheckCircle2,
  XCircle,
  Info,
} from "lucide-react"
import Link from "next/link"

// --- Data for Tables (Replace with your actual data) ---

const mainResultsData = {
  headers: [
    "Method",
    "KITTI (tₑᵣᵣ, rₑᵣᵣ, ATE, sₑᵣᵣ)",
    "nuScenes (tₑᵣᵣ, rₑᵣᵣ, ATE, sₑᵣᵣ)",
    "Argoverse (tₑᵣᵣ, rₑᵣᵣ, ATE, sₑᵣᵣ)",
    "GTA (tₑᵣᵣ, rₑᵣᵣ, ATE, sₑᵣᵣ)",
  ],
  rows: [
    {
      name: "XVO [37]",
      kitti: "16.82, 3.84, 168.43, 0.17",
      nuscenes: "12.75, 5.11, 8.30, 0.16",
      argoverse: "9.13, 4.86, 5.70, 0.12",
      gta: "25.56, 12.64, 28.02, 0.21",
    },
    {
      name: "M+DS [27]",
      kitti: "14.22, 2.72, 154.77, 0.09",
      nuscenes: "17.08, 1.46, 10.46, 0.18",
      argoverse: "16.67, 1.79, 8.51, 0.13",
      gta: "23.53, 10.38, 12.96, 0.26",
    },
    {
      name: "ZeroVO",
      kitti: "7.69, 2.72, 105.07, 0.07",
      nuscenes: "10.98, 4.48, 6.79, 0.14",
      argoverse: "6.83, 3.13, 4.10, 0.11",
      gta: "14.74, 10.63, 8.55, 0.17",
    },
    {
      name: "ZeroVO+",
      kitti: "6.81, 2.69, 104.69, 0.06",
      nuscenes: "9.74, 4.37, 6.03, 0.12",
      argoverse: "4.64, 2.83, 3.05, 0.09",
      gta: "13.42, 7.99, 8.24, 0.17",
    },
    {
      name: "LiteZeroVO+",
      kitti: "8.85, 2.90, 118.54, 0.08",
      nuscenes: "11.57, 4.44, 6.87, 0.13",
      argoverse: "7.65, 3.82, 5.28, 0.11",
      gta: "15.93, 12.16, 11.26, 0.18",
    },
    {
      name: "TartanVO [70]",
      kitti: "13.85, 3.27, 103.07, -",
      nuscenes: "10.27, 6.35, 6.26, -",
      argoverse: "11.17, 5.30, 7.03, -",
      gta: "10.56, 9.35, 3.82, -",
    },
    {
      name: "DPVO [63]",
      kitti: "8.31, 2.37, 78.53, -",
      nuscenes: "4.34, 2.85, 2.66, -",
      argoverse: "2.66, 1.25, 1.59, -",
      gta: "12.65, 10.67, 4.33, -",
    },
  ],
  caption:
    "Table 1: Comparative Analysis Across Datasets. ZeroVO variants demonstrate strong performance, particularly in metric translation. TartanVO and DPVO (grayed out or marked) predict up-to-scale motion and use ground-truth scale alignment.",
}

const challengingConditionsData = {
  headers: ["Method", "Day", "Night", "Rainy", "Strong Light"],
  rows: [
    { name: "XVO [37]", day: "6.61", night: "14.41", rainy: "15.99", light: "15.73" },
    { name: "M+DS [27]", day: "6.08", night: "17.19", rainy: "17.49", light: "18.54" },
    { name: "ZeroVO", day: "3.90", night: "10.33", rainy: "12.63", light: "13.33" },
    { name: "ZeroVO+", day: "3.60", night: "10.26", rainy: "10.10", light: "11.15" },
  ],
  caption:
    "Table 3 (Main Paper): Condition Breakdown on nuScenes (ATE). ZeroVO+ performs best overall, especially in challenging night and strong light scenarios.",
}

const pseudoLabelSelectionData = {
  headers: ["Language", "Geometry", "KITTI (ATE)", "nuScenes (ATE)", "Argoverse (ATE)", "GTA (ATE)"],
  rows: [
    { lang: "✓", geo: "✗", kitti: "119.15", nuscenes: "7.98", argoverse: "4.88", gta: "21.73" },
    { lang: "✗", geo: "✓", kitti: "N/A", nuscenes: "N/A", argoverse: "N/A", gta: "N/A" }, // Add data if available
    { lang: "✓", geo: "✓", kitti: "103.23", nuscenes: "7.46", argoverse: "3.65", gta: "18.99" },
  ],
  caption: "Table 2 (Supplementary): Pseudo-Label Selection. Language and geometry-based selection are complementary.",
}

const dataAugmentationData = {
  headers: ["RCR", "IHF", "COR", "KITTI (ATE)", "nuScenes (ATE)", "Argoverse (ATE)", "GTA (ATE)"],
  rows: [
    { rcr: "✓", ihf: "✗", cor: "✗", kitti: "109.55", nuscenes: "8.13", argoverse: "4.02", gta: "24.91" },
    { rcr: "✓", ihf: "✓", cor: "✗", kitti: "103.23", nuscenes: "7.46", argoverse: "3.65", gta: "18.99" },
    { rcr: "✓", ihf: "✓", cor: "✓", kitti: "113.62", nuscenes: "7.88", argoverse: "4.16", gta: "18.53" },
  ],
  caption:
    "Table 3 (Supplementary): Impact of Data Augmentation. RCR and IHF benefit generalization; COR provides marginal benefits.",
}

const noisyIntrinsicsData = {
  headers: ["Method", "Noise", "KITTI (ATE)", "nuScenes (ATE)", "Argoverse (ATE)", "GTA (ATE)"], // Simplified for website
  rows: [
    { method: "TartanVO", noise: "0%", kitti: "103.07", nuscenes: "N/A", argoverse: "N/A", gta: "N/A" },
    { method: "TartanVO", noise: "30%", kitti: "133.24", nuscenes: "N/A", argoverse: "N/A", gta: "N/A" },
    { method: "DPVO", noise: "0%", kitti: "78.53", nuscenes: "N/A", argoverse: "N/A", gta: "N/A" },
    { method: "DPVO", noise: "30%", kitti: "280.49", nuscenes: "N/A", argoverse: "N/A", gta: "N/A" },
    { method: "M+DS", noise: "0%", kitti: "154.77", nuscenes: "N/A", argoverse: "N/A", gta: "N/A" },
    { method: "M+DS", noise: "30%", kitti: "259.74", nuscenes: "N/A", argoverse: "N/A", gta: "N/A" },
    { method: "ZeroVO+", noise: "0%", kitti: "103.23", nuscenes: "N/A", argoverse: "N/A", gta: "N/A" },
    { method: "ZeroVO+", noise: "30%", kitti: "163.87", nuscenes: "N/A", argoverse: "N/A", gta: "N/A" },
  ],
  caption:
    "Table 4 (Supplementary): Impact of Noisy Intrinsics Parameters (ATE on KITTI shown). ZeroVO+ demonstrates greater robustness.",
}

const droidSlamAblationData = {
  headers: ["Sequence Length", "tₑᵣᵣ", "rₑᵣᵣ", "ATE", "sₑᵣᵣ"],
  rows: [
    { length: "Entire Sequence", terr: "14.22", rerr: "2.72", ate: "154.77", serr: "0.09" },
    { length: "50 Frames", terr: "14.40", rerr: "2.85", ate: "158.23", serr: "0.09" },
    { length: "10 Frames", terr: "16.31", rerr: "3.51", ate: "180.67", serr: "0.10" },
    { length: "2 Frames", terr: "75.24", rerr: "40.78", ate: "409.95", serr: "0.94" },
  ],
  caption: "Table 5 (Supplementary): DROID-SLAM Ablation. Performance degrades with shorter input sequences.",
}

// --- Helper Components ---

const SectionTitle = ({ icon, title, id }) => {
  const IconComponent = icon
  return (
    <div id={id} className="flex items-center space-x-3 mb-6 pt-16 -mt-16">
      {" "}
      {/* pt and -mt for anchor offset */}
      <IconComponent className="w-8 h-8 text-primary" />
      <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
    </div>
  )
}

const InfoCard = ({ icon, title, children }) => {
  const IconComponent = icon
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow">
      <div className="flex items-center space-x-3 mb-3">
        <IconComponent className="w-6 h-6 text-secondary" />
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <div className="text-gray-700 space-y-2">{children}</div>
    </div>
  )
}

const DataTable = ({ data, fullWidth = false }) => (
  <div className={`overflow-x-auto ${fullWidth ? "w-full" : "max-w-4xl mx-auto"} my-6`}>
    <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg shadow-sm">
      <thead className="bg-gray-50">
        <tr>
          {data.headers.map((header, idx) => (
            <th
              key={idx}
              scope="col"
              className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {data.rows.map((row, rowIndex) => (
          <tr key={rowIndex} className={rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}>
            {Object.values(row).map((cell, cellIndex) => (
              <td key={cellIndex} className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">
                {cell === "✓" ? (
                  <CheckCircle2 className="text-green-500 mx-auto" />
                ) : cell === "✗" ? (
                  <XCircle className="text-red-500 mx-auto" />
                ) : (
                  cell
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    {data.caption && <p className="mt-2 text-sm text-gray-600 text-center">{data.caption}</p>}
  </div>
)

const QualitativeImage = ({ src, alt, caption }) => (
  <div className="text-center">
    <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg border border-gray-200">
      <Image src={src || "/placeholder.svg"} alt={alt} layout="fill" objectFit="contain" className="bg-gray-100" />
    </div>
    {caption && <p className="mt-2 text-sm text-gray-600 italic">{caption}</p>}
  </div>
)

// --- Main Page Component ---

export default function ZeroVOPage() {
  const authors = [
    {
      name: "Lei Lai",
      image: "/authors/lei-lai.jpg",
      homepage: "https://leilai.info",
      affiliation: "Boston University",
      email: "leilai@bu.edu",
    },
    {
      name: "Zekai Yin",
      image: "/authors/zekai-yin.jpg",
      homepage: "https://zekaiyin.github.io",
      affiliation: "Boston University",
      email: "zekaiyin@bu.edu",
    },
    {
      name: "Eshed Ohn-Bar",
      image: "/authors/eshed-ohn-bar.jpg",
      homepage: "https://eshed1.github.io",
      affiliation: "Boston University",
      email: "eohnbar@bu.edu",
    },
  ]

  const bibtex = `@inproceedings{lai2025zerovo,
  title={{ZeroVO}: Visual Odometry with Minimal Assumptions},
  author={Lai, Lei and Yin, Zekai and Ohn-Bar, Eshed},
  booktitle={Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)},
  year={2025}
}`

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(bibtex)
      .then(() => alert("BibTeX copied to clipboard!"))
      .catch((err) => console.error("Failed to copy BibTeX: ", err))
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary to-secondary py-12 text-white shadow-lg">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-extrabold mb-3 tracking-tight">
            ZeroVO: Visual Odometry with Minimal Assumptions
          </h1>
          <p className="text-xl mb-6 max-w-3xl mx-auto">
            A novel VO algorithm achieving zero-shot generalization across diverse cameras and environments, without
            predefined camera calibration.
          </p>
          <div className="flex justify-center space-x-4 mb-8">
            <Link href="#paper-link" passHref legacyBehavior>
              <a className="bg-white text-primary font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-gray-200 transition duration-150 flex items-center space-x-2">
                <FileText size={20} /> <span>Paper (PDF)</span>
              </a>
            </Link>
            <Link href="#code-link" passHref legacyBehavior>
              <a className="bg-white text-primary font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-gray-200 transition duration-150 flex items-center space-x-2">
                <Code2 size={20} /> <span>Code (GitHub)</span>
              </a>
            </Link>
            <Link href="#gta-dataset-link" passHref legacyBehavior>
              <a className="bg-white text-primary font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-gray-200 transition duration-150 flex items-center space-x-2">
                <Database size={20} /> <span>GTA Dataset</span>
              </a>
            </Link>
            <Link href="#supplementary-video-link" passHref legacyBehavior>
              <a className="bg-white text-primary font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-gray-200 transition duration-150 flex items-center space-x-2">
                <Video size={20} /> <span>Supplementary Video</span>
              </a>
            </Link>
          </div>
        </div>
      </header>

      {/* Navigation (Sticky) */}
      <nav className="sticky top-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-6 py-3 overflow-x-auto">
            {[
              "Team",
              "Abstract",
              "Innovations",
              "Methodology",
              "GTA Dataset",
              "Experiments",
              "Ablations",
              "Qualitative",
              "Resources",
            ].map((item) => (
              <Link key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} passHref legacyBehavior>
                <a className="text-gray-600 hover:text-primary font-medium transition duration-150 whitespace-nowrap">
                  {item}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12">
        {/* Research Team */}
        <section id="team" className="mb-16">
          <SectionTitle icon={Users} title="Research Team" id="team-content" />
          <div className="grid md:grid-cols-3 gap-10">
            {authors.map((author) => (
              <div key={author.name} className="bg-white p-6 rounded-lg shadow-xl text-center">
                <a
                  href={author.homepage || `mailto:${author.email}`}
                  target={author.homepage ? "_blank" : "_self"}
                  rel={author.homepage ? "noopener noreferrer" : ""}
                  className="block group"
                >
                  <div className="relative w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gray-200 group-hover:border-primary transition-colors">
                    <Image
                      src={author.image || `/placeholder.svg?height=144&width=144&query=${author.name} portrait`}
                      alt={author.name}
                      width={144}
                      height={144}
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{author.name}</h3>
                </a>
                <p className="text-gray-600 text-sm">{author.affiliation}</p>
                <div className="mt-3 flex justify-center space-x-3">
                  {author.homepage && (
                    <a
                      href={author.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Homepage"
                      className="text-gray-500 hover:text-primary"
                    >
                      <Globe size={20} />
                    </a>
                  )}
                  {author.email && (
                    <a href={`mailto:${author.email}`} title="Email" className="text-gray-500 hover:text-primary">
                      <Mail size={20} />
                    </a>
                  )}
                  {/* Add other links like GitHub, LinkedIn if available */}
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Abstract */}
        <section id="abstract" className="mb-16 bg-white p-8 rounded-lg shadow-xl">
          <SectionTitle icon={BookOpen} title="Abstract" id="abstract-content" />
          <p className="text-lg leading-relaxed text-gray-700">
            We introduce ZeroVO, a novel visual odometry (VO) algorithm that achieves zero-shot generalization across
            diverse cameras and environments, overcoming limitations in existing methods that depend on predefined or
            static camera calibration setups. Our approach incorporates three main innovations. First, we design a
            calibration-free, geometry-aware network structure capable of handling noise in estimated depth and camera
            parameters. Second, we introduce a language-based prior that infuses semantic information to enhance robust
            feature extraction and generalization to previously unseen domains. Third, we develop a flexible,
            semi-supervised training paradigm that iteratively adapts to new scenes using unlabeled data, further
            boosting the models’ ability to generalize across diverse real-world scenarios. We analyze complex
            autonomous driving contexts, demonstrating over 30% improvement against prior methods on three standard
            benchmarks—KITTI, nuScenes, and Argoverse 2—as well as a newly introduced, high-fidelity synthetic dataset
            derived from Grand Theft Auto (GTA). By not requiring fine-tuning or camera calibration, our work broadens
            the applicability of VO, providing a versatile solution for real-world deployment at scale.
          </p>
        </section>

        {/* Key Innovations */}
        <section id="innovations" className="mb-16">
          <SectionTitle icon={Sparkles} title="Key Innovations" id="innovations-content" />
          <div className="grid md:grid-cols-3 gap-8">
            <InfoCard icon={Settings} title="Calibration-Free Geometry-Aware Network">
              <p>
                Designed to handle noise in estimated depth and camera parameters without requiring predefined
                calibration.
              </p>
            </InfoCard>
            <InfoCard icon={Lightbulb} title="Language-Based Semantic Prior">
              <p>
                Infuses semantic information via language models to enhance robust feature extraction and generalization
                to unseen domains.
              </p>
            </InfoCard>
            <InfoCard icon={Layers3} title="Flexible Semi-Supervised Training">
              <p>
                Iteratively adapts to new scenes using unlabeled data, boosting generalization across diverse real-world
                scenarios.
              </p>
            </InfoCard>
          </div>
        </section>

        {/* Video Demonstration */}
        <section id="video-demo" className="mb-16 bg-white p-8 rounded-lg shadow-xl">
          <SectionTitle icon={Video} title="Video Demonstration" id="video-demo-content" />
          <div className="aspect-video relative rounded-lg overflow-hidden shadow-lg border border-gray-200">
            <video
              src="/videos/VIDEO_final.mp4" // Replace with your video path
              controls
              autoPlay={false} // Set to true for autoplay, but consider UX
              muted // Recommended for autoplay
              loop
              playsInline
              poster="/placeholder.svg?height=720&width=1280" // Replace with actual thumbnail
              className="absolute inset-0 w-full h-full object-cover bg-black"
            >
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="text-center mt-4 text-gray-600">
            Watch ZeroVO in action, demonstrating its robustness across various scenarios.
          </p>
        </section>

        {/* Methodology */}
        <section id="methodology" className="mb-16">
          <SectionTitle icon={Puzzle} title="Methodology" id="methodology-content" />
          <div className="bg-white p-8 rounded-lg shadow-xl space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-3 flex items-center">
                <Cpu className="mr-2 text-secondary" />
                Network Architecture
              </h3>
              <p className="text-gray-700 mb-4">
                ZeroVO employs a Transformer-based architecture to fuse multimodal priors while reasoning over structure
                and noisy pseudo-3D information. Key components include:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4 text-gray-700">
                <li>
                  <strong>Intrinsic Parameter Estimation:</strong> Leverages WildCamera for single-image intrinsic
                  parameter estimation, avoiding reliance on fixed camera settings.
                </li>
                <li>
                  <strong>Multimodal Image Cues:</strong> Extracts optical flow (MaskFlownet), metric depth
                  (Metric3Dv2), and language-based context (LLaVA-NeXT & Sentence Transformers).
                </li>
                <li>
                  <strong>Unprojection to Pseudo-3D:</strong> Estimated depth is unprojected to a 3D point cloud, and 2D
                  optical flow to 3D scene flow, guided by estimated intrinsics.
                </li>
                <li>
                  <strong>Language and Geometry-Guided Transformer:</strong> Fuses multimodal cues (depth, flow,
                  intrinsics, language) using cross-attention mechanisms to produce robust features.
                </li>
                <li>
                  <strong>Probabilistic Ego-Motion Decoder:</strong> An MLP with two branches decodes features into
                  metric-scale translation and rotation (modeled by a matrix Fisher distribution).
                </li>
              </ul>
              <div className="my-6 p-4 border-l-4 border-primary bg-blue-50 rounded-r-md">
                <p className="font-semibold text-primary">Architecture Diagram (Fig. 1 from paper)</p>
                <div className="mt-2 relative w-full max-w-2xl mx-auto aspect-[16/9] rounded-lg overflow-hidden shadow-md border border-gray-200">
                  <Image
                    src="/placeholder.svg?height=450&width=800"
                    alt="ZeroVO Architecture Diagram"
                    layout="fill"
                    objectFit="contain"
                    className="bg-gray-100"
                  />
                </div>
                <p className="text-sm text-gray-600 mt-2 text-center"></p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-3 flex items-center">
                <FlaskConical className="mr-2 text-secondary" />
                Model Training
              </h3>
              <p className="text-gray-700 mb-4">
                ZeroVO is trained using Adam optimizer for 100 epochs. The initial teacher model is trained on
                nuScenes-OneNorth.
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4 text-gray-700">
                <li>
                  <strong>Supervised Training:</strong> Optimized using MSE loss for translation and negative
                  log-likelihood for rotation, without requiring privileged ground-truth for flow, depth, or camera
                  parameters.
                </li>
                <li>
                  <strong>Semi-Supervised Training (ZeroVO+):</strong> Refined using pseudo-labels from an unconstrained
                  YouTube dataset. This involves:
                  <ul className="list-circle list-inside space-y-1 pl-6 mt-1">
                    <li>
                      <strong>Geometry-Guided Pseudo-Label Selection:</strong> Filters noisy samples based on warping
                      consistency (normSSIM {"<"} 0.5).
                    </li>
                    <li>
                      <strong>Language-Guided Pseudo-Label Selection:</strong> Filters redundant samples based on text
                      feature similarity over a temporal window (subspace-sim {"<"} 5.0).
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Data Augmentations:</strong> Random Crop and Resize (RCR) to simulate diverse camera
                  intrinsics and Image Horizontal Flip (IHF) are employed. COR (visual corruptions) showed marginal
                  benefits.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-3 flex items-center">
                <SlidersHorizontal className="mr-2 text-secondary" />
                Model Variants
              </h3>
              <ul className="list-disc list-inside space-y-2 pl-4 text-gray-700">
                <li>
                  <strong>ZeroVO:</strong> Default supervised model.
                </li>
                <li>
                  <strong>ZeroVO+:</strong> Further trained with semi-supervision and multimodal pseudo-label selection.
                  Inference: ~0.6 FPS (constrained by LLaVA-NeXT).
                </li>
                <li>
                  <strong>LiteZeroVO+:</strong> Resource-constrained variant omitting language-conditioned input modules
                  (uses self-attention instead of cross-attention for language). Inference: ~5 FPS.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* GTA Dataset */}
        <section id="gta-dataset" className="mb-16">
          <SectionTitle icon={Database} title="Novel GTA V Dataset" id="gta-dataset-content" />
          <div className="bg-white p-8 rounded-lg shadow-xl grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                To comprehensively assess generalization, we introduce a new high-fidelity synthetic dataset derived
                from Grand Theft Auto V (GTA). It features 922 driving sequences (600 on-road, 600 off-road, 25s each at
                10 FPS) with challenging scenarios:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4 text-gray-700 mb-4">
                <li>Diverse weather conditions (snow, rain, day, night).</li>
                <li>Varied driving speeds, including high-speed maneuvers.</li>
                <li>Complex traffic scenarios and dynamic objects.</li>
                <li>Varied camera settings and lens corruption effects (e.g., raindrops).</li>
                <li>Off-road scenes with challenging terrains (mountains, deserts, forests).</li>
              </ul>
              <p className="text-gray-700 mb-4">
                GTA offers enhanced image realism and a wider variety of road conditions compared to existing simulators
                like CARLA or TartanAir.
              </p>
              <Link href="#gta-dataset-link" passHref legacyBehavior>
                <a className="inline-flex items-center space-x-2 bg-primary text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-opacity-90 transition duration-150">
                  <Download size={20} /> <span>Access GTA Dataset</span>
                </a>
              </Link>
            </div>
            <div className="mt-6 md:mt-0">
              <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden shadow-md border border-gray-200">
                <Image
                  src="/placeholder.svg?height=450&width=800"
                  alt="GTA Dataset Example"
                  layout="fill"
                  objectFit="cover"
                  className="bg-gray-100"
                />
              </div>
              <p className="text-sm text-gray-600 mt-2 text-center">
                Figure 1 (Supplementary): Example from our GTA Dataset. Replace with actual image.
              </p>
            </div>
          </div>
          <div className="mt-6">
            <h4 className="text-xl font-semibold mb-2">Dataset Comparison:</h4>
            <DataTable
              data={{
                headers: ["Dataset", "Weathers", "Lens Corruption", "Resolution", "Off-Road", "Size", "Type"],
                rows: [
                  {
                    name: "KITTI",
                    weather: "Day",
                    lens: "✗",
                    res: "1226×370",
                    offroad: "✗",
                    size: "23,201 Imgs",
                    type: "Real",
                  },
                  {
                    name: "nuScenes",
                    weather: "Rain, Day, Night",
                    lens: "✓ (rare)",
                    res: "1600×900",
                    offroad: "✗",
                    size: "193,815 Imgs",
                    type: "Real",
                  },
                  {
                    name: "Argoverse 2",
                    weather: "Rain, Day, Night",
                    lens: "✗",
                    res: "1550×2048",
                    offroad: "✗",
                    size: "320,159 Imgs",
                    type: "Real",
                  },
                  {
                    name: "GTA (Ours)",
                    weather: "Snow, Rain, Day, Night",
                    lens: "✓",
                    res: "1920×1080",
                    offroad: "✓",
                    size: "300,000 Imgs",
                    type: "Synthetic",
                  },
                ],
                caption:
                  "Table 1 (Supplementary): Dataset Comparison. GTA provides diverse scenes for extensive VO validation.",
              }}
              fullWidth
            />
          </div>
        </section>

        {/* Experimental Setup & Results */}
        <section id="experiments" className="mb-16">
          <SectionTitle icon={Experiment} title="Experimental Setup & Results" id="experiments-content" />
          <div className="bg-white p-8 rounded-lg shadow-xl space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-3 flex items-center">
                <ListChecks className="mr-2 text-secondary" />
                Evaluation Metrics
              </h3>
              <p className="text-gray-700 mb-4">
                We evaluate using standard VO metrics: Translation Error (t<sub>err</sub> %), Rotation Error (r
                <sub>err</sub> °/100m), Absolute Trajectory Error (ATE), and Scale Error (s<sub>err</sub>). Unlike
                methods evaluating up-to-scale, we focus on metric-scale translation.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-3 flex items-center">
                <BarChart3 className="mr-2 text-secondary" />
                Quantitative Results
              </h3>
              <p className="text-gray-700 mb-4">
                ZeroVO variants are compared against state-of-the-art baselines (XVO, M+DS, TartanVO, DPVO) on KITTI,
                nuScenes, Argoverse 2, and our GTA dataset. All methods are provided with estimated camera intrinsics
                and metric depth for fair zero-shot comparison.
              </p>
              <DataTable data={mainResultsData} fullWidth />
              <div className="my-6 p-4 border-l-4 border-primary bg-blue-50 rounded-r-md">
                <p className="font-semibold text-primary">Qualitative Trajectory Results (Fig. 2 from paper)</p>
                <div className="mt-2 relative w-full max-w-3xl mx-auto aspect-[16/9] rounded-lg overflow-hidden shadow-md border border-gray-200">
                  <Image
                    src="/placeholder.svg?height=450&width=800"
                    alt="ZeroVO Qualitative Trajectory Results"
                    layout="fill"
                    objectFit="contain"
                    className="bg-gray-100"
                  />
                </div>
                <p className="text-sm text-gray-600 mt-2 text-center">
                  Replace with actual Figure 2 from your paper (e.g., KITTI trajectories).
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-3 flex items-center">
                <Eye className="mr-2 text-secondary" />
                Performance under Challenging Conditions
              </h3>
              <p className="text-gray-700 mb-4">
                We analyze performance on nuScenes subsets based on weather conditions (Day, Night, Rain) and
                challenging light reflections.
              </p>
              <DataTable data={challengingConditionsData} />
            </div>
          </div>
        </section>

        {/* Ablation Studies */}
        <section id="ablations" className="mb-16">
          <SectionTitle icon={TestTube2} title="Ablation Studies (from Supplementary)" id="ablations-content" />
          <div className="bg-white p-8 rounded-lg shadow-xl space-y-10">
            <InfoCard icon={ListChecks} title="Pseudo-Label Selection (Table 2 Supp.)">
              <p>
                Both language-guided (for diversity) and geometry-guided (for noise exclusion) selection mechanisms are
                complementary and crucial for optimal semi-supervised training performance.
              </p>
              <DataTable data={pseudoLabelSelectionData} />
            </InfoCard>
            <InfoCard icon={ImageIcon} title="Data Augmentation Strategies (Table 3 Supp.)">
              <p>
                Random Crop and Resize (RCR) significantly impacts rotation estimation by simulating diverse camera
                intrinsics. Image Horizontal Flip (IHF) also benefits generalization. Synthetic weather/stylization
                (COR) showed marginal improvements.
              </p>
              <DataTable data={dataAugmentationData} />
            </InfoCard>
            <InfoCard icon={AlertTriangle} title="Impact of Noisy Intrinsic Parameters (Table 4 Supp.)">
              <p>
                Increased noise in estimated camera intrinsics significantly degrades performance for all models.
                ZeroVO+ demonstrates greater robustness compared to baselines under highly noisy intrinsic settings.
              </p>
              <DataTable data={noisyIntrinsicsData} fullWidth />
            </InfoCard>
            <InfoCard icon={Puzzle} title="DROID-SLAM Ablation (Table 5 Supp.)">
              <p>
                DROID-SLAM's performance (M+DS) declines significantly as the input sequence length decreases,
                highlighting its dependence on multi-frame optimization. ZeroVO, a two-frame method, is not affected by
                this.
              </p>
              <DataTable data={droidSlamAblationData} />
            </InfoCard>
            <InfoCard icon={Info} title="Main Paper Ablations (Table 2 Main Paper)">
              <p>
                The main paper's ablation study (Table 2) demonstrates the impact of each core module (Flow, Depth,
                Language prior) and the benefits of semi-supervised training with pseudo-label selection (S+P). Each
                component contributes to the overall performance, with the full ZeroVO+ model achieving the best
                results.
              </p>
              {/* You can add a simplified version of Table 2 from the main paper here if desired */}
            </InfoCard>
          </div>
        </section>

        {/* Qualitative Analysis & Failure Cases */}
        <section id="qualitative" className="mb-16">
          <SectionTitle
            icon={ImageIcon}
            title="Qualitative Analysis & Failure Cases (from Supplementary)"
            id="qualitative-content"
          />
          <div className="bg-white p-8 rounded-lg shadow-xl space-y-10">
            <div>
              <h3 className="text-2xl font-semibold mb-4">GTA Dataset Examples (Tables 6 & 7 Supp.)</h3>
              <p className="text-gray-700 mb-6">
                Qualitative examples from our GTA dataset showcasing diverse off-road (desert, forest, mountain) and
                on-road (city, tunnel, highway) scenarios under various weather conditions, with LLaVA-generated
                captions.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <QualitativeImage
                  src="/placeholder.svg?height=300&width=400"
                  alt="GTA Off-Road Desert"
                  caption="GTA Off-Road: Desert, Wind Turbines"
                />
                <QualitativeImage
                  src="/placeholder.svg?height=300&width=400"
                  alt="GTA Off-Road Forest Fog"
                  caption="GTA Off-Road: Forest, Fog"
                />
                <QualitativeImage
                  src="/placeholder.svg?height=300&width=400"
                  alt="GTA Off-Road Mountain Cliff"
                  caption="GTA Off-Road: Mountain, Cliff Road"
                />
                <QualitativeImage
                  src="/placeholder.svg?height=300&width=400"
                  alt="GTA On-Road City Traffic Light"
                  caption="GTA On-Road: City, Traffic Light"
                />
                <QualitativeImage
                  src="/placeholder.svg?height=300&width=400"
                  alt="GTA On-Road Highway Rain"
                  caption="GTA On-Road: Highway, Rain"
                />
                <QualitativeImage
                  src="/placeholder.svg?height=300&width=400"
                  alt="GTA On-Road Night Wet Road"
                  caption="GTA On-Road: Night, Wet Road"
                />
              </div>
              <p className="text-center mt-4 text-gray-600">
                Replace with actual images from Tables 6 & 7 of supplementary material.
              </p>
            </div>
          </div>
        </section>

        {/* Resources & Citation */}
        <section id="resources" className="mb-16">
          <SectionTitle icon={Share2} title="Resources & Citation" id="resources-content" />
          <div className="bg-white p-8 rounded-lg shadow-xl grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Downloads & Links</h3>
              <ul className="space-y-3">
                {[
                  { href: "#paper-link", text: "Paper (PDF)", icon: FileText },
                  { href: "#code-link", text: "Code (GitHub)", icon: Github },
                  { href: "#gta-dataset-link", text: "GTA Dataset", icon: Database },
                  { href: "#supplementary-video-link", text: "Supplementary Video", icon: Video },
                  { href: "#cvpr-link", text: "CVPR 2025", icon: Award }, // Replace with actual CVPR link
                ].map((link) => (
                  <li key={link.text}>
                    <Link href={link.href} passHref legacyBehavior>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-primary hover:underline font-medium"
                      >
                        <link.icon size={20} className="mr-2" /> {link.text}{" "}
                        <ExternalLink size={16} className="ml-1 opacity-70" />
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Cite This Work</h3>
              <div className="bg-gray-50 p-4 rounded-md border border-gray-200 relative">
                <pre className="text-sm whitespace-pre-wrap break-all font-mono text-gray-700">{bibtex}</pre>
                <button
                  onClick={copyToClipboard}
                  className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 text-gray-700 p-1.5 rounded"
                  title="Copy BibTeX to clipboard"
                >
                  <ClipboardCopy size={18} />
                </button>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8 text-center">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} Lei Lai, Zekai Yin, Eshed Ohn-Bar. All rights reserved.</p>
          <p className="text-sm mt-1">ZeroVO presented at CVPR 2025 (Paper ID 7666).</p>
          <p className="text-xs mt-2">Website template generated with assistance from v0.</p>
        </div>
      </footer>
    </div>
  )
}
