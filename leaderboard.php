<?php include('server.php'); ?>
<?php if(empty($_SESSION['username'])){
        header('location: login.php');
    }
    ?>
<style>
    body{
    background-color: #e6de4e;
    background-image: url("https://www.transparenttextures.com/patterns/brushed-alum-dark.png");
/* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
    }
.retreat{
            background-color: gray;
            font-size: 35pt;
            box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
        }
        .retreat:hover{
            background-color: white;
        }    
table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  text-align: center;
  padding: 8px;
}

tr:nth-child(even){background-color: gold}
tr:nth-child(odd){background-color: silver}
th {
  background-color: #4CAF50;
  color: white;
}
h1{
    text-align:center;
    font-size:40pt;
}
</style>
<?php



// Create connection
$conn = mysqli_connect('localhost', 'username','password','name of table');

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT id, username, dates, tabchanges, score, grade FROM grades LIMIT 10";
$result = mysqli_query($conn, $sql);
if (mysqli_num_rows($result) > 0) {
    ?>
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>Top Ten Mad Minuters</h1>
    </body>
    </html>
    <?php
    echo "<table><tr><th>Name</th><th>Score</th><th>Date/Time</th>";
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "<tr><td>" . $row["username"]. "</td><td>" .$row["score"] ."</td><td>" .$row["dates"] ."</td></tr>";
    }
    echo "</table>";
    ?>
<!--ignore this please I hate css-->
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
} else {
    echo "0 results";
}

$conn->close();
?>
