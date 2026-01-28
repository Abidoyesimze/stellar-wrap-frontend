import html2canvas from "html2canvas";

/**
 * Downloads the ShareImageCard as a PNG image
 * @param element - The DOM element to capture (ShareImageCard ref)
 * @returns Promise that resolves when download is triggered
 * @throws Error if canvas generation or download fails
 */
export async function downloadShareImage(element: HTMLElement): Promise<void> {
  try {
    // Generate high-quality canvas from the element
    const canvas = await html2canvas(element, {
      scale: 3, // 3x resolution for high quality on social media
      backgroundColor: "#020202",
      useCORS: true, // Enable cross-origin images if any
      allowTaint: true, // Allow cross-origin images
      logging: false, // Disable console logs
      width: 1080,
      height: 1080,
      onclone: (clonedDoc) => {
        // Convert any oklab/oklch colors to standard formats before rendering
        const clonedElement =
          clonedDoc.querySelector('[style*="oklab"]') ||
          clonedDoc.querySelector('[style*="oklch"]');
        if (clonedElement) {
          // Force recomputation of styles to use computed RGB values
          const allElements = clonedDoc.querySelectorAll("*");
          allElements.forEach((el) => {
            if (el instanceof HTMLElement) {
              const computedStyle = window.getComputedStyle(el);
              // Force background color to computed value
              if (computedStyle.backgroundColor) {
                el.style.backgroundColor = computedStyle.backgroundColor;
              }
              if (computedStyle.color) {
                el.style.color = computedStyle.color;
              }
            }
          });
        }
      },
    });

    // Convert canvas to blob
    const blob = await new Promise<Blob>((resolve, reject) => {
      canvas.toBlob(
        (blob) => {
          if (blob) {
            resolve(blob);
          } else {
            reject(new Error("Failed to generate image blob"));
          }
        },
        "image/png",
        1.0, // Maximum quality
      );
    });

    // Create download link and trigger download
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "stellar-wrapped-2026.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Clean up the blob URL
    setTimeout(() => URL.revokeObjectURL(url), 100);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to download image: ${error.message}`);
    }
    throw new Error("Failed to download image: Unknown error occurred");
  }
}
