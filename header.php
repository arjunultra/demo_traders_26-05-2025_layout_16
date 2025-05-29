<header class="fireworks-header">
    <!-- Top Announcement Bar -->
    <div class="header-announcement bg-black py-2 wow fadeIn">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="announcement-marquee text-yellow small left-marquee ">
                        <span class="hvr-bounce-to-right">
                            <i class="bi bi-emoji-heart-eyes"></i> Diwali Special: 30% OFF on bulk orders! Limited stock
                            available.
                        </span>
                        <span class="mx-4 d-none d-md-inline">
                            <i class="bi bi-whatsapp text-success"></i> +91 99999 99999
                        </span>
                        <span class="d-none d-lg-inline">
                            <i class="bi bi-telephone text-primary"></i> +91 88888 88888
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Main Header Area -->
    <div class="header-main bg-yellow py-3 shadow-sm">
        <div class="container-fluid px-lg-5">
            <div class="row align-items-center">
                <!-- Logo Column -->
                <div class="col-lg-3 col-md-12 text-center text-lg-left mb-3 mb-lg-0 wow zoomIn">
                    <a class="navbar-brand logo-link" href="index.php">
                        <div
                            class="logo-container d-flex align-items-center justify-content-center justify-content-lg-start">
                            <img class="logo-img hvr-buzz" src="images/logo.png" alt="SparkBlast Fireworks" width="60">
                            <div class="logo-text ml-3">
                                <span class="text-purple font-weight-bold display-5">Demo</span>
                                <span class="text-red font-weight-bold display-5">Traders</span>
                            </div>
                        </div>
                    </a>
                </div>

                <!-- Info Boxes Column -->
                <div class="col-lg-9 col-md-12">
                    <div class="row">
                        <!-- Address Box -->
                        <div class="col-lg-4 col-md-4 col-12 mb-3 mb-md-0 wow fadeIn" data-wow-delay="0.2s">
                            <div class="info-box hvr-float-shadow p-3 rounded">
                                <div class="d-flex align-items-center">
                                    <div class="info-icon mr-3">
                                        <i class="bi bi-geo-alt-fill text-purple display-5"></i>
                                    </div>
                                    <div>
                                        <h6 class="text-black mb-1">Our Location</h6>
                                        <p class="m-0 small">123 Firework Lane, Sivakasi, TN</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Contact Box -->
                        <div class="col-lg-4 col-md-4 col-12 mb-3 mb-md-0 wow fadeIn" data-wow-delay="0.4s">
                            <div class="info-box hvr-float-shadow p-3 rounded">
                                <div class="d-flex align-items-center">
                                    <div class="info-icon mr-3">
                                        <i class="bi bi-telephone-fill text-red display-5"></i>
                                    </div>
                                    <div>
                                        <h6 class="text-black mb-1">Call Us</h6>
                                        <p class="m-0 small">+91 99999 99999</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Hours Box -->
                        <div class="col-lg-4 col-md-4 col-12 wow fadeIn" data-wow-delay="0.6s">
                            <div class="info-box hvr-float-shadow p-3 rounded">
                                <div class="d-flex align-items-center">
                                    <div class="info-icon mr-3">
                                        <i class="bi bi-clock-fill text-black display-5"></i>
                                    </div>
                                    <div>
                                        <h6 class="text-black mb-1">Open Hours</h6>
                                        <p class="m-0 small">Mon-Sun: 9AM - 9PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-red py-0 sticky-top wow fadeInDown">
        <div class="container-fluid px-lg-5">
            <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#mainNav"
                aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="mainNav">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item px-lg-3 px-2 <?php if ($page == "home") {
                        echo "active";
                    } ?>">
                        <a class="nav-link hvr-underline-from-center py-3" href="index.php">
                            <i class="bi bi-house-door d-lg-none mr-2"></i> Home
                        </a>
                    </li>
                    <li class="nav-item px-lg-3 px-2 <?php if ($page == "about") {
                        echo "active";
                    } ?>">
                        <a class="nav-link hvr-underline-from-center py-3" href="about.php">
                            <i class="bi bi-info-circle d-lg-none mr-2"></i> About Us
                        </a>
                    </li>
                    <li class="nav-item px-lg-3 px-2 <?php if ($page == "products") {
                        echo "active";
                    } ?>">
                        <a class="nav-link hvr-underline-from-center py-3" href="products.php">
                            <i class="bi bi-box-seam d-lg-none mr-2"></i> Products
                        </a>
                    </li>
                    <li class="nav-item px-lg-3 px-2 <?php if ($page == "safetytips") {
                        echo "active";
                    } ?>">
                        <a class="nav-link hvr-underline-from-center py-3" href="safetytips.php">
                            <i class="bi bi-shield-check d-lg-none mr-2"></i> Safety Tips
                        </a>
                    </li>
                    <li class="nav-item px-lg-3 px-2 <?php if ($page == "contact") {
                        echo "active";
                    } ?>">
                        <a class="nav-link hvr-underline-from-center py-3" href="contact.php">
                            <i class="bi bi-envelope d-lg-none mr-2"></i> Contact
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>


<script src="js/jquery.min.js"></script>
<script src="js/marquee.js"></script>
<script>
    $('.left-marquee').marquee({
        duration: 16000,
        gap: 150,
        delayBeforeStart: 0,
        direction: 'left',
        duplicated: false,
        pauseOnHover: true
    });
</script>