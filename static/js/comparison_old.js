const modelViewerComparison1 = document.querySelector("model-viewer#modelViewerComparison1")
const modelViewerComparison2 = document.querySelector("model-viewer#modelViewerComparison2")

// Initialize the selection panel images
$("#comparisonSelectionPanel .selectable-image").each((i, img) => {
  img.src = `static/comparison/${img.getAttribute("name")}/image.jpg`
})

// // Set the toggle buttons
// toggleComparisonLeftButton = document.querySelector('#toggleTexturedComparison .toggle-left');
// toggleComparisonRightButton = document.querySelector('#toggleTexturedComparison .toggle-right');

// toggleComparisonLeftButton.addEventListener('click', function() {
//     toggleComparisonLeftButton.classList.add('active');
//     toggleComparisonRightButton.classList.remove('active');
//     modelViewerComparison1.setTextured(false);
//     modelViewerComparison2.setTextured(false);
// });

// toggleComparisonRightButton.addEventListener('click', function() {
//     toggleComparisonLeftButton.classList.remove('active');
//     toggleComparisonRightButton.classList.add('active');
//     modelViewerComparison1.setTextured(true);
//     modelViewerComparison2.setTextured(true);
// });

// Click an image to select the case
const comparisonSelectionPanel = document.getElementById("comparisonSelectionPanel")
comparisonSelectionPanel.addEventListener("click", (event) => {
  const img = event.target.closest(".selectable-image")
  if (!img || img.classList.contains("selected")) return

  // Highlight the selected image
  comparisonSelectionPanel.querySelectorAll(".selectable-image").forEach((image) => {
    image.classList.remove("selected")
  })
  img.classList.add("selected")

  // Load the corresponding model
  const name = img.getAttribute("name")
  const baseline = document.getElementById("comparisonBaselineSelection").value

  const meshPath1 = `static/comparison/${name}/mesh_ours.glb`,
    meshPath2 = `static/comparison/${name}/mesh_${baseline}.glb`
  const texturePath = `static/comparison/${name}/image.jpg`

  modelViewerComparison1.src = meshPath1
  modelViewerComparison1.texturePath = texturePath
  modelViewerComparison1.resetView()
  modelViewerComparison1.showPoster()

  modelViewerComparison2.src = meshPath2
  modelViewerComparison2.texturePath = texturePath
  modelViewerComparison2.resetView()
  modelViewerComparison2.showPoster()
})

// Dropdown to select the baseline method
document.getElementById("comparisonBaselineSelection").addEventListener("change", (event) => {
  const name = document.querySelector("#comparisonSelectionPanel .selectable-image.selected").getAttribute("name")
  const baseline = document.getElementById("comparisonBaselineSelection").value

  if (["metric3d_v2", "depth_anything_v2"].includes(baseline))
    document.querySelector("#comparisonFootnote").style.opacity = `100%`
  else document.querySelector("#comparisonFootnote").style.opacity = `0%`

  const meshPath2 = `static/comparison/${name}/mesh_${baseline}.glb`
  const texturePath = `static/comparison/${name}/image.jpg`

  modelViewerComparison2.src = meshPath2
  modelViewerComparison2.texturePath = texturePath
  modelViewerComparison2.showPoster()
})

// Sync the view of two model viewers
var syncViewWith = undefined
var syncViewEnabled = true

const syncView = (event) => {
  if (!syncViewEnabled || event.target !== syncViewWith) return
  const source = syncViewWith
  const target = source === modelViewerComparison1 ? modelViewerComparison2 : modelViewerComparison1

  const sourceOrbit = source.getCameraOrbit()
  const sourceTarget = source.getCameraTarget()
  const sourceFoV = source.getFieldOfView()
  target.cameraOrbit = `${sourceOrbit.theta}rad ${sourceOrbit.phi}rad ${sourceOrbit.radius}m`
  target.cameraTarget = `${sourceTarget.x}m ${sourceTarget.y}m ${sourceTarget.z}m`
  target.fieldOfView = `${sourceFoV}deg`
  target.jumpCameraToGoal()
}

modelViewerComparison1.addEventListener("camera-change", syncView)
modelViewerComparison1.addEventListener("mousedown", () => {
  syncViewWith = modelViewerComparison1
})
modelViewerComparison1.addEventListener("wheel", () => {
  syncViewWith = modelViewerComparison1
})

modelViewerComparison2.addEventListener("camera-change", syncView)
modelViewerComparison2.addEventListener("mousedown", () => {
  syncViewWith = modelViewerComparison2
})
modelViewerComparison2.addEventListener("wheel", () => {
  syncViewWith = modelViewerComparison2
})

// Initialize the model viewer with selected model
$(document).ready(() => {
  const name = document.querySelector("#comparisonSelectionPanel .selectable-image.selected").getAttribute("name")
  const baseline = document.getElementById("comparisonBaselineSelection").value

  const meshPath1 = `static/comparison/${name}/mesh_ours.glb`,
    meshPath2 = `static/comparison/${name}/mesh_${baseline}.glb`
  const texturePath = `static/comparison/${name}/image.jpg`

  modelViewerComparison1.src = meshPath1
  modelViewerComparison1.texturePath = texturePath
  modelViewerComparison1.isTextured = true
  modelViewerComparison1.resetView()
  modelViewerComparison1.showPoster()

  modelViewerComparison2.src = meshPath2
  modelViewerComparison2.texturePath = texturePath
  modelViewerComparison2.isTextured = true
  modelViewerComparison2.resetView()
  modelViewerComparison2.showPoster()
})

// This code is used to add additional functionality to the ours model-viewers.
document.querySelectorAll("model-viewer.model-viewer-texture").forEach((modelViewer) => {
  // Switches between textured and untextured mode
  modelViewer.setTextured = (isTextured) => {
    if (isTextured !== undefined) modelViewer.isTextured = isTextured

    if (modelViewer.isTextured) {
      modelViewer.model.materials[0].pbrMetallicRoughness.setMetallicFactor(0.0)
      modelViewer.model.materials[0].pbrMetallicRoughness.setMetallicFactor(0.0)
      modelViewer.model.materials[0].pbrMetallicRoughness.setRoughnessFactor(1.0)
      modelViewer.model.materials[0].pbrMetallicRoughness.setBaseColorFactor([1.0, 1.0, 1.0])
      if (modelViewer.currentTexture) {
        modelViewer.model.materials[0].pbrMetallicRoughness.baseColorTexture.setTexture(modelViewer.currentTexture)
      }
    } else {
      modelViewer.model.materials[0].pbrMetallicRoughness.setMetallicFactor(0.5)
      modelViewer.model.materials[0].pbrMetallicRoughness.setRoughnessFactor(0.5)
      modelViewer.model.materials[0].pbrMetallicRoughness.setBaseColorFactor([0.6, 0.6, 0.6])
      modelViewer.model.materials[0].pbrMetallicRoughness.baseColorTexture.setTexture(null)
    }
  }

  // Reset view
  modelViewer.resetView = () => {
    modelViewer.cameraTarget = "0m 0m 0m"
    modelViewer.fieldOfView = "45deg"
    modelViewer.cameraOrbit = "0deg 90deg 2m"
    modelViewer.resetTurntableRotation(0)
    modelViewer.jumpCameraToGoal()
  }

  modelViewer.addEventListener("load", async () => {
    modelViewer.currentTexture = await modelViewer.createTexture(modelViewer.texturePath)
    modelViewer.setTextured()
  })
})

const enlargedImage = document.querySelector("#enlarged-image")

document.querySelectorAll(".selectable-image").forEach((img) => {
  img.addEventListener("mouseenter", () => {
    const imgRect = img.getBoundingClientRect()
    enlargedImage.src = img.src
    enlargedImage.style.opacity = 1
    enlargedImage.style.left =
      Math.max(
        20,
        Math.min(
          window.innerWidth - enlargedImage.offsetWidth - 20,
          imgRect.left + imgRect.width / 2 - enlargedImage.offsetWidth / 2,
        ),
      ) + "px"
    enlargedImage.style.top = imgRect.top - 10 - enlargedImage.offsetHeight + "px"
  })
  img.addEventListener("mouseleave", () => {
    enlargedImage.style.opacity = 0
  })
  img.addEventListener("touchend", () => {
    enlargedImage.style.opacity = 0
  })
})
