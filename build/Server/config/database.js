'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var db = new _sequelize2.default('codegig', 'Andela', 'postgres', {
  host: 'localhost',
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

exports.default = db;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL1NlcnZlci9jb25maWcvZGF0YWJhc2UuanMiXSwibmFtZXMiOlsiZGIiLCJTZXF1ZWxpemUiLCJob3N0IiwiZGlhbGVjdCIsInBvb2wiLCJtYXgiLCJtaW4iLCJhY3F1aXJlIiwiaWRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7OztBQUVBLElBQU1BLEtBQUssSUFBSUMsbUJBQUosQ0FBYyxTQUFkLEVBQXlCLFFBQXpCLEVBQW1DLFVBQW5DLEVBQStDO0FBQ3hEQyxRQUFNLFdBRGtEO0FBRXhEQyxXQUFTLFVBRitDOztBQUl4REMsUUFBTTtBQUNKQyxTQUFLLENBREQ7QUFFSkMsU0FBSyxDQUZEO0FBR0pDLGFBQVMsS0FITDtBQUlKQyxVQUFNO0FBSkY7QUFKa0QsQ0FBL0MsQ0FBWDs7a0JBWWVSLEUiLCJmaWxlIjoiZGF0YWJhc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2VxdWVsaXplIGZyb20gJ3NlcXVlbGl6ZSc7XG5cbmNvbnN0IGRiID0gbmV3IFNlcXVlbGl6ZSgnY29kZWdpZycsICdBbmRlbGEnLCAncG9zdGdyZXMnLCB7XG4gIGhvc3Q6ICdsb2NhbGhvc3QnLFxuICBkaWFsZWN0OiAncG9zdGdyZXMnLFxuXG4gIHBvb2w6IHtcbiAgICBtYXg6IDUsXG4gICAgbWluOiAwLFxuICAgIGFjcXVpcmU6IDMwMDAwLFxuICAgIGlkbGU6IDEwMDAwXG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZGI7Il19