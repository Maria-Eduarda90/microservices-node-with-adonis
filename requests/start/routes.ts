import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('/customer', '');

}).prefix('/api');