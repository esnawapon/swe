<!DOCTYPE html>
<html>
<head>
    <base href="/">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
    <meta http-equiv="Pragma" content="no-cache">
    <meta http-equiv="Expires" content="0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <title>Book a Course: Complaint</title>
</head>
<body>
<div class="container">
  <h1 class="text-center">Sign in</h1>
  <form class="card border" style="width: 300px;margin: auto">
    <div class="card-body">
      <div class="form-group">
          <label for="id">ID</label>
          <input id="id" type="text" class="form-control">
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input id="password" type="password" class="form-control">
        </div>
        <div class="form-group">
          <label for="type">Type</label>
          <select id="type">
              <option value="STUDENT" selected>Student</option>
              <option value="STAFF">Staff</option>
              <option value="ADMIN">Admin</option>
          </select>
        </div>
        <div class="text-right">
          <button type="button" onclick="login()" class="btn btn-primary">Login</button>
        </div>
    </div>
  </form>
</div>
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
