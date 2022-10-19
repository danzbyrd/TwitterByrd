
const userMock = {
  "created_at": "2021-02-24T21:35:08.000Z",
  "description": "DM for promotion | synthpop, postpunk, darkwave, indie, shoegaze, new wave, dreampop, 80s, 90s, 00s music, synthwave| follow @goth_videos for more music",
  "entities": {
    "description": {
      "mentions": [
        {
          "end": 137,
          "start": 125,
          "username": "goth_videos"
        }
      ]
    },
    "url": {
      "urls": [
        {
          "display_url": "open.spotify.com/playlist/5wLi4\u2026",
          "end": 23,
          "expanded_url": "https://open.spotify.com/playlist/5wLi4Ktz46QGcMifwyPxJf?si=kb5pE9KzTRmoGHR_S2tCeQ",
          "start": 0,
          "url": "https://t.co/IPE3ZO70Kd"
        }
      ]
    }
  },
  "id": "1364690309695885312",
  "name": "cat vibing music",
  "pinned_tweet_id": "1553152442401001472",
  "profile_image_url": "https://pbs.twimg.com/profile_images/1364790331800231940/MCmYfM2F_normal.jpg",
  "protected": false,
  "public_metrics": {
    "followers_count": 130171,
    "following_count": 14,
    "listed_count": 274,
    "tweet_count": 1152
  },
  "url": "https://t.co/IPE3ZO70Kd",
  "username": "catdancingg",
  "verified": false
};

export function parseTableColumns(row = userMock) {
  const fields = Object.keys(row);
  return fields.map(field => {
    return {
      key: field,
      field,
      headerName: String(field).toLocaleLowerCase(),
      width: 1024 / fields.length
    }
  })
}
