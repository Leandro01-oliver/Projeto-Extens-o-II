import Image from "next/image"
import ImageCenter from "../../../../public/assets/images/cor.png"
function ImageC(){

    return(
        <>
  <section className="box-img-center text-center my-3">
      <Image
      src={ImageCenter}
      height="100px"
      width="100px"
      />
  </section>
        </>
    )
}
export default ImageC;