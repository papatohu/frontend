export class UserUtils {
  static newUserBody = {
    "weather": {
      "position": {
        "x": 4.5,
        "y": 8
      }
    },
    "nasa": {
      "position": {
        "x": 1.5,
        "y": 0
      }
    },
    "cartoon": {
      "position": {
        "x": 3,
        "y": 0
      }
    },
    "maps": {
      "position": {
        "x": 4.5,
        "y": 0
      },
      "mapsConfiguration": {
        "origin": "Halle",
        "destination": "Pforzheim",
        "mode": "driving",
        "avoid": [
          "tolls",
          "ferries"
        ],
        "measurements": "metric"
      }
    },
    "public_transport": {
      "position": {
        "x": 0,
        "y": 0
      },
      "origin": "Berlin"
    },
    "stocks": {
      "position": {
        "x": 1.5,
        "y": 4
      }
    },
    "text_of_the_day": {
      "position": {
        "x": 3,
        "y": 8
      }
    },
    "daily-news": {
      "position": {
        "x": 4.5,
        "y": 4
      }
    }
  }
}
