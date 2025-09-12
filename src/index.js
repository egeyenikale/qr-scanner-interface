export const project = {
  slug: "qr-scanner-interface",
  title: "QR Scanner Interface",
  description: "Mobile-friendly QR scanning interface.",
  features: [
  "Camera permission flow",
  "QR scan view",
  "Manual code entry",
  "Scan result state",
  "Error feedback",
  "Responsive layout"
  ]
};

export function summarizeProject() {
  return `${project.title}: ${project.features.length} planned features`;
}
