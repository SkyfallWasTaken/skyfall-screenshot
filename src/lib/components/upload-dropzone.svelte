<script lang="ts">
  import ImageUp from "lucide-svelte/icons/image-up";
  import { state as appState } from "$lib/state.svelte";
  import type { ImageUploadedState } from "$lib/state.svelte";

  let fileInput: HTMLInputElement;

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
    if (event.dataTransfer?.files) {
      const file = event.dataTransfer.files[0];
      if (file?.type.startsWith("image/")) {
        onImageUpload(file);
      }
    }
  }

  function onDragOver(event: DragEvent) {
    event.preventDefault();
    if (event.dataTransfer) {
      event.dataTransfer.dropEffect = "copy";
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
  onclick={onClick}
  onkeydown={(event) => event.key == "Enter" && onClick()}
  class="hover:bg-surface0 hover:cursor-pointer transition duration-100 px-8 py-6 rounded shadow border border-dashed border-surface0 flex flex-col items-center justify-center w-2/3"
>
  <div class="text-mauve mb-2">
    <ImageUp size={32} />
  </div>
  <h2 class="text-xl font-semibold mb-0.5">Upload a file</h2>
  <p class="text-text/80">
    Or click here to upload a file or copy and paste an image
  </p>
</div>
