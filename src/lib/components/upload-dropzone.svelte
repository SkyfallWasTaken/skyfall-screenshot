<script lang="ts">
  import ImageUp from "lucide-svelte/icons/image-up";
</script>

<div
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
