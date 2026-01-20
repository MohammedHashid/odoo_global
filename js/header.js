class SiteHeader extends HTMLElement {
connectedCallback() {
this.innerHTML = `
<style>
  /* Override grid to center menus with fewer columns */
  .mega-dropdown .mega-menu .mega-inner {
    display: flex !important;
    flex-direction: row !important;
    flex-wrap: nowrap !important;
    justify-content: center !important;
    gap: 64px !important;
  }

  .mega-dropdown .mega-menu .mega-col {
    min-width: 180px;
    flex: 0 0 auto;
  }
</style>
<!-- Preloader -->
<div class="preloader"></div>
<!-- End Preloader -->

<!-- Main Header -->
<header class="main-header header-style-three">

  <!-- Header Top -->
  <!-- <div class="header-top">
    <div class="auto-container">
      <div class="d-flex justify-content-between align-items-center flex-wrap">
        <div class="header-top_nav">
          <a href="#">Terms & Condition</a>
          <a href="#">Privacy Policy</a>
          <a href="contact.html">Contact Us</a>
        </div>
        <div class="right-box d-flex">
          <a class="header-top_email" href="mailto:info@prajai.com">
            <span>Email us:</span> info@prajai.com
          </a>
         <div class="header-top_social">
            <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
            <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
            <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
        </div>
        </div>
      </div>
    </div>
  </div> -->

  <!-- Header Lower -->
  <div class="header-lower">
    <div class="auto-container">
      <div class="inner-container d-flex justify-content-between align-items-center">

        <!-- Logo -->
        <div class="logo-box d-flex">
          <div class="logo">
            <a href="index.html">
              <img src="images/odoo/Oodo Global Logo - White.png" alt="Logo" style="width:150px;height:auto;">
            </a>
          </div>
        </div>

        <!-- Nav -->
        <div class="nav-outer d-flex align-items-center">
          <nav class="main-menu show navbar-expand-md">
            <div class="navbar-header">
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
            </div>

            <div class="navbar-collapse collapse clearfix" id="navbarSupportedContent">
              <ul class="navigation clearfix">

                <li><a href="index.html">Home</a></li>

                <!-- About -->
                <li><a href="about.html">About Us</a></li>

                <!-- Services Mega Menu -->
                <li class="dropdown mega-dropdown">
                  <a href="/case.html">Services</a>
                  <div class="mega-menu">
                    <div class="mega-inner">

                      <div class="mega-col">
                        <h4>Consulting</h4>
                        <a href="odoo_consulting.html">Odoo Consulting</a>
                        <a href="odoo-ecommerce.html">Odoo E-commerce</a>
                      </div>

                      <div class="mega-col">
                        <h4>Implementation</h4>
                        <a href="odoo-integration.html">Odoo Integration</a>
                        <a href="odoo-implementation.html">Odoo Implementation</a>
                        <a href="odoo-customization.html">Odoo Customization</a>
                        <a href="odoo-development.html">Odoo Development</a>
                        <a href="odoo-configuration.html">Odoo Configuration</a>
                        <a href="odoo-offshore.html">Odoo Offshore Development</a>
                      </div>

                      <div class="mega-col">
                        <h4>Support</h4>
                        <a href="odoo-support.html">Odoo Support</a>
                        <a href="odoo-migration.html">Odoo Migration</a>
                        <a href="odoo-maintenance.html">Odoo Maintenance</a>
                      </div>

                    </div>
                  </div>
                </li>

                <!-- Apps Mega Menu -->
                <!-- Apps Mega Menu -->
                <li class="dropdown mega-dropdown">
                  <a href="#">Apps</a>
                  <div class="mega-menu">
                    <div class="mega-inner">

                      <!-- Finance -->
                      <div class="mega-col">
                        <h4>Finance</h4>
                        <a href="accounting.html">Accounting</a>
                        <a href="invoicing.html">Invoicing</a>
                        <a href="expenses.html">Expenses</a>
                        <a href="spreadsheet.html">Spreadsheet (BI)</a>
                        <a href="documents.html">Documents</a>
                        <a href="sign.html">Sign</a>
                      </div>

                      <!-- Sales -->
                      <div class="mega-col">
                        <h4>Sales</h4>
                        <a href="crm.html">CRM</a>
                        <a href="sales.html">Sales</a>
                        <a href="pos_shop.html">POS Shop</a>
                        <a href="pos_restaurants.html">POS Restaurant</a>
                        <a href="subscriptions.html">Subscriptions</a>
                        <a href="rental.html">Rental</a>
                      </div>

                      <!-- Websites -->
                      <div class="mega-col">
                        <h4>Websites</h4>
                        <a href="website_builder.html">Website Builder</a>
                        <a href="ecommerce.html">eCommerce</a>
                        <a href="blog_odoo.html">Blog</a>
                        <a href="forum.html">Forum</a>
                        <a href="live_chat.html">Live Chat</a>
                        <a href="elearning.html">eLearning</a>
                      </div>

                      <!-- Supply Chain -->
                      <div class="mega-col">
                        <h4>Supply Chain</h4>
                        <a href="inventory.html">Inventory</a>
                        <a href="manufacturing.html">Manufacturing</a>
                        <a href="plm.html">PLM</a>
                        <a href="purchase.html">Purchase</a>
                        <a href="maintenance.html">Maintenance</a>
                        <a href="quality.html">Quality</a>
                      </div>

                      <!-- Human Resources -->
                      <!-- <div class="mega-col">
        <h4>Human Resources</h4>
        <a href="employees.html">Employees</a>
        <a href="recruitment.html">Recruitment</a>
        <a href="time_off.html">Time Off</a>
        <a href="appraisals.html">Appraisals</a>
        <a href="referrals.html">Referrals</a>
        <a href="fleet.html">Fleet</a>
      </div>-->

                      <!-- Marketing -->
                      <!-- <div class="mega-col">
        <h4>Marketing</h4>
        <a href="social_marketing.html">Social Marketing</a>
        <a href="email_marketing.html">Email Marketing</a>
        <a href="sms_marketing.html">SMS Marketing</a>
        <a href="events.html">Events</a>
        <a href="marketing_automation.html">Marketing Automation</a>
        <a href="surveys.html">Surveys</a>
      </div>-->

                      <!-- Services -->
                      <!--<div class="mega-col">
        <h4>Services</h4>
        <a href="projects.html">Project</a>
        <a href="timesheets.html">Timesheets</a>
        <a href="field_service.html">Field Service</a>
        <a href="helpdesk.html">Helpdesk</a>
        <a href="planning.html">Planning</a>
        <a href="appointments.html">Appointments</a>
      </div>-->

                      <!-- Productivity -->
                      <!--<div class="mega-col">
        <h4>Productivity</h4>
        <a href="discuss.html">Discuss</a>
        <a href="approvals.html">Approvals</a>
        <a href="iot.html">IoT</a>
        <a href="voip.html">VoIP</a>
        <a href="knowledge.html">Knowledge</a>
        <a href="whatsapp.html">WhatsApp</a>
      </div>-->

                    </div>
                  </div>
                </li>


                <!-- Industries Mega Menu -->
                <li class="dropdown mega-dropdown">
                  <a href="#">Industries We Cater</a>
                  <div class="mega-menu">
                    <div class="mega-inner">

                      <div class="mega-col">
                        <h4>Trading & Retail</h4>
                        <a href="retail.html">Retail</a>
                        <a href="furniture.html">Furniture Trading & Manufacturing</a>
                        <a href="restaurant.html">Restaurant</a>
                      </div>

                      <div class="mega-col">
                        <h4>Manufacturing</h4>
                        <a href="textiles.html">Textiles Industry</a>
                        <a href="electrical.html">Electrical Component Manufacturing</a>
                        <a href="component.html">Component Manufacturing</a>
                        <a href="capital-machine.html">Capital Machine Manufacturing</a>
                        <a href="garments.html">Garments Industry</a>
                      </div>

                      <div class="mega-col">
                        <h4>Industrial</h4>
                        <a href="solar.html">Solar Industries</a>
                        <a href="pump.html">Pump Industries</a>
                        <a href="foundry.html">Foundry</a>
                      </div>

                      <div class="mega-col">
                        <h4>Services & Others</h4>
                        <a href="government.html">Government Organizations</a>
                        <a href="service.html">Service Industry</a>
                      </div>

                    </div>
                  </div>
                </li>

                <li><a href="contact.html">Contact Us</a></li>

              </ul>
            </div>
          </nav>
        </div>

        <!-- Right Box -->
        <div class="outer-box d-flex align-items-center">
          <div class="header-phone">
            <div class="header-phone_inner">
              <span class="header-phone_icon flaticon-telephone"></span>
              Phone Number <br>
              <a href="tel:+919363608990">+91-93636 08990</a>
            </div>
          </div>

          <div class="mobile-nav-toggler">
            <span class="icon"><img src="images/icons/menu.png" alt=""></span>
          </div>
        </div>

      </div>
    </div>
  </div>

  <!-- Sticky Header -->
  <div class="sticky-header">
    <div class="auto-container">
      <div class="d-flex justify-content-between align-items-center">
        <div class="logo">
          <a href="index.html">
            <img src="images/odoo/Oodo Global Logo.png" style="width:150px;height:auto;">
          </a>
        </div>
        <div class="right-box">
          <nav class="main-menu"></nav>
          <div class="mobile-nav-toggler">
            <span class="icon"><img src="images/icons/menu.png" alt=""></span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Mobile Menu -->
  <div class="mobile-menu">
    <div class="menu-backdrop"></div>
    <div class="close-btn"><span class="icon flaticon-cancel-1"></span></div>
    <nav class="menu-box">
      <div class="nav-logo">
        <a href="index.html">
          <img src="images/logo.png" style="width:150px;height:auto;">
        </a>
      </div>
      <div class="menu-outer"></div>
    </nav>
  </div>

</header>
<!-- End Main Header -->
`;
}
}

customElements.define("site-header", SiteHeader);