import Stripe from 'stripe';
import SettingModel  from '../models/SettingModel';
const productCreate = (data) => {
  return new Promise(async (resolve) => {
    try {
      const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
      const product = await stripe.products.create(data);
      if (!product) resolve(false);
      resolve(product);
    } catch (error) {
      // console.log(error);
      resolve(false);
    }
  });
};

const planCreate = (data) => {
  return new Promise(async (resolve) => {
    try {
      const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
      const plan = await stripe.plans.create(data);
      if (!plan) resolve(false);
      resolve(plan);
    } catch (error) {
      //console.log(error);
      resolve(false);
    }
  });
};

const customerCreate = (data) => {
  return new Promise(async (resolve) => {
    try {
      const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
      const customer = await stripe.customers.create(data);
      // const plan = await stripe.plans.create(data);
      if (!customer) resolve(false);
      resolve(customer);
    } catch (error) {
      resolve(false);
    }
  });
};

const customerUpdate = (data, customer) => {
  return new Promise(async (resolve) => {
    try {
      const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
      const updatecustomer = await stripe.customers.update(customer, data);
      //const customer = await stripe.customers.create(data);
      // const plan = await stripe.plans.create(data);
      if (!updatecustomer) resolve(false);
      resolve(updatecustomer);
    } catch (error) {
      resolve(false);
    }
  });
};

const createCoupon = (data) => {
  return new Promise(async (resolve) => {
    try {
      // console.log('data',);
      // console.log('df');
      const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

      const coupon = await stripe.coupons.create({
        percent_off: data['discount'],
        duration: 'once',
        name:data['coupon_name'],
      });
      //console.log(customer);
      // const plan = await stripe.plans.create(data);
      if (!coupon) resolve(false);
      resolve(coupon);
    } catch (error) {
      //console.log(error);
      resolve(false);
    }
  });
};


const UpdateCoupon = (data) => {
  return new Promise(async (resolve) => {
    try {
      const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
      const customer = await stripe.coupons.update(data);
      // const plan = await stripe.plans.create(data);
      if (!customer) resolve(false);
      resolve(customer);
    } catch (error) {
      resolve(false);
    }
  });
};


const DeleteCoupon = (data) => {
  return new Promise(async (resolve) => {
    try {
      const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
      const deletedd  = await stripe.coupons.del(data);
      // const plan = await stripe.plans.create(data);
      if (!deletedd ) resolve(false);
      resolve(deletedd );
    } catch (error) {
      console.log(error);
      resolve(false);
    }
  });
};


const createSubscription = (customer, plan, source = null) => {
  return new Promise(async (resolve) => {
    try {
      const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
      var objPlan = {
        customer: customer,
        items: [{ plan: plan }],
      };
      if (source) {
        objPlan.default_source = source;
      }
      const subscription = await stripe.subscriptions.create(objPlan);
      if (!subscription) resolve(false);
      resolve(subscription);
    } catch (error) {
      resolve(false);
    }
  });
};

const getInvoice = (invoiceid) => {
  return new Promise(async (resolve) => {
    try {
      const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
      const invoice = await stripe.invoices.retrieve(invoiceid);
      if (!invoice) resolve(false);
      resolve(invoice);
    } catch (error) {
      resolve(false);
    }
  });
};

const createPaymentMethod = (customer, cardToken) => {
  return new Promise(async (resolve) => {
    try {
      const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
      const payment = await stripe.customers.createSource(customer, {
        source: cardToken,
      });
      if (!payment) resolve(false);
      resolve(payment);
    } catch (error) {
      resolve(false);
    }
  });
};

module.exports = {
  productCreate,
  planCreate,
  customerCreate,
  customerUpdate,
  createSubscription,
  getInvoice,
  createCoupon,
  UpdateCoupon,
  DeleteCoupon,
  createPaymentMethod,
};
