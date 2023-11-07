import { ComponentProps, ReactNode } from 'react'
import { ActivityIndicator } from 'react-native'
type Props = {
  color?: string
  size?: ComponentProps<typeof ActivityIndicator>['size']
  customComponent?: ReactNode
}
declare function Processing({
  color,
  size,
  customComponent,
}: Props): import('react').JSX.Element
export { Processing }
