import { appState } from "$lib/state.svelte";
import * as htmlToImage from "html-to-image";
import { toast } from "svelte-sonner";

export function downloadImage() {
	if (appState.variant !== "imageUploaded" || !appState.designerElement) return;

	htmlToImage
		.toPng(appState.designerElement)
		.then((dataUrl) => {
			const link = document.createElement("a");
			link.download = "skyedit.png";
			link.href = dataUrl;
			link.click();
			toast.success("Image downloaded!");
		})
		.catch((error) => {
			console.error("Oops, something went wrong!", error);
			toast.error("Failed to generate image - sorry! Please try again.");
		});
}

export function copyToClipboard() {
	if (appState.variant !== "imageUploaded" || !appState.designerElement) return;

	htmlToImage
		.toPng(appState.designerElement)
		.then(async (dataUrl) => {
			try {
				// Convert data URL to Blob
				const response = await fetch(dataUrl);
				const blob = await response.blob();

				// Create ClipboardItem and write to clipboard
				const item = new ClipboardItem({ "image/png": blob });
				await navigator.clipboard.write([item]);

				toast.success("Image copied to clipboard!");
			} catch (error) {
				console.error("Failed to copy image to clipboard:", error);
				toast.error("Failed to copy image to clipboard");
			}
		})
		.catch((error) => {
			console.error("Failed to generate image:", error);
			toast.error("Failed to generate image");
		});
}
