declare module '@sanity/image-url' {
    import {SanityClientLike} from '@sanity/image-url/lib/types/types'
  
    export default function imageUrlBuilder(client: SanityClientLike): ImageUrlBuilder
  
    interface ImageUrlBuilder {
      image(source: any): ImageUrlBuilder
      width(width: number): ImageUrlBuilder
      height(height: number): ImageUrlBuilder
      size(width: number, height: number): ImageUrlBuilder
      fit(fit: 'clip' | 'crop' | 'fill' | 'fillmax' | 'max' | 'scale' | 'min'): ImageUrlBuilder
      url(): string
    }
  }
  
  