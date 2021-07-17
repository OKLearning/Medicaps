<!DOCTYPE HTML>
<HTML>
    <head>
        <title>NoteChef - Login</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width initial-scale=1 shrink-to-fit=no">
        <meta name="description" content="Get full notes of engineering by login to our website.">
        <meta name="keywords" content="HTML, CSS, JavaScript">
        <link rel = "icon" href ="./logo/notechef.png" width="40px" type = "image/x-icon">
        <meta property="og:title" content="NoteChef - Login" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content=""/>
        <meta property="og:image" content=""/>
        <meta property="og:description" content="Get full notes and Study Materials of in one step."/>
        <meta property="og:site_name" content="NoteChef" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="300" />
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,800;1,400&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="login-css1.css">
    </head>    
    <body class="log-content-b">
        <noscript>
            you need to enable java script to use the website
        </noscript>
        <header class="comp-log-head">
            <div class="comp-details">
                <div class="comp-detais-inner">
                    <div class="comp-logo">
                        <img src="./logo/notechef.png" class="comp-logo-img" alt="NoteChef logo">
                    </div> 
                    <div class="comp-name">
                        <h4 class="comp-name-details"> 
                            NoteChef
                        </h4>
                    </div>
                </div>
            </div>
        </header>
        <main class="log-main-content">
            <div class="log-content">
                <div class="log-content-inner">
                    <section class="login-content-left">
                        <div class="log-content-left-1">
                            <div class="log-content-left-inner">
                                <div class="log-content-1">
                                    <img class="log-content-left-img" src="https://source.unsplash.com/collection/424298/300x450" alt="https://picsum.photos/300/450"> 
                                    <div class="qoutes-outer">
                                        <h3 class="quotes-text">
                                        </h3>
                                        <h4 class="quotes-author"></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="log-content-right">
                        <div class="log-content-right-2">
                            <div class="log-content-right-inner">
                                <div class="log-content-2">
                                    <form class="log-form" method="post" action = "login.php">
                                        <div class="log-form-inner">
                                            <div class="log-form-inner-1">
                                                <div class="log-form-content-1">
                                                    <label class="log-form-email">
                                                        <span class="log-form-emailshow"><span style="color: red;">*</span> Number or Email</span>
                                                        <input class="log-input-username" tabindex="-1" aria-label="Phone number or email" aria-required="true" autocapitalize="off" autocorrect="off" maxlength="75" name="email" type="text" value="" autocomplete="off">
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="log-form-inner-2">
                                                <div class="log-form-content-2">
                                                    <label class="log-form-pass">
                                                        <span class="log-form-passshow"><span style="color: red;">*</span> Password</span>
                                                        <input aria-label="Password" tabindex="-1" aria-required="true" autocapitalize="off" autocorrect="off" name="password" type="password" class="log-input-pass" value="" autocomplete = "off">
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="log-form-sub">
                                                <button class="log-form-buttom" type="submit">
                                                    <div class="log-form-submit-txt">
                                                        <h3 class="log-form-txt-head">Log In</h3>
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                    <div class="log-forgot">
                                        <div class="log-forgot-inner">
                                            <div class="log-forgot-content">
                                                <a class="log-form-forpass" href="" tabindex="-1">
                                                    Forgot password ?
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="log-form-signup">
                                    <div class="log-form-signup-inner">
                                        <p class="log-form-signup-txt">
                                            Don't have an account ?
                                        </p>
                                        <div class="signup-button">
                                            <div class="signup-button-content">
                                                <a class="log-form-signup-link" onclick="signupform()" tabindex="-1">
                                                    <span class="signup-link-txt">
                                                        <h3>Sign up</h3>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="log-signup-form-sec">
                        <div class="log-content-signup">
                            <div class="log-content-signup-form-inner">
                                <form name="myform" class="signup-form" method="post" tabindex="-1" action = "registration.php" onsubmit="return validateForm()">
                                    <div class="signup-form-inner">
                                        <div class="signup-form-inner-1">
                                            <div class="signup-form-content-1">
                                                <label class="signup-form-name">
                                                    <span class="signup-form-nameshow"><span style="color: red;">*</span>Name</span>
                                                    <input class="signup-input-name" name="username" aria-label="Username" aria-required="true" autocapitalize="off" autocorrect="off" maxlength="75" type="text" tabindex="-1" value="" autocomplete="off">
                                                </label>
                                            </div>
                                        </div>
                                        <div class="signup-form-inner-2">
                                            <div class="signup-form-content-2">
                                                <label class="signup-form-email">
                                                    <span class="signup-form-emailshow"><span style="color: red;">*</span>Email</span>
                                                    <input class="signup-input-email" aria-label="Email" aria-required="true" autocapitalize="off" autocorrect="off" name="email" tabindex="-1" type="text" value="" autocomplete="off">
                                                </label>
                                            </div>
                                        </div>
                                        <div class="signup-form-inner-3">
                                            <div class="signup-form-content-3">
                                                <label class="signup-form-number">
                                                    <span class="signup-form-numshow"><span style="color: red;">*</span>Number</span>
                                                    <input class="signup-input-number" aria-label="Phone number" aria-required="true" autocapitalize="off" autocorrect="off" tabindex="-1" maxlength="75" name="number" type="tel" value="" autocomplete="off">
                                                </label>
                                            </div>
                                        </div>
                                        <div class="signup-form-inner-4">
                                            <div class="signup-form-content-4">
                                                <label class="signup-form-clg">
                                                    <span class="signup-form-clgshow"><span style="color: red;">*</span>College</span>
                                                    <input class="signup-input-clg" name="College" list="college-option" aria-label="Phone number" aria-required="true" autocapitalize="off" tabindex="-1" autocorrect="off" maxlength="75" value="" autocomplete="off">
                                                    <datalist id="college-option">
                                                        <option class="clg-signup-option" value="MediCaps University Indore">
                                                        <option class="clg-signup-option" value="IET - DAVV Indore">
                                                    </datalist>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="signup-form-inner-5">
                                            <div class="signup-form-content-5">
                                                <label class="signup-form-password">
                                                    <span class="signup-form-passhow"><span style="color: red;">*</span>Password</span>
                                                    <input class="signup-input-password" aria-label="Password" aria-required="true" autocapitalize="off" autocorrect="off" tabindex="-1" maxlength="75" name="password" type="password" value="" autocomplete="off">
                                                </label>
                                            </div>
                                        </div>
                                        <div class="signup-form-sub">
                                            <button class="signup-form-buttom" type="submit">
                                                <div class="signup-form-submit-txt">
                                                    <h3 class="signup-form-txt-head">Sign In</h3>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
        <script src="login-js1.js"></script>
        <script src="login-js2.js"></script>
        <script src="login-js3.js"></script>
        <script src="formvalidation.js"></script>
    </body>
</HTML>