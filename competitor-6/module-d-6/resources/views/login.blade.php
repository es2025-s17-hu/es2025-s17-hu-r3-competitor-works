@include('components.head')

<body>
    <h1>Dineease</h1>
    <form method="POST" action="/login">
        @csrf
        <label for="username">Username
            <input type="text" name="username" id="username">
        </label>
        <label for="password">Password
            <input type="password" name="password" id="password">
        </label>
        <input type="submit" value="Log in">
    </form>
</body>
