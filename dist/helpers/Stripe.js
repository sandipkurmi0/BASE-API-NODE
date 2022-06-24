"use strict";

var _stripe = _interopRequireDefault(require("stripe"));

var _SettingModel = _interopRequireDefault(require("../models/SettingModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var productCreate = function productCreate(data) {
  return new Promise( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(resolve) {
      var stripe, product;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              stripe = new _stripe["default"](process.env.STRIPE_SECRET_KEY);
              _context.next = 4;
              return stripe.products.create(data);

            case 4:
              product = _context.sent;
              if (!product) resolve(false);
              resolve(product);
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);
              // console.log(error);
              resolve(false);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 9]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
};

var planCreate = function planCreate(data) {
  return new Promise( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(resolve) {
      var stripe, plan;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              stripe = new _stripe["default"](process.env.STRIPE_SECRET_KEY);
              _context2.next = 4;
              return stripe.plans.create(data);

            case 4:
              plan = _context2.sent;
              if (!plan) resolve(false);
              resolve(plan);
              _context2.next = 12;
              break;

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](0);
              //console.log(error);
              resolve(false);

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 9]]);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }());
};

var customerCreate = function customerCreate(data) {
  return new Promise( /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(resolve) {
      var stripe, customer;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              stripe = new _stripe["default"](process.env.STRIPE_SECRET_KEY);
              _context3.next = 4;
              return stripe.customers.create(data);

            case 4:
              customer = _context3.sent;
              // const plan = await stripe.plans.create(data);
              if (!customer) resolve(false);
              resolve(customer);
              _context3.next = 12;
              break;

            case 9:
              _context3.prev = 9;
              _context3.t0 = _context3["catch"](0);
              resolve(false);

            case 12:
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

var customerUpdate = function customerUpdate(data, customer) {
  return new Promise( /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(resolve) {
      var stripe, updatecustomer;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              stripe = new _stripe["default"](process.env.STRIPE_SECRET_KEY);
              _context4.next = 4;
              return stripe.customers.update(customer, data);

            case 4:
              updatecustomer = _context4.sent;
              //const customer = await stripe.customers.create(data);
              // const plan = await stripe.plans.create(data);
              if (!updatecustomer) resolve(false);
              resolve(updatecustomer);
              _context4.next = 12;
              break;

            case 9:
              _context4.prev = 9;
              _context4.t0 = _context4["catch"](0);
              resolve(false);

            case 12:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 9]]);
    }));

    return function (_x4) {
      return _ref4.apply(this, arguments);
    };
  }());
};

var createCoupon = function createCoupon(data) {
  return new Promise( /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(resolve) {
      var stripe, coupon;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              // console.log('data',);
              // console.log('df');
              stripe = new _stripe["default"](process.env.STRIPE_SECRET_KEY);
              _context5.next = 4;
              return stripe.coupons.create({
                percent_off: data['discount'],
                duration: 'once',
                name: data['coupon_name']
              });

            case 4:
              coupon = _context5.sent;
              //console.log(customer);
              // const plan = await stripe.plans.create(data);
              if (!coupon) resolve(false);
              resolve(coupon);
              _context5.next = 12;
              break;

            case 9:
              _context5.prev = 9;
              _context5.t0 = _context5["catch"](0);
              //console.log(error);
              resolve(false);

            case 12:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[0, 9]]);
    }));

    return function (_x5) {
      return _ref5.apply(this, arguments);
    };
  }());
};

var UpdateCoupon = function UpdateCoupon(data) {
  return new Promise( /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(resolve) {
      var stripe, customer;
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              stripe = new _stripe["default"](process.env.STRIPE_SECRET_KEY);
              _context6.next = 4;
              return stripe.coupons.update(data);

            case 4:
              customer = _context6.sent;
              // const plan = await stripe.plans.create(data);
              if (!customer) resolve(false);
              resolve(customer);
              _context6.next = 12;
              break;

            case 9:
              _context6.prev = 9;
              _context6.t0 = _context6["catch"](0);
              resolve(false);

            case 12:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[0, 9]]);
    }));

    return function (_x6) {
      return _ref6.apply(this, arguments);
    };
  }());
};

var DeleteCoupon = function DeleteCoupon(data) {
  return new Promise( /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(resolve) {
      var stripe, deletedd;
      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;
              stripe = new _stripe["default"](process.env.STRIPE_SECRET_KEY);
              _context7.next = 4;
              return stripe.coupons.del(data);

            case 4:
              deletedd = _context7.sent;
              // const plan = await stripe.plans.create(data);
              if (!deletedd) resolve(false);
              resolve(deletedd);
              _context7.next = 13;
              break;

            case 9:
              _context7.prev = 9;
              _context7.t0 = _context7["catch"](0);
              console.log(_context7.t0);
              resolve(false);

            case 13:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, null, [[0, 9]]);
    }));

    return function (_x7) {
      return _ref7.apply(this, arguments);
    };
  }());
};

var createSubscription = function createSubscription(customer, plan) {
  var source = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  return new Promise( /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(resolve) {
      var stripe, objPlan, subscription;
      return regeneratorRuntime.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.prev = 0;
              stripe = new _stripe["default"](process.env.STRIPE_SECRET_KEY);
              objPlan = {
                customer: customer,
                items: [{
                  plan: plan
                }]
              };

              if (source) {
                objPlan.default_source = source;
              }

              _context8.next = 6;
              return stripe.subscriptions.create(objPlan);

            case 6:
              subscription = _context8.sent;
              if (!subscription) resolve(false);
              resolve(subscription);
              _context8.next = 14;
              break;

            case 11:
              _context8.prev = 11;
              _context8.t0 = _context8["catch"](0);
              resolve(false);

            case 14:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, null, [[0, 11]]);
    }));

    return function (_x8) {
      return _ref8.apply(this, arguments);
    };
  }());
};

var getInvoice = function getInvoice(invoiceid) {
  return new Promise( /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(resolve) {
      var stripe, invoice;
      return regeneratorRuntime.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              _context9.prev = 0;
              stripe = new _stripe["default"](process.env.STRIPE_SECRET_KEY);
              _context9.next = 4;
              return stripe.invoices.retrieve(invoiceid);

            case 4:
              invoice = _context9.sent;
              if (!invoice) resolve(false);
              resolve(invoice);
              _context9.next = 12;
              break;

            case 9:
              _context9.prev = 9;
              _context9.t0 = _context9["catch"](0);
              resolve(false);

            case 12:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9, null, [[0, 9]]);
    }));

    return function (_x9) {
      return _ref9.apply(this, arguments);
    };
  }());
};

var createPaymentMethod = function createPaymentMethod(customer, cardToken) {
  return new Promise( /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(resolve) {
      var stripe, payment;
      return regeneratorRuntime.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              _context10.prev = 0;
              stripe = new _stripe["default"](process.env.STRIPE_SECRET_KEY);
              _context10.next = 4;
              return stripe.customers.createSource(customer, {
                source: cardToken
              });

            case 4:
              payment = _context10.sent;
              if (!payment) resolve(false);
              resolve(payment);
              _context10.next = 12;
              break;

            case 9:
              _context10.prev = 9;
              _context10.t0 = _context10["catch"](0);
              resolve(false);

            case 12:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10, null, [[0, 9]]);
    }));

    return function (_x10) {
      return _ref10.apply(this, arguments);
    };
  }());
};

module.exports = {
  productCreate: productCreate,
  planCreate: planCreate,
  customerCreate: customerCreate,
  customerUpdate: customerUpdate,
  createSubscription: createSubscription,
  getInvoice: getInvoice,
  createCoupon: createCoupon,
  UpdateCoupon: UpdateCoupon,
  DeleteCoupon: DeleteCoupon,
  createPaymentMethod: createPaymentMethod
};