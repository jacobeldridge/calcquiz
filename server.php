<?php
    session_start();
    
    
   
    $username = '';
    $email = '';
    $errors = array();
    $db = mysqli_connect('domain', 'username','password','table name');
    $a = '';


    if (isset($_POST['register'])){
        $username = mysqli_real_escape_string($db, $_POST['username']);
        $email = mysqli_real_escape_string($db, $_POST['email']);
        $password_1 = mysqli_real_escape_string($db, $_POST['password_1']);
        $password_2 = mysqli_real_escape_string($db, $_POST['password_2']);
        if (empty($username)){
            array_push($errors, "Username is required");
        }
        if (empty($email)){
            array_push($errors, "Email is required");
        }
        if (empty($password_1)){
            array_push($errors, "Password is required");
        }
        if ($password_1 != $password_2){
            array_push($errors, "The two passwords do not match");
        }
        $emailQuery = "SELECT * FROM users WHERE email='$email' LIMIT 1";
        $result2 = mysqli_query($db, $emailQuery);
        $emailCount = mysqli_num_rows($result2);

        if ($emailCount > 0){
            array_push($errors, "Email already exists. Choose another");}
        $usernameQuery = "SELECT * FROM users WHERE username='$username' LIMIT 1";
        $result3 = mysqli_query($db, $usernameQuery);
        $userCount = mysqli_num_rows($result3);

        if ($userCount > 0){
            array_push($errors, "Username already exists. Choose another");}
        if (count($errors) == 0){
            $password = md5($password_1);
            $sql = "INSERT INTO users (username, email, password) VALUES ('$username', '$email', 
            '$password')";
            mysqli_query($db, $sql);
            $_SESSION['username'] = $username;
            $_SESSION['success'] = "Yay!!! hehe ready for math? :)";
            header('location: index.php');

        }
    }
        if (isset($_POST['login'])){
            $username = mysqli_real_escape_string($db, $_POST['username']);
            $password = mysqli_real_escape_string($db, $_POST['password']);
            if (empty($username)){
                array_push($errors, "Username is required");
            }
            if (empty($password)){
                array_push($errors, "Password is required");
            }
    
            if (count($errors) == 0){
                $password = md5($password);
                $query = "SELECT * FROM users WHERE username='$username' AND password='$password'";
                $result = mysqli_query($db, $query);
                if (mysqli_num_rows($result) == 1){
                    $_SESSION['username'] = $username;
                    $_SESSION['success'] = "Yay!!! hehe ready for math? :)";
                    global $username;
                    $username = $_SESSION['username'];
                    header('location: index.php');
                    
                    
                    
                }
                else{
                    array_push($errors, "You put in the wrong username or password :(");
                    
                }
            
            }
        }
        
        //logout
        if(isset($_GET['logout'])){
            session_destroy();

            unset($_SESSION['username']);
            header('location: login.php');
        }
        
        
       
        if (isset($_POST['submitall'])){
            $username =  $_SESSION['username'];
            $query = "SELECT * FROM grades WHERE username='$username'";
            $result = mysqli_query($db, $query);
            $usernamecount = mysqli_num_rows($result);
            $date = mysqli_real_escape_string($db, $_POST['rightnow']);
            $score = mysqli_real_escape_string($db, $_POST['score']);
            $tabchanges = mysqli_real_escape_string($db, $_POST['tabchanges']);
            $grade = mysqli_real_escape_string($db, $_POST['grade']);

            if ($usernamecount == 1){
                $sql7 = "DELETE FROM grades WHERE username = '$username'";
                $sql = "INSERT INTO grades (username, dates, score, tabchanges, grade) VALUES ('$username', '$date', 
                    '$score','$tabchanges','$grade')";
                    mysqli_query($db, $sql7);
                    mysqli_query($db, $sql);
                    
            }
            if ($usernamecount == 0){
                $sql = "INSERT INTO grades (username, dates, score, tabchanges, grade) VALUES ('$username', '$date', 
                    '$score','$tabchanges','$grade')";
                    mysqli_query($db, $sql);
                   
                    
            }
        }
    
?>
