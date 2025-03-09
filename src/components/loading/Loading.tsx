
import { LoadBody, LoadImg, LoadTitle } from './Loading.style'

const Loading = () => {
  return (
    <LoadBody>
      <LoadImg src="../img/logo.webp" alt="logo" />
      <LoadTitle>Getting pokemon</LoadTitle>
    </LoadBody>
  )
}

export default Loading;