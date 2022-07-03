<?php
$dbconnection = mysqli_connect("localhost", "DiiX", "diix1234", "fish");
$result_arr = "";
if($_GET["type"]=="TopList") {
    $result = mysqli_query($dbconnection, "SELECT * FROM userscore ORDER BY score DESC LIMIT 0,10");
    $result_arr = mysqli_fetch_all($result, MYSQLI_ASSOC);
}
elseif($_GET["type"]=="Rank"){
    $username = $_GET["username"];
    $score = $_GET["score"];
    mysqli_query($dbconnection, "SET @rank=1");
    $resultScore = mysqli_query($dbconnection, "SELECT score FROM `userscore`  WHERE  name = \"$username\"" );
    $resultScore_arr = mysqli_fetch_all($resultScore, MYSQLI_ASSOC)[0]['score'];
    if($score < $resultScore_arr){
        $score = $resultScore_arr;
    }
    mysqli_query($dbconnection, "SELECT @rank:=@rank+1 FROM `userscore` WHERE  name != \"$username\" and score >= \"$score\"  ORDER BY score DESC ");
    $result = mysqli_query($dbconnection, "SELECT @rank as rank FROM `userscore` WHERE  name = \"$username\"");
    $result_arr = mysqli_fetch_all($result, MYSQLI_ASSOC)[0]['rank'];
}
echo json_encode($result_arr);
?>