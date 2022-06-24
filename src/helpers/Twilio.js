import Twilio from 'twilio';
import encrypt from './encryption';
import TwilioModel from '../twilio/TwilioModel';

const getAvilableNumbers = (setting, areacode) => {
  return new Promise(async (resolve) => {
    try {
      var client = new Twilio(
        encrypt.decrypt(setting.app_sid),
        encrypt.decrypt(setting.app_token),
      );
      var numbers = await client.availablePhoneNumbers('US').local.list({
        areaCode: areacode,
        limit: 20,
        smsEnabled: true,
        voiceEnabled: true,
      });
      resolve(numbers);
    } catch (e) {
      console.log(e);
      resolve(false);
    }
  });
};

const purchaseNumbers = (setting, number) => {
  return new Promise(async (resolve) => {
    try {
      var client = new Twilio(
        encrypt.decrypt(setting.app_sid),
        encrypt.decrypt(setting.app_token),
      );
      var numbers = await client.incomingPhoneNumbers.create({
        phoneNumber: number,
        smsUrl: `${process.env.BASE_URL}/receive-sms`,
        voiceUrl: `${process.env.BASE_URL}/incoming-call`,
        statusCallback: `${process.env.BASE_URL}/call-status`,
      });
      resolve(numbers);
    } catch (e) {
      console.log(e);
      resolve(false);
    }
  });
};

const configDeconfig = (setting, number, config) => {
  return new Promise(async (resolve) => {
    try {
      var client = new Twilio(
        encrypt.decrypt(setting.app_sid),
        encrypt.decrypt(setting.app_token),
      );
      if (config) {
        var data = {
          smsUrl: `${process.env.BASE_URL}/receive-sms`,
          voiceUrl: `${process.env.BASE_URL}/incoming-call`,
          statusCallback: `${process.env.BASE_URL}/call-status`,
        };
      } else {
        var data = {
          smsUrl: `${process.env.BASE_URL}/test-url`,
          voiceUrl: `${process.env.BASE_URL}/test-url`,
          statusCallback: `${process.env.BASE_URL}/test-url`,
        };
      }
      var numbers = await client.incomingPhoneNumbers(number.sid).update(data);
      resolve(numbers);
    } catch (e) {
      console.log(e);
      resolve(false);
    }
  });
};

const getSettngs = async () => {
  return new Promise(async (resolve) => {
    var twilioModel = new TwilioModel().getModel();
    var data = await twilioModel.findOne();
    if (data) {
      resolve({ data: data });
    } else {
      resolve(false);
    }
  });
};

const getCallToken = (identity2, type = 'android') => {
  return new Promise(async (resolve) => {
    try {
      var setting = await getSettngs();
      // console.log(setting);
      const AccessToken = Twilio.jwt.AccessToken;
      const VoiceGrant = AccessToken.VoiceGrant;

      // Used when generating any kind of tokens
      const twilioAccountSid = setting.data.app_sid;
      const twilioApiKey = process.env.TWILIO_API_KEY || setting.data.app_key;
      const twilioApiSecret =
        process.env.TWILIO_API_SECRET || setting.data.app_secret;
      const outgoingApplicationSid =
        process.env.TWIML_APP || setting.data.twimal_app;
      const identity = identity2;

      if (type == 'ios') {
        var crId = process.env.IOS_CR;
        console.log('ios', crId);
      } else {
        var crId = process.env.MOBILE_CR;
        console.log('android', crId);
      }
      const voiceGrant = new VoiceGrant({
        outgoingApplicationSid: outgoingApplicationSid,
        incomingAllow: true, // Optional: add to allow incoming calls
        pushCredentialSid: crId,
      });

      const token = new AccessToken(
        twilioAccountSid,
        twilioApiKey,
        twilioApiSecret,
        { identity: identity },
      );
      token.addGrant(voiceGrant);
      resolve(token.toJwt());
    } catch (e) {
      console.log(e);
      resolve(false);
    }
  });
};
module.exports = {
  getAvilableNumbers,
  purchaseNumbers,
  configDeconfig,
  getCallToken,
};
