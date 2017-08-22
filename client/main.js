'use strict';

import axios from 'axios';
import chat from 'twilio-chat';
const frame = require("twilio-frame/public_api/Frame");

loadChat();

function loadChat() {
  const channelName = 'chatFrameDemo';
  generateToken()
    .then(token => {
      return chat.create(token, {
        logLevel: 'debug'
      });
    })
    .then(client => {
      client.on('channelJoined', channel => {
        loadFrame(client, channel);
      });
      return client.getChannelByUniqueName(channelName).catch(err => {
        return client.createChannel({
          uniqueName: channelName,
          friendlyName: 'Chat Frame Demo'
        });
      });
    })
    .then(channel => {
      return channel.join();
    })
    .catch(err => {
      console.error(err);
    });
}

function generateToken() {
  return new Promise((resolve, reject) => {
    axios
      .post('/token', {
        identity: 'Yuto', // TODO fix to input mail address!
        device: 'browser'
      })
      .then(res => {
        resolve(res.data.token);
      })
      .catch(err => {
        reject(err);
      });
  })
}

function loadFrame(client, channel) {
  const frameConfiguration = {
    channel: {
      chrome: {
        closeCallback: channelSid => {
          chatFrame.unloadChannelBySid(channelSid);
        }
      },
      visual: {
        colorTheme: 'DarkTheme'
      }
    }
  };
  const chatFrame = frame.createChat(client, frameConfiguration);
  chatFrame.loadChannel('#chatContainer', channel)
}
