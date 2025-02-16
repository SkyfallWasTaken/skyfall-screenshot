export interface BaseState {
  variant: string;
}

export interface NoUploadState {
  variant: "notUploaded";
}

export interface ImageUploadedState {
  variant: "imageUploaded";
  imageFile: File;
}

export type State = NoUploadState | ImageUploadedState;

export const state: State = $state({
  variant: "notUploaded",
});
