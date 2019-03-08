'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _database = require('./config/database');

var _database2 = _interopRequireDefault(_database);

var _gig = require('./routes/gig');

var _gig2 = _interopRequireDefault(_gig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

var port = process.env.PORT || 4000;

_database2.default.authenticate().then(function () {
  console.log('Connection has been established successfully.');
}).catch(function (err) {
  console.error('Unable to connect to the database:', err);
});

app.use('/gigs', _gig2.default);
app.listen(port, function () {
  return console.log('app started on port ' + port);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL1NlcnZlci9hcHAuanMiXSwibmFtZXMiOlsiYXBwIiwicG9ydCIsInByb2Nlc3MiLCJlbnYiLCJQT1JUIiwiZGIiLCJhdXRoZW50aWNhdGUiLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiZXJyb3IiLCJlcnIiLCJ1c2UiLCJyb3V0ZXIiLCJsaXN0ZW4iXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsTUFBTSx3QkFBWjs7QUFFQSxJQUFNQyxPQUFPQyxRQUFRQyxHQUFSLENBQVlDLElBQVosSUFBb0IsSUFBakM7O0FBRUFDLG1CQUNHQyxZQURILEdBRUdDLElBRkgsQ0FFUSxZQUFNO0FBQ1ZDLFVBQVFDLEdBQVIsQ0FBWSwrQ0FBWjtBQUNELENBSkgsRUFLR0MsS0FMSCxDQUtTLGVBQU87QUFDWkYsVUFBUUcsS0FBUixDQUFjLG9DQUFkLEVBQW9EQyxHQUFwRDtBQUNELENBUEg7O0FBU0FaLElBQUlhLEdBQUosQ0FBUSxPQUFSLEVBQWlCQyxhQUFqQjtBQUNBZCxJQUFJZSxNQUFKLENBQVdkLElBQVgsRUFBaUI7QUFBQSxTQUFNTyxRQUFRQyxHQUFSLDBCQUFtQ1IsSUFBbkMsQ0FBTjtBQUFBLENBQWpCIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgZGIgZnJvbSAnLi9jb25maWcvZGF0YWJhc2UnO1xuaW1wb3J0IHJvdXRlciBmcm9tICcuL3JvdXRlcy9naWcnO1xuXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG5cbmNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDQwMDA7XG5cbmRiXG4gIC5hdXRoZW50aWNhdGUoKVxuICAudGhlbigoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ0Nvbm5lY3Rpb24gaGFzIGJlZW4gZXN0YWJsaXNoZWQgc3VjY2Vzc2Z1bGx5LicpO1xuICB9KVxuICAuY2F0Y2goZXJyID0+IHtcbiAgICBjb25zb2xlLmVycm9yKCdVbmFibGUgdG8gY29ubmVjdCB0byB0aGUgZGF0YWJhc2U6JywgZXJyKTtcbiAgfSk7XG5cbmFwcC51c2UoJy9naWdzJywgcm91dGVyKTtcbmFwcC5saXN0ZW4ocG9ydCwgKCkgPT4gY29uc29sZS5sb2coYGFwcCBzdGFydGVkIG9uIHBvcnQgJHtwb3J0fWApKTtcblxuXG5cbiJdfQ==