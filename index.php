<?php include('server.php'); 
    if(empty($_SESSION['username'])){
        header('location: login.php');
    }
    ?>
<html lang="en">
<head>
    <link rel="stylesheet" href="indexstyle.css"/>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
</head>
<body>
    
    <?php if (isset($_SESSION['success'])): ?>
        
        <h3>
            <?php
                
                unset($_SESSION['success']);
                ?>
        </h3>
        <?php endif?>
        <?php if (isset($_SESSION['username'])):?>
            <div class="a"></div><div id="circle"></div>
            <h1>Welcome <strong><?php echo $_SESSION['username']; ?></strong></h1>
            <br>
            <br>
            <br>
            <br>
            <div class="ins">
            <div class="anitake">
            <input class="take" type="submit" onclick="window.location.href='/quiz.php'"value = "Take a Mad Minute">
            </div>
            <br>
            <br>
            <input class="lead"type="submit"onclick="window.location.href='/leaderboard.php'" value = "Leaderboard">
            <br>
            <br>
            <input class="your"type="submit" onclick="window.location.href='/status.php'"value = "Your Mad Minute status">
            
            </div>
            <p><a href="index.php?logout='1'" class="logout"style="color:black;">Logout</a?</p>
            <?php endif?>

        
    


    
</body>
</html>