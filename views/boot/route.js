$routeProvider.when('/login', {
    resource:'login'
});
$routeProvider.when('/register', {
    resource:'register'
});
$routeProvider.when('/index', {
    resource:'index'
});
$routeProvider.when('/customer', {
    resource:'pages/customer'
});
$routeProvider.when('/people', {
    resource:'pages/people'
});

$routeProvider.run("app.route");