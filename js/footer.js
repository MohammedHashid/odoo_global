class SiteFooter extends HTMLElement {
connectedCallback() {
this.innerHTML = `

 <!-- Scroll To Top -->
  <div class="scroll-to-top scroll-to-target" data-target="html">
    <span class="fas fa-arrow-up fa-fw"></span>
  </div>

<!-- WhatsApp Floating Button -->
  <div class="whatsapp-float">
  <a href="https://wa.me/919363608990" target="_blank">
    <i class="fab fa-whatsapp"></i>
  </a>
</div>


<!-- CTA SECTION -->
<section class="footer-cta">
  <div class="auto-container">
    <div class="footer-cta-inner">

      <div class="cta-logo">
        <img src="images/odoo/Oodo Global Logo - White.png" alt="Oodo Global Logo">
      </div>

      <div class="cta-content">
        <h3>Transform Your Business with Odoo ERP</h3>
        <p>Expert Odoo consulting, implementation, customization and support services tailored for your business growth.
        </p>
      </div>

      <div class="cta-button">
        <a href="contact.html" class="footer-consult-btn">Get Free Consultation</a>
      </div>

    </div>
  </div>
</section>


<!-- MAIN FOOTER -->
<footer class="main-footer">
  <div class="auto-container">
    <div class="row clearfix">

      <!-- COMPANY INFO -->
      <div class="footer-column col-lg-4 col-md-12 col-sm-12">
        <div class="footer-widget about-widget">

          <div class="footer-logo">
            <img src="images/odoo/Oodo Global Logo - White.png" alt="Oodo Global">
          </div>

          <div class="footer-text">
            Oodo Global is a trusted Odoo ERP solutions provider helping businesses streamline operations with expert
            consulting, implementation, customization, and support services.
          </div>

          <ul class="footer-social">
            <li><a href="#"><span class="fab fa-linkedin"></span></a></li>
            <li><a href="#"><span class="fab fa-facebook-f"></span></a></li>
            <li><a href="#"><span class="fab fa-twitter"></span></a></li>
            <li><a href="#"><span class="fab fa-instagram"></span></a></li>
          </ul>

        </div>
      </div>


      <!-- SERVICES -->
      <div class="footer-column col-lg-3 col-md-6 col-sm-12">
        <div class="footer-widget links-widget">
          <h4 class="footer-title">Our Services</h4>
          <ul class="footer-links">
            <li><a href="odoo_consulting.html">Odoo Consulting</a></li>
            <li><a href="odoo_implementation.html">Odoo Implementation</a></li>
            <li><a href="odoo_customization.html">Odoo Customization</a></li>
            <li><a href="odoo_integration.html">Odoo Integration</a></li>
            <li><a href="odoo_migration.html">Odoo Migration</a></li>
            <li><a href="odoo_support.html">Odoo Support</a></li>
          </ul>
        </div>
      </div>


      <!-- QUICK LINKS -->
      <div class="footer-column col-lg-2 col-md-6 col-sm-12">
        <div class="footer-widget links-widget">
          <h4 class="footer-title">Quick Links</h4>
          <ul class="footer-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="industries.html">Industries</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
      </div>


      <!-- CONTACT -->
      <div class="footer-column col-lg-3 col-md-12 col-sm-12">
        <div class="footer-widget contact-widget">

          <h4 class="footer-title">Contact Us</h4>

          <ul class="footer-contact">

            <li>
              <span class="icon fa fa-map-marker-alt"></span>
              2nd Floor, Vayaluran Towers<br>
              RS Puram, Coimbatore<br>
              Tamil Nadu - 641002
            </li>

            <li>
              <span class="icon fa fa-phone"></span>
              <a href="tel:+919363608990">+91 93636 08990</a>
            </li>

            <li>
              <span class="icon fa fa-envelope"></span>
              <a href="mailto:info@prajai.com">info@prajai.com</a>
            </li>

          </ul>

        </div>
      </div>

    </div>
  </div>


  <!-- COPYRIGHT -->
  <div class="footer-bottom">
    <div class="auto-container">
      <div class="footer-bottom-inner">

        <div class="copyright">
          © ${new Date().getFullYear()} Oodo Global. All Rights Reserved.
        </div>

        <div class="footer-policy">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>

        <div class="developer">
          Developed by
          <a href="https://prajai.com" target="_blank">Prajai Technology</a>
        </div>

      </div>
    </div>
  </div>

</footer>

`;
}
}

customElements.define('site-footer', SiteFooter);