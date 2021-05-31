<?php include('server.php'); ?>
<html>
  <head>
    <style>
      h2 {
        text-align: center;
        font-size: 60px;

      }
      .text-center{
        text-align: center;
      }
      .button{
        font-size: 40px;
      }

      h1{
        text-align: center;
        font-size: 50;
        
        
      }
      .login{
        width: 100px;
        height: 50px;
      }
      .or{
        padding: 0%;
        margin: 0%;
      }
      .register{
        padding:0%;
        margin: 0%;
      }
      .all{
        
        background-color: rgb(83, 121, 247);
        border-radius: 25px;
        height:500px;
        width:400px;
        
        margin:auto;
        
        text-align: center;
       
        display: block;
        justify-content: center;
        align-items: center;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(116, 53, 53, 0.19);
      }
      .please{
        margin:auto;
        
        font-size: 40;
        text-align:center;
        display:block;
      }
      input{
        height: 40px;
        width:300px;
        border-radius: 15px;
      }
      .error{
          position:absolute;
          font-size:20;
          width:400px;
          text-align: center;
          border:1px solid #a94442;
          background:#f2dede;
          border-radius:5px;
          margin-left:0 auto;
          margin-right:0 auto;
          margin-top:500;
          
          
          color:red;
          
      }


    </style>
  </head>
<body>

<h2>WELCOME to Mad Minutes!!!</h2>

<form method="post" action="login.php">

<div class="all">
<?php include('errors.php')?>
  <p class="please">Please login<br> or create an account</p>
  <br>
<div class="inputs">
<input  type="text" placeholder="Full Name" calss="username"name="username">
<br>
<input type="password" placeholder="Password" class="password" name="password">
<br>
<br>
<button name="login"class="login"id="login" type="submit">login</button>
<p class="or">or</p>
<a class="register"href="/register.php">register here</a>

</div>
</form>




</body>
</html>