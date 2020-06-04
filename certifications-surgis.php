<?php                                                  //this is how you open a php block
$path = $_SERVER['DOCUMENT_ROOT'];                      //$ is php equivalent of var - it defines a variable.
$includes = $path . "/includes/";                       //here we're taking the root we defined earlier, and then adding the file path we want to the end of it as a string to direct it to the files we want it to pull in  it tpo 
?>                                                      <!--This closes a php block-->
<!DOCTYPE html>
<html>

<head>
    <title>SurGIS - Certifications</title>
    <?php include($includes . "cert-head-surgis.php"); ?>           <!--this is pulling in the html built in the head.php file. the 'include' is just like javascriprts '+=' - it adds thing to the existing variable  -->              
</head>

<body>

    <?php include($includes . "header-surgis.php"); ?>

    <main>
        <?php include($includes . "hero-surgis.php"); ?>
        
       
    </main>

    <?php include($includes . "bottomnav-surgis.php"); ?>
    <?php include($includes . "cert-footer-surgis.php"); ?>



</body>

</html>