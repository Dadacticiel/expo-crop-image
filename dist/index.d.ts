import { ReactNode } from 'react'
import { ImageEditorProps } from './@types'
type Props = {
  processingComponent?: ReactNode
}
export declare function ImageEditorView({
  processingComponent,
}: Props): import('react').JSX.Element
export declare function ImageEditor({
  isVisible,
  ...props
}: ImageEditorProps): import('react').JSX.Element
export {}
