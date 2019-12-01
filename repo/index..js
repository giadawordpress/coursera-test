<!DOCTYPE html>
<html lang="en-us">
<head>
    <meta charset="UTF-8">
    <title>Module5-solution by AniYoncheva</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href='https://fonts.googleapis.com/css?family=Oxygen:400,300,700' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Lora' rel='stylesheet' type='text/css'>
    <link href="css/bootstrap.min.css" rel="stylesheet" />
    <link href="css/style.css" rel="stylesheet" />
</head>
<body>

    <header>
        <nav id="header-nav" class="navbar navbar-default">
            <div class="container">
                <div class="navbar-header">
                    <a href="index.html" class="pull-left visible-lg visible-md">
                        <div class="img-wrapper">
                            <div id="logo-img"></div>
                        </div>
                    </a>
                    <div class="navbar-brand">
                        <a href="index.html"><h1>David Chu's china Bistro</h1></a>
                        <p>
                            <img src="img/star-k-logo.png" alt="Kosher certification" />
                            <span>Kosher Certified</span>
                        </p>
                    </div>
                    <button id="navbarToggle" type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#collapsable-nav" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                </div>
                <div id="collapsable-nav" class="collapse navbar-collapse">
                    <ul id="nav-list" class="nav navbar-nav navbar-right">
                        <li id="navHomeButton" class="visible-xs active">
                            <a href="index.html">
                                <span class="glyphicon glyphicon-home"></span><br class="hidden-xs" /> Home
                            </a>
                        </li>
                        <li id="navMenuButton">
                            <a href="#" onclick="$dc.loadMenuCategories();">
                                <span class="glyphicon glyphicon-cutlery"></span><br class="hidden-xs" /> Menu
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class="glyphicon glyphicon-info-sign"></span><br class="hidden-xs" /> About
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class="glyphicon glyphicon-certificate"></span><br class="hidden-xs" /> Awards
                            </a>
                        </li>
                        <li id="phone" class="hidden-xs">
                            <a href="tel:410-620-5008">
                                <span>410-620-5008</span>
                            </a>
                            <div>* We Deliver</div>
                        </li>
                    </ul><!--#nav-list-->
                </div> <!--.collapse .navbar-collapse-->
            </div><!-- .container -->
        </nav><!-- #header-nav -->
    </header>

    <div id="call-btn" class="visible-xs">
        <a class="btn" href="tel:410-602-5008">
            <span class="glyphicon glyphicon-earphone"></span>
            410-602-5008
        </a>
    </div>
    <div id="xs-deliver" class="text-center visible-xs">* We Deliver</div>

    <div id="main-content" class="container">

    </div><!--End of #main-content-->
    <footer class="panel-footer">
        <div class="container">
            <div class="row">
                <section id="hours" class="col-sm-4">
                    <span>Hours:</span><br>
                    Sun-Thurs: 11:15am - 10:00pm<br>
                    Fri: 11:15am - 2:30pm<br>
                    Saturday Closed
                    <hr class="visible-xs" />
                </section>
                <section id="address" class="col-sm-4">
                    <span>Address:</span><br>
                    7105 Reisterstown Road<br>
                    Baltimore, MD 21215
                    <p>
                        * Delivery area within 3-4 miles,
                        with minimum order of $20 plus $3 charge for all deliveries.
                    </p>
                    <hr class="visible-xs" />
                </section>
                <section id="testimonials" class="col-sm-4">
                    <p>"The best Chinese restaurant I've been to! And that's saying a lot, since I've been to many!"</p>
                    <p>"Amazing food! Great service! Couldn't ask for more! I'll be back again and again!"</p>
                </section>
            </div>
            <div class="text-center">&copy; Copyright David Chu's China Bistro 2016</div>
        </div>
    </footer>




    <script src="js/jquery-2.1.4.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/ajax-utils.js"></script>
    <script src="js/script.js"></script>
</body>
</html>