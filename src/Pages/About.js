import React from "react";
import './style.css'

export default function About() {
  return (
<div>
   <main>
      <div className="jumbotron">
         <h1 className="display-4">About Me</h1>
         <div style={{width: 20}}>
            <img
               src="https://media-exp1.licdn.com/dms/image/C5603AQExJYUZBLiaUQ/profile-displayphoto-shrink_400_400/0?e=1605139200&v=beta&t=jCHsLULlF629psQxn-VBIaWg6_XqTTC8jPavn1iPL_g"
               class="card-img-top"
               alt="Wesley McMillan"
               />
         </div>
         <hr className="my-4"/>
         <p>
            My name is Wesley McMillan, I am from Los Angeles, CA and graduated
            from Seattle University with a degree in Communications and Media in
            2020. I am currently studying Web Development through the UW Coding
            Bootcamp. My goal is to work for an Esports organization in a
            management or web development role.
         </p>
         <section>
            <p className="lead">
               <a
                  className="btn btn-dark btn-lg"
                  href="portfolio.html"
                  role="button"
                  >
               My Projects
               </a>
               <a
                  className="btn btn-dark btn-lg"
                  href="Wesley McMillan- Resume 9_2020.pdf"
                  role="button"
                  >
               Resume
               </a>
            </p>
         </section>
         <a href="https://www.linkedin.com/in/wesley-m-46157088/">
         <i className="fab fa-linkedin"></i>
         </a>
         <a href="https://github.com/wmcmillan">
         <i className="fab fa-github"></i>
         </a>
      </div>
   </main>
      <div className="card" style={{width: 20}}>
         <h5 className="card-title">Contact Me</h5>
         <div className="row">
            <div className="col-md-9 mb-md-0 mb-5">
               <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                  <section className="row">
                     <section className="col-md-12">
                        <section className="md-form mb-0">
                           <input type="text" id="name" name="name" className="form-control"/>
                           <label for="name" class="">Your name</label>
                        </section>
                     </section>
                  </section>
                  <section className="row">
                     <section className="col-md-12">
                        <section className="md-form mb-0">
                           <input type="text" id="email" name="email" className="form-control"/>
                           <label for="email" class="">Your email</label>
                        </section>
                     </section>
                  </section>
                  <section className="row">
                     <section className="col-md-12">
                        <section className="md-form mb-0">
                           <input type="text" id="subject" name="subject" className="form-control"/>
                           <label for="subject" class="">Subject</label>
                        </section>
                     </section>
                  </section>
                  <section className="row">
                     <section className="col-md-12">
                        <section className="md-form">
                           <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                           <label for="message">Your message</label>
                        </section>
                     </section>
                  </section>
               </form>
        
            <div className="status"></div>
         </div>
        </div>
    </div>
</div>
  );
}
