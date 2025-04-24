const Alexa = require('ask-sdk-core');

const PlayTrackIntentHandler = {
  canHandle(handlerInput) {
    return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
      && Alexa.getIntentName(handlerInput.requestEnvelope) === 'PlayTrackIntent';
  },
  handle(handlerInput) {
    const trackName = handlerInput.requestEnvelope.request.intent.slots.TrackName.value;
    const cleaned = trackName.toLowerCase().replace(/\s+/g, '-');
    const streamUrl = `https://DEINE-NGROK-URL.ngrok.io/tracks/${cleaned}.mp3`;

    return handlerInput.responseBuilder
      .speak(`Ich spiele ${trackName}`)
      .addAudioPlayerPlayDirective('REPLACE_ALL', streamUrl, cleaned, 0, null)
      .getResponse();
  }
};

exports.handler = Alexa.SkillBuilders.custom()
  .addRequestHandlers(PlayTrackIntentHandler)
  .lambda();
