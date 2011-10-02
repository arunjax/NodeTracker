load('application');

action('index', function () {
    this.title = app.settings.appName;
    render();
});
