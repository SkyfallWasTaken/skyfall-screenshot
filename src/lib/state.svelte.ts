export interface NoUploadState {
  variant: "notUploaded";
}

export interface ImageUploadedState {
  variant: "imageUploaded";
}

export type State = NoUploadState | ImageUploadedState;

export const state: State = $state({
  variant: "notUploaded",
});
