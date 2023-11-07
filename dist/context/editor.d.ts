export type EditorContextData = {
  minimumCropDimensions: {
    width: number
    height: number
  }
  fixedAspectRatio: number
  onBackPress: () => void
  onSave: () => void
  imageUri: string | null
}
export declare const EditorContext: import('react').Context<EditorContextData>
