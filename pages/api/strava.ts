import type { NextApiRequest, NextApiResponse } from 'next';

interface StravaActivity {
  name: string;
  distance: number;
  time: string;
  pace: string;
  date: string;
}

interface StravaData {
  recentRuns: StravaActivity[];
  totalMileage: number;
  averagePace: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<StravaData | { error: string }>
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Mock data - Replace with actual Strava API integration
    const mockStravaData: StravaData = {
      recentRuns: [
        {
          name: "Long Sunday Run",
          distance: 12.5,
          time: "1:45:32",
          pace: "8:26",
          date: "Sep 10, 2024"
        },
        {
          name: "Marathon Training - Tempo",
          distance: 8.2,
          time: "58:45",
          pace: "7:10",
          date: "Sep 8, 2024"
        },
        {
          name: "Recovery Run",
          distance: 5.0,
          time: "42:30",
          pace: "8:30",
          date: "Sep 6, 2024"
        },
        {
          name: "Track Workout",
          distance: 6.5,
          time: "45:20",
          pace: "6:58",
          date: "Sep 4, 2024"
        },
        {
          name: "Easy Morning Jog",
          distance: 4.3,
          time: "38:15",
          pace: "8:54",
          date: "Sep 2, 2024"
        }
      ],
      totalMileage: 847,
      averagePace: "7:42"
    };

    // Simulate API delay
    setTimeout(() => {
      res.status(200).json(mockStravaData);
    }, 500);

  } catch (error) {
    console.error('Error fetching Strava data:', error);
    res.status(500).json({ error: 'Failed to fetch Strava data' });
  }
}

/* 
  TO INTEGRATE WITH REAL STRAVA API:
  
  1. Register your app at https://developers.strava.com/
  2. Get your Client ID and Client Secret
  3. Set up OAuth 2.0 flow for user authentication
  4. Store access tokens securely (consider using a database)
  5. Replace the mock data with actual API calls:

  Example integration:

  const STRAVA_ACCESS_TOKEN = process.env.STRAVA_ACCESS_TOKEN;
  const STRAVA_API_URL = 'https://www.strava.com/api/v3';

  async function fetchStravaActivities() {
    const response = await fetch(`${STRAVA_API_URL}/athlete/activities?per_page=10`, {
      headers: {
        'Authorization': `Bearer ${STRAVA_ACCESS_TOKEN}`,
      },
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch Strava activities');
    }
    
    return response.json();
  }

  async function fetchAthleteStats() {
    const response = await fetch(`${STRAVA_API_URL}/athletes/{id}/stats`, {
      headers: {
        'Authorization': `Bearer ${STRAVA_ACCESS_TOKEN}`,
      },
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch athlete stats');
    }
    
    return response.json();
  }

  Environment variables needed:
  - STRAVA_CLIENT_ID
  - STRAVA_CLIENT_SECRET  
  - STRAVA_ACCESS_TOKEN (or implement OAuth flow)

  Don't forget to:
  - Handle rate limits (100 requests per 15 minutes, 1000 per day)
  - Implement proper error handling
  - Cache responses to avoid unnecessary API calls
  - Handle token refresh for long-term usage
*/