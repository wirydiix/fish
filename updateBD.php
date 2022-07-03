<?php
if (count($_GET)==2) {
    $conn = new mysqli("localhost", "mysql", "mysql", "fish");
    if ($conn->connect_error) {
        die("Connection failed:");
    }
    $username = $_GET['username'];
    $score = $_GET['score'];

    $sql = "SELECT name FROM userscore WHERE name = \"{$username}\" ";
    $result = $conn->query($sql);
    $namein = false;
    foreach ($result as $row) {
        if (count($row) >= 1) {
            $namein = true;
        }
    }
    if ($namein) {
        $sql = "UPDATE userscore SET score = {$score} WHERE name = \"{$username}\" and score < \"{$score}\"";
        $conn->query($sql) === TRUE;
    } else {
        $sql = "INSERT INTO userscore (name, score) VALUES (\"{$username}\" , {$score})";
        if ($conn->query($sql) === TRUE) {
            echo "успешно";
        } else {
            echo "Error: " . $sql . "<br>" . mysqli_error($conn);
        }
    }
}

?>
