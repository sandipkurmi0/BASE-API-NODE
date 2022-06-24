"use strict";

var _twilio = _interopRequireDefault(require("twilio"));

var _encryption = _interopRequireDefault(require("./encryption"));

var _TwilioModel = _interopRequireDefault(require("../twilio/TwilioModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getAvilableNumbers = function getAvilableNumbers(setting, areacode) {
  return new Promise( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(resolve) {
      var client, numbers;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              client = new _twilio["default"](_encryption["default"].decrypt(setting.app_sid), _encryption["default"].decrypt(setting.app_token));
              _context.next = 4;
              return client.availablePhoneNumbers('US').local.list({
                areaCode: areacode,
                limit: 20,
                smsEnabled: true,
                voiceEnabled: true
              });

            case 4:
              numbers = _context.sent;
              resolve(numbers);
              _context.next = 12;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);
              resolve(false);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 8]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
};

var purchaseNumbers = function purchaseNumbers(setting, number) {
  return new Promise( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(resolve) {
      var client, numbers;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              client = new _twilio["default"](_encryption["default"].decrypt(setting.app_sid), _encryption["default"].decrypt(setting.app_token));
              _context2.next = 4;
              return client.incomingPhoneNumbers.create({
                phoneNumber: number,
                smsUrl: "".concat(process.env.BASE_URL, "/receive-sms"),
                voiceUrl: "".concat(process.env.BASE_URL, "/incoming-call"),
                statusCallback: "".concat(process.env.BASE_URL, "/call-status")
              });

            case 4:
              numbers = _context2.sent;
              resolve(numbers);
              _context2.next = 12;
              break;

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](0);
              console.log(_context2.t0);
              resolve(false);

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 8]]);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }());
};

var configDeconfig = function configDeconfig(setting, number, config) {
  return new Promise( /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(resolve) {
      var client, data, numbers;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              client = new _twilio["default"](_encryption["default"].decrypt(setting.app_sid), _encryption["default"].decrypt(setting.app_token));

              if (config) {
                data = {
                  smsUrl: "".concat(process.env.BASE_URL, "/receive-sms"),
                  voiceUrl: "".concat(process.env.BASE_URL, "/incoming-call"),
                  statusCallback: "".concat(process.env.BASE_URL, "/call-status")
                };
              } else {
                data = {
                  smsUrl: "".concat(process.env.BASE_URL, "/test-url"),
                  voiceUrl: "".concat(process.env.BASE_URL, "/test-url"),
                  statusCallback: "".concat(process.env.BASE_URL, "/test-url")
                };
              }

              _context3.next = 5;
              return client.incomingPhoneNumbers(number.sid).update(data);

            case 5:
              numbers = _context3.sent;
              resolve(numbers);
              _context3.next = 13;
              break;

            case 9:
              _context3.prev = 9;
              _context3.t0 = _context3["catch"](0);
              console.log(_context3.t0);
              resolve(false);

            case 13:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 9]]);
    }));

    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  }());
};

var getSettngs = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            return _context5.abrupt("return", new Promise( /*#__PURE__*/function () {
              var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(resolve) {
                var twilioModel, data;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        twilioModel = new _TwilioModel["default"]().getModel();
                        _context4.next = 3;
                        return twilioModel.findOne();

                      case 3:
                        data = _context4.sent;

                        if (data) {
                          resolve({
                            data: data
                          });
                        } else {
                          resolve(false);
                        }

                      case 5:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4);
              }));

              return function (_x4) {
                return _ref5.apply(this, arguments);
              };
            }()));

          case 1:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function getSettngs() {
    return _ref4.apply(this, arguments);
  };
}();

var getCallToken = function getCallToken(identity2) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'android';
  return new Promise( /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(resolve) {
      var setting, AccessToken, VoiceGrant, twilioAccountSid, twilioApiKey, twilioApiSecret, outgoingApplicationSid, identity, crId, voiceGrant, token;
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              _context6.next = 3;
              return getSettngs();

            case 3:
              setting = _context6.sent;
              // console.log(setting);
              AccessToken = _twilio["default"].jwt.AccessToken;
              VoiceGrant = AccessToken.VoiceGrant; // Used when generating any kind of tokens

              twilioAccountSid = setting.data.app_sid;
              twilioApiKey = process.env.TWILIO_API_KEY || setting.data.app_key;
              twilioApiSecret = process.env.TWILIO_API_SECRET || setting.data.app_secret;
              outgoingApplicationSid = process.env.TWIML_APP || setting.data.twimal_app;
              identity = identity2;

              if (type == 'ios') {
                crId = process.env.IOS_CR;
                console.log('ios', crId);
              } else {
                crId = process.env.MOBILE_CR;
                console.log('android', crId);
              }

              voiceGrant = new VoiceGrant({
                outgoingApplicationSid: outgoingApplicationSid,
                incomingAllow: true,
                // Optional: add to allow incoming calls
                pushCredentialSid: crId
              });
              token = new AccessToken(twilioAccountSid, twilioApiKey, twilioApiSecret, {
                identity: identity
              });
              token.addGrant(voiceGrant);
              resolve(token.toJwt());
              _context6.next = 22;
              break;

            case 18:
              _context6.prev = 18;
              _context6.t0 = _context6["catch"](0);
              console.log(_context6.t0);
              resolve(false);

            case 22:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[0, 18]]);
    }));

    return function (_x5) {
      return _ref6.apply(this, arguments);
    };
  }());
};

module.exports = {
  getAvilableNumbers: getAvilableNumbers,
  purchaseNumbers: purchaseNumbers,
  configDeconfig: configDeconfig,
  getCallToken: getCallToken
};