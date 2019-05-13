<!DOCTYPE html>
<html>
<head>
    <base href="/">
    <meta charset="UTF-8">
</head>
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
<meta http-equiv="Pragma" content="no-cache">
<meta http-equiv="Expires" content="0">
<title>Book a Course: Complaint</title>
</head>
<body>
Sign in
<form>
    <input id="id" type="text">
    <input type="password">
    <select id="type">
        <option value="STUDENT" selected>Student</option>
        <option value="STAFF">Staff</option>
        <option value="ADMIN">Admin</option>
    </select>
    <button type="button" onclick="login()">Login</button>
</form>
<script type="text/javascript">
    login = () => {
        var idElement = document.getElementById("id");
        var typeElement = document.getElementById("type");
        var id = idElement.value;
        var type = typeElement.value;
        if (!id) {
            return;
        }
        fetch('/api/user/login', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id, type }),
            method: "POST"
        })
        .then(response => response.json())
        .then(response => location.href="/complaints")
        .catch(error => window.alert(error));
    }
</script>
</body>
</html>
