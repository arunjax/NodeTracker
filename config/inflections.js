var inflections = {};

var Main = {"filename":{"singular":"main","plural":"mains"},"constructor":{"singular":"Main","plural":"Mains"},"property":{"singular":"main","plural":"mains"}};
inflections['main'] = Main;
inflections['mains'] = Main;
inflections['Main'] = Main;
inflections['Mains'] = Main;
inflections['main'] = Main;
inflections['mains'] = Main;


var User = {"filename":{"singular":"user","plural":"users"},"constructor":{"singular":"User","plural":"Users"},"property":{"singular":"user","plural":"users"}};
inflections['user'] = User;
inflections['users'] = User;
inflections['User'] = User;
inflections['Users'] = User;
inflections['user'] = User;
inflections['users'] = User;

var Session = {"filename":{"singular":"session","plural":"sessions"},"constructor":{"singular":"Session","plural":"Sessions"},"property":{"singular":"session","plural":"sessions"}};
inflections['session'] = Session;
inflections['sessions'] = Session;
inflections['Session'] = Session;
inflections['Sessions'] = Session;
inflections['session'] = Session;
inflections['sessions'] = Session;

module.exports = inflections;