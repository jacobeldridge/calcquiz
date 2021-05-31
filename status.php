<?php include('server.php'); 
    $conn = mysqli_connect('localhost', 'root','','user_data');
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    if(empty($_SESSION['username'])){
        header('location: login.php');
    }
    ?>
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
            body{
                
                background-image: url("https://www.transparenttextures.com/patterns/asfalt-dark.png");
/* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
            }
            table {
            border-collapse: collapse;
            width: 100%;
            }

            th, td {
            text-align: center;
            padding: 20px;
            background-color:rgb(255, 149, 117);
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            font-size:20pt;
            }
            .retreat{
                background-color: gray;
                font-size: 30pt;
                box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
            }
            .retreat:hover{
                background-color: white;
            }
            
            th {
            background-color: #4CAF50;
            color: white;
            }            
            .grade{
                text-align:center;
                font-size:32pt;
            }
            h1{
                text-align:center;
                font-size:40pt;
               
            }
            
        </style>
    </head>
    <body>
        
        
    </body>
    </html>
    <?php
    $username =  $_SESSION['username'];
    $sql = "SELECT username, grade, score, dates FROM grades WHERE username='$username'";
    $result = mysqli_query($conn, $sql);
    $_SESSION['username'] = $username;
    if (mysqli_num_rows($result) > 0) {
        while($row = $result->fetch_assoc()) {
        echo "<h1>Your current stats</h1>";
        echo "<h2 class = 'grade'>".$row["username"]."</h2>";
        echo "<table><tr><th>Grade</th><th>Score</th><th>Date/Time</th><tr><td>".$row["grade"]."</td><td>".$row["score"]."</td><td>".$row["dates"]."</td></tr></table>";
        ?>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <input id ="retreat"type="submit" onclick="window.location.href='/index.php'" class="retreat"value="← Back" class="button"style="border-style:inset;"/>
        <?php
    
    }
    }
    else{
        echo "<h1>Silly goose you have to take the quiz first! :)</h1>";
    }
?>