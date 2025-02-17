interface BaseState {
	variant: string;
}

interface NoUploadState {
	variant: "notUploaded";
}

interface ImageUploadedState {
	variant: "imageUploaded";
	imageFile: File;
	margin: number;
	borderRadius: number;
	designerElement?: HTMLDivElement;
}

interface NoUploadState {
	variant: "notUploaded";
}

interface ImageUploadedState {
	variant: "imageUploaded";
	imageFile: File;
	margin: number;
	borderRadius: number;
	designerElement?: HTMLDivElement;
}

type State = BaseState & (NoUploadState | ImageUploadedState);

export const appState: State = $state({
	variant: "notUploaded",
});

export function setImageUploaded(file: File) {
	const newState: ImageUploadedState = {
		imageFile: file,
		margin: 12,
		borderRadius: 12,
		designerElement: undefined,
		variant: "imageUploaded",
	};
	Object.assign(appState, newState);
}
