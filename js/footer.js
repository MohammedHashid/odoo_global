class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<!-- CTA One -->
    <section class="cta-one style-two">
      <div class="auto-container">
        <div class="d-flex justify-content-between align-items-center flex-wrap">
          <!-- CTA Logo -->
          <div style="width:290px; height:120px; display:flex; align-items:center; justify-content:center;">
            <img src="images/odoo/Oodo Global Logo - White.png" alt="Oodo Global Logo" style="max-width:100%; max-height:100%; object-fit:contain;">
          </div>
          <!-- Info Text -->
          <div class="cta-one_text">
            2nd Floor, Vayaluran Towers, RS Puram<br />
            Coimbatore, Tamil Nadu - 641002
          </div>
        </div>
      </div>
    </section>
    <!-- End CTA One -->

    <!-- Main Footer -->
    <footer class="main-footer">
      <div class="auto-container">
        <!--Widgets Section-->
        <div class="main-footer_widgets">
          <div class="row clearfix">
            <!--big column-->
            <div class="big-column col-lg-7 col-md-12 col-sm-12">
              <div class="row clearfix">
                <!--Footer Column-->
                <div class="main-footer_column col-lg-7 col-md-6 col-sm-12">
                  <div class="footer-widget subscribe-widget">
                    <h5 class="main-footer_title">Subscribe to Our Newsletter</h5>
                    <div class="footer-text">
                      Stay updated with the latest Odoo insights, tips, and product releases.
                    </div>
                    <!-- Subscribe Form -->
                    <div class="subscribe-form">
                      <form method="post" action="contact.html">
                        <div class="form-group">
                          <input type="email" name="email" value="" placeholder="Enter your email" required />
                          <button type="submit" class="theme-btn fa-solid fa-arrow-right fa-fw"></button>
                        </div>
                      </form>
                    </div>
                    <div class="footer-privacy">
                      Our <a href="#">Privacy Policy</a> and provide consent
                      to receive updates from our company.
                    </div>
                  </div>
                </div>

                <!--Footer Column-->
                <div class="main-footer_column col-lg-5 col-md-6 col-sm-12">
                  <div class="footer-widget links-widget">
                    <h4 class="main-footer_title">Our Services</h4>
                    <ul class="main-footer_list">
                      <li><a href="odoo-consulting.html">Odoo Consulting</a></li>
                      <li><a href="odoo-implementation.html">Odoo Implementation</a></li>
                      <li><a href="odoo-customization.html">Odoo Customization</a></li>
                      <li><a href="odoo-support.html">Odoo Support</a></li>
                      <li><a href="odoo-migration.html">Odoo Migration</a></li>
                      <li><a href="odoo-integration.html">Odoo Integration</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <!--big column-->
            <div class="big-column col-lg-5 col-md-12 col-sm-12">
              <div class="row clearfix">
                <!--Footer Column-->
                <div class="main-footer_column col-lg-5 col-md-6 col-sm-12">
                  <div class="footer-widget links-widget">
                    <h4 class="main-footer_title">Quick Links</h4>
                    <ul class="main-footer_list">
                      <li><a href="index.html">Home</a></li>
                      <li><a href="about.html">About Us</a></li>
                      <li><a href="#">Services</a></li>
                      <li><a href="#">Industries</a></li>
                      <li><a href="#">Case Studies</a></li>
                      <li><a href="contact.html">Contact Us</a></li>
                    </ul>
                  </div>
                </div>

                <!--Footer Column-->
                <div class="main-footer_column col-lg-7 col-md-6 col-sm-12">
                  <div class="footer-widget contact-widget">
                    <h4 class="main-footer_title">Contact Info</h4>
                    <div class="footer-contact-info">
                      <div class="footer-contact-item">
                        <span class="icon fa fa-phone"></span>
                        <div class="text">
                          <strong>Phone:</strong><br>
                          <a href="tel:+919363608990">+91-93636 08990</a>
                        </div>
                      </div>
                      <div class="footer-contact-item">
                        <span class="icon fa fa-envelope"></span>
                        <div class="text">
                          <strong>Email:</strong><br>
                          <a href="mailto:info@prajai.com">info@prajai.com</a>
                        </div>
                      </div>
                      <div class="footer-contact-item">
                        <span class="icon fa fa-map-marker-alt"></span>
                        <div class="text">
                          <strong>Address:</strong><br>
                          2nd Floor, Vayaluran Towers<br>
                          RS Puram, Coimbatore<br>
                          Tamil Nadu - 641002
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="auto-container">
          <div class="copyright">
            <a href="index.html">Oodo Global</a> &copy; ${new Date().getFullYear()} All Rights Reserved. Developed by <a href="https://prajai.com" target="_blank" style="color: #1b1f53; font-weight: 600;">Prajai Technology</a>
          </div>
        </div>
      </div>
    </footer>
    <!-- End Main Footer -->
`;
  }
}

customElements.define('site-footer', SiteFooter);