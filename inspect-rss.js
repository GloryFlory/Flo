const Parser = require('rss-parser');

const parser = new Parser({
  customFields: {
    item: [
      ['itunes:episode', 'episodeNumber'],
      ['itunes:duration', 'duration'],
      ['itunes:image', 'itunesImage'],
      ['itunes:summary', 'summary'],
      ['content:encoded', 'contentEncoded'],
      ['description', 'rawDescription']
    ]
  }
});

async function inspectRSSData() {
  try {
    const feed = await parser.parseURL('https://anchor.fm/s/100089160/podcast/rss');
    console.log('=== FEED INSPECTION ===');
    console.log('Total episodes:', feed.items.length);
    
    if (feed.items.length > 0) {
      const episode = feed.items[0];
      console.log('\n=== LATEST EPISODE DATA ===');
      console.log('Title:', episode.title);
      console.log('\n--- Raw Description ---');
      console.log(episode.description);
      console.log('\n--- Content Snippet ---');
      console.log(episode.contentSnippet);
      console.log('\n--- Content ---');
      console.log(episode.content);
      console.log('\n--- Summary ---');
      console.log(episode.summary);
      console.log('\n--- Content Encoded ---');
      console.log(episode.contentEncoded);
      console.log('\n--- Available Fields ---');
      console.log(Object.keys(episode));
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
}

inspectRSSData();
