<!doctype html>
<html class="no-js">
<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title idle-disabled="true">Marshall University Virtual Tour</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width">

    <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css"> <!-- load bootstrap via cdn -->
    <link rel="stylesheet" href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css"> <!-- load fontawesome -->
    <link rel="stylesheet" href="http://ajax.googleapis.com/ajax/libs/angular_material/1.1.0/angular-material.min.css">
    <link rel="stylesheet" href="./css/app.css">

    <link rel="icon" href="//www.marshall.edu/favicon.ico">

  <script src="./build/system.js"></script>
  <script src="./config.js"></script>
  <script src="./build.js"></script>

  <script defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCgRdOHKYe3gFn40_exRpN-lVx0FgB4Vyo">
  </script>


</head>

<body>
    <div ui-view></div>

    <script>
        System.import('./js/app-bootstrap')
            .catch(console.error.bind(console)); // make sure any errors are print to console
    </script>

</body>
</html>
