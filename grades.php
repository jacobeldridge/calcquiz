<?php include('server.php'); ?>
<?php if(empty($_SESSION['username'])){
        header('location: login.php');
    }
    ?>
<style>
table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  text-align: left;
  padding: 8px;
}

tr:nth-child(even){background-color: #f2f2f2}

th {
  background-color: #4CAF50;
  color: white;
}
</style>
<?php



// Create connection
$conn = mysqli_connect('localhost', 'root','','user_data');

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT id, username, dates, tabchanges, score, grade FROM grades";
$result = mysqli_query($conn, $sql);
if (mysqli_num_rows($result) > 0) {

    echo "<table><tr><th>ID</th><th>Name</th><th>Date/Time</th><th>Tab Changes</th><th>Score</th><th>Grade</th></tr>";
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "<tr><td>" . $row["id"]. "</td><td>" . $row["username"]."</td><td>" . $row["dates"]."</td><td>" . $row["tabchanges"]."</td><td>" . $row["score"]."</td><td>" . $row["grade"]."</td></tr>";
    }
    echo "</table>";
 
} else {
    echo "0 results";
}

$conn->close();
?>