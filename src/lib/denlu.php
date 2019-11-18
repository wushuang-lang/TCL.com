<?php
    
    include('conn.php');

    $username = $_REQUEST['username'];
    $password = $_REQUEST['password'];

    $sql = "select * from user where `u_name`='$username' and `u_pass`='$password'";
    
    $res = $mysqli->query($sql);
    if($res->num_rows>0){
        echo '{"msg":"登录成功"}';
        // echo "<script>alert('登陆成功');</script>";
        // echo "<script>location.href=\"../main.html\"</script>";
        // echo "<script>localtion.href=\"./main.html"\</script>";

    }else{
        // echo "<script>alert('用户名或密码错误');</script>";
        // echo "<script>location.href=\"../dengluye.html\"</script>";
        echo '{"msg":"用户名或密码不正确"}';
    }
    $mysqli->close();
?>
