const { NaturalLanguageUnderstandingV1 } = require('ibm-watson');

const nlu = new NaturalLanguageUnderstandingV1({
  version: '2022-04-07',
  iam_apikey: 'YOUR_API_KEY',
  url: 'YOUR_URL'
});

export { nlu };

async function analyzeText(text) {
  const params = {
    text: text,
    features: {
      emotion: {}
    }
  };

  try {
    const response = await nlu.analyze(params);
    const emotions = response.result.emotion.document.emotion;
    // Handle the emotions object
  } catch (error) {
    console.error(error);
  }
}



