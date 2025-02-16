<script lang="ts">
  import ImageUp from "lucide-svelte/icons/image-up";
  import {
    state as appState,
    type ImageUploadedState,
  } from "$lib/state.svelte";
  import { toast } from "svelte-sonner";

  let fileInput: HTMLInputElement;
  let isDraggingFile = false;

  function onImageUpload(file: File) {
    (appState as ImageUploadedState).imageFile = file;
    appState.variant = "imageUploaded";
  }

  function onClick() {
    fileInput.click();
  }

  function onFileSelect(event: Event) {
    const files = (event.target as HTMLInputElement).files;
    if (files && files.length > 0) {
      const file = files[0];
      onImageUpload(file);
    }
  }

  function onDrop(event: DragEvent) {
    event.preventDefault();
    isDraggingFile = false;
    if (event.dataTransfer?.files) {
      const file = event.dataTransfer.files[0];
      if (file?.type.startsWith("image/")) {
        onImageUpload(file);
      } else {
        toast.error("File must be an image.");
      }
    }
  }

  function onDragOver(event: DragEvent) {
    event.preventDefault();
    isDraggingFile = true;
    if (event.dataTransfer) {
      event.dataTransfer.dropEffect = "copy";
    }
  }

  function onDragLeave(event: DragEvent) {
    // Check if we're leaving the dropzone and not just entering a child element
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    const x = event.clientX;
    const y = event.clientY;

    // If the cursor is outside the dropzone bounds, we've actually left
    if (
      x <= rect.left ||
      x >= rect.right ||
      y <= rect.top ||
      y >= rect.bottom
    ) {
      isDraggingFile = false;
    }
  }
</script>

<input
  bind:this={fileInput}
  type="file"
  accept="image/*"
  class="hidden"
  onchange={onFileSelect}
  multiple={false}
/>

<div
  role="button"
  tabindex="0"
  ondrop={onDrop}
  ondragover={onDragOver}
  ondragleave={onDragLeave}
  onclick={onClick}
  onkeydown={(event) => event.key == "Enter" && onClick()}
  class="text-center hover:cursor-pointer transition duration-500 px-8 py-12 rounded shadow border border-dashed flex flex-col items-center justify-center w-2/3 text-base {isDraggingFile
    ? 'bg-blue border-blue-500'
    : 'hover:brightness-110 border-surface0 bg-mauve'}"
>
  <div class="mb-2">
    <ImageUp size={32} />
  </div>
  <h2 class="text-2xl font-bold mb-0.5">
    {isDraggingFile ? "Upload file to Skyfall Screenshot" : "Upload a file"}
  </h2>
  <p class="text-lg">
    or click here to upload a file or copy and paste an image
  </p>
</div>
