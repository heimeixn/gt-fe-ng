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
$routeProvider.when('/recommend', {
    resource:'pages/recommend'
});
$routeProvider.when('/search', {
    resource:'pages/search'
});

$routeProvider.run("app.route");