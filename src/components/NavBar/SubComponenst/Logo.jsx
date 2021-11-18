import Image from "next/image"
import ImageLogo from "../../../../public/assets/images/logo.jpeg"

function Logo(){
return (
    <>
<section className="box-logo mx-2">
    <Image
    src= {ImageLogo}
    height="50px"
    width="50px"
    alt="logo do portal de Fakes News"
    title="logo do portal de Fakes News"
    />
</section>
    </>
)
}

export default Logo;