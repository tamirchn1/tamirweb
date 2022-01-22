
function About() {
  return (
   <section id="about" class="avatar-about mt-5 p-5">
      <div class="container">
        <div class="row">
          <div class=" avatar pb-sm-4 col-sm-12 col-md-12 col-lg-3 pt-lg-1">
            <div class="avatar-img text-center">
              <img class="img-fluid" src="/images/avatar.png" alt="" width="200" height="200"/>
            </div>
          </div>
          <div class="info col-sm-6 col-md-10 col-lg-7">
            <div class="about">
              <h3 class="pb-4 ">About Me</h3>
              <h4 class="my-name">Tamir Chen</h4>
              <p class="profession">FULL-STACK DEVELOPER &amp; UX/UI DESIGNER</p>
              <p class="profession">MUSIC PRODUCER &amp; SOUND TECH</p>
              <p>
                Hi, <br/>
                I am a Full stack developer based in Berlin, Germany. I
                have specialized in development in the last 2 years. 
              </p>
            </div>
                <div class="email-btn col-lg-10 py-4 text-center">
          <a type="button" class="btn btn-secondary" href='mailto:Tamirchn1@gmail.com'>
          Hire me
          </a>
        </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
