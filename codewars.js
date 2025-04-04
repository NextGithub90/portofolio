<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>

    <!-- Link ke Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

    <!-- Link ke file CSS eksternal -->
    <link rel="stylesheet" href="style.css">

    <!--poppins font  -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet">

    <!-- Font Preahvihear-->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Preahvihear&display=swap" rel="stylesheet">
</head>

<!-- Styling langsung di dalam tag HTML -->
<style>
    body {
        font-family: "Preahvihear", sans-serif;
        margin: 0;
        padding: 0;
    }
</style>

<body>
    <!-- Bagian container utama -->
    <div class="container-fluid" style="background-color: rgba(26, 11, 46, 1);">
        <div class="container">

            <!-- Navbar dimulai -->
            <nav class="navbar navbar-expand-lg">
                <img width="25" height="25" src="https://img.icons8.com/ios/50/flash-on.png" alt="flash-on"
                    class="red-filter" />
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav d-flex w-25 justify-content-between">
                        <li class="nav-item active">
                            <a class="nav-link text" href="#">Home </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text" href="#">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text" href="#">Lab</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
    <!-- Navbar selesai -->

    <!-- Bagian utama halaman -->
    <div class="container-fluid p-0" style="background-color: rgb(17, 7, 31); height: 1800px;">
        <div class="container">
            <div class="row py-5 align-items-center">
                <div class="col-3  d-flex justify-content-end">
                    <img src="browsing.png" alt="" width="165" height="200" class="jj"
                        style="box-shadow: 4px 10px 31px -2px rebeccapurple;">
                </div>
                <div class="col-4 px-4">
                    <p class="text" style="font-size: .8rem; margin-bottom: 1px; text-decoration: underline;">A Designer
                        who</p>
                    <h1 class="text">Judges a book by its <span style="color:rgba(113, 39, 186, 1) ;">cover...</span>
                    </h1>
                    <p class="text" style="font-size: .5rem; font-family: 'Courier New', Courier, monospace;">Because if
                        the cover does not impress
                        you what else can?</p>
                </div>
            </div>

            <!-- Section bagian utama -->
            <div class="row py-4">
                <div class="col-5 offset-1 z-2">
                    <h1 class="text" style="font-size: 1.5rem; letter-spacing: 4px;">I'm a Software Engineer.</h1>
                </div>
                <div class="col-11 offset-1 z-2">
                    <p class="text" style="font-size: .7rem;">Currently, I'm a Software Engineer at
                        <img width="14" height="14" src="https://img.icons8.com/color/48/facebook-new.png"
                            alt="facebook-new" />
                        <a href="" style="text-decoration: none;"> Facebook</a>
                    </p>
                </div>
                <div class="col-7 offset-1 py-3 ">
                    <p class="text" style="font-size: .9rem;">A self-taught UI/UX designer, functioning in the industry
                        for 3+ years now.
                        I make meaningful and delightful digital products that create an equilibrium between user needs
                        and business goals.</p>
                </div>
            </div>
            <!-- bagian section 2 -->
            <div class="row py-4">
                <div class="col-4 offset-1">
                    <p class="text" style="font-size: 1.5rem; letter-spacing: 4px;">Work Experience</p>
                </div>
            </div>
            <!-- card section 2 -->
            <div class="row offset-1 justify-content-between " id="card-container">


            </div>
        </div>
    </div>

    <!-- Script untuk JavaScript eksternal -->
    <script src="a.js"></script>
    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"></script>
</body>

</html>