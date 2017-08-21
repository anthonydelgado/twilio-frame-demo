'use strict';

import axios from 'axios';

loadChat();

function loadChat() {
  const channelName = 'chatFrameDemo';
  axios
    .post('/token', {
      identity: 'Yuto', // TODO fix to input mail address!
      device: 'browser'
    })
    .then(res => {
      return Twilio.Chat.Client.create(res.data.token, {
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
  const chatFrame = Twilio.Frame.createChat(client, frameConfiguration);
  chatFrame.loadChannel('#chatContainer', channel);
}
