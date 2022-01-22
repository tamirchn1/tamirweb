import React from "react"
import { FaFacebook , FaGoogle, FaInstagram, FaLinkedin, FaGithub} from "react-icons/fa";

function Footer(){
    return (

<section class="text-center text-white footer">

  <div class="container p-3 pb-1">
   
    <section class="mb-2">
  <a target="_blank" rel="noreferrer" class="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/tamir.chen.1" role="button"
        ><FaFacebook class="fab fa-facebook-f fa-2x"/></a>
      <a target="_blank" rel="noreferrer" class="btn btn-outline-light btn-floating m-1" href="mailto:Tamirchn1@gmail.com" role="button"
        ><FaGoogle class="fab fa-google fa-2x"/></a>
      <a target="_blank" rel="noreferrer" class="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/tamir_hassan_/?hl=en" role="button"
        ><FaInstagram class="fab fa-instagram fa-2x"/></a>
      <a target="_blank" rel="noreferrer" class="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/tamirchen/" role="button"
        ><FaLinkedin class="fab fa-linkedin-in fa-2x"/></a>
      <a target="_blank" rel="noreferrer" class="btn btn-outline-light btn-floating m-1" href="https://github.com/tamirchn1" role="button">
         <FaGithub class="fab fa-github fa-2x"/></a>
    </section>
  </div>

  <div class="text-center p-3" style={{backgroundColor: "rgba(0, 30, 23, 0.2)"}}>
    © {new Date().getFullYear()} Copyright -
    <a class="text-white" href="mailto:Tamirchn1@gmail.com">Tamir Chen</a>
  </div>

</section>
    );
}




export default Footer



