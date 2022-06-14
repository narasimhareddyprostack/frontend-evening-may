<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Page</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
        integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">

</head>

<body>
    <!-- including header file  stats here-->
    <?php  include('./header.php')  ?>
     <!-- including header file ends here-->
    <div class="container-fluid">
        <div id="homePageSlider" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#homePageSlider" data-slide-to="0" class="active"></li>
                <li data-target="#homePageSlider" data-slide-to="1"></li>
                <li data-target="#homePageSlider" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="./images/slider/one.jpg" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h1>Welcome to Greet Labs -1 </h1>
                        <p>Best Mobile and Web App Development Company In Banagore!</p>
                        <a href="./contact.html"><button class="btn btn-primary">More About</button></a>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="./images/slider/two.jpg" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h1>Welcome to Greet Labs -2 </h1>
                        <p>Best Mobile and Web App Development Company In Banagore!</p>
                        <button class="btn btn-primary">More About</button>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="./images/slider/three.jpg" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h1>Welcome to Greet Labs -3</h1>
                        <p>Best Mobile and Web App Development Company In Banagore!</p>
                        <button class="btn btn-primary">More About</button>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-target="#homePageSlider" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-target="#homePageSlider" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </button>
        </div>

    </div>

    <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"></script>

    <script>
        $('.carousel').carousel({
            interval: 500,
            pause: 'hover'

        })
    </script>
</body>

</html>