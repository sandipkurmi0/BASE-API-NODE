'use strict';

var crypto = require('crypto'); //const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY; // Must be 256 bits (32 characters)


var ENCRYPTION_KEY = 'XwPp9xazJ0ku5CZnlmgAx2Dld8SHkAeT';
var IV_LENGTH = 16; // For AES, this is always 16

function encrypt(text) {
  var iv = crypto.randomBytes(IV_LENGTH);
  var cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(ENCRYPTION_KEY), iv);
  var encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher["final"]()]);
  return iv.toString('hex') + ':' + encrypted.toString('hex');
}

function decrypt(text) {
  var textParts = text.split(':');
  var iv = Buffer.from(textParts.shift(), 'hex');
  var encryptedText = Buffer.from(textParts.join(':'), 'hex');
  var decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(ENCRYPTION_KEY), iv);
  var decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher["final"]()]);
  return decrypted.toString();
}

module.exports = {
  decrypt: decrypt,
  encrypt: encrypt
};