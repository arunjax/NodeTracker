exports.routes = function (map) {
    map.root('users#index');
    map.resources('users');
};