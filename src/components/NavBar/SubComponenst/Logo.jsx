import Image from "next/image"
import ImageLogo from "../../../../public/assets/images/logo.jpg"

function Logo(){
return (
    <>
<section className="box-logo">
    <Image
    src= {ImageLogo}
    height="40px"
    width="40px"
    alt="logo do portal de Fakes News"
    title="logo do portal de Fakes News"
    />
</section>
    </>
)
}

export default Logo;