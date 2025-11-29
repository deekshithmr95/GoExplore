import axios from 'axios'

export async function fetchLocationInfo(location: string) {
  try {
    const response = await axios.get('https://en.wikipedia.org/api/rest_v1/page/summary/' + encodeURIComponent(location), {
      headers: {
        'User-Agent': 'GoExplore-App (https://github.com/deekshithmr95/GoExplore)',
      },
    })

    const data = response.data

    return {
      name: data.title,
      description: data.description || data.extract?.substring(0, 100),
      details: data.extract || 'No detailed information available.',
      thumbnail: data.thumbnail?.url || null,
      highlights: [
        'Famous landmarks and attractions',
        'Rich cultural heritage',
        'Excellent cuisine',
        'Great for tourists',
        'Diverse experiences',
      ],
      bestTime: 'Spring and Fall',
      language: 'Local language',
      currency: 'Local currency',
    }
  } catch (error) {
    console.error('Error fetching location info:', error)
    return null
  }
}

export async function fetchCityInfo(cityName: string, countryName: string) {
  try {
    // Try to fetch city info first
    const cityResponse = await axios.get(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(cityName)}`, {
      headers: {
        'User-Agent': 'GoExplore-App',
      },
    })

    const cityData = cityResponse.data

    // Fetch country info for additional details
    const countryResponse = await axios.get(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(countryName)}`, {
      headers: {
        'User-Agent': 'GoExplore-App',
      },
    })

    const countryData = countryResponse.data

    return {
      name: cityData.title,
      emoji: '📍',
      description: cityData.description || 'A beautiful destination',
      details: cityData.extract || 'Information not available',
      highlights: [
        'Famous landmarks',
        'Local cuisine',
        'Cultural attractions',
        'Shopping districts',
        'Natural beauty',
      ],
      bestTime: 'Spring to Fall',
      language: countryData.extract?.match(/official language[^.]*/) ? 'See info' : 'Local language',
      currency: 'Local currency',
      thumbnail: cityData.thumbnail?.url,
    }
  } catch (error) {
    console.error('Error fetching city info:', error)
    return {
      name: cityName,
      emoji: '📍',
      description: `${cityName}, ${countryName}`,
      details: 'Explore this fascinating destination.',
      highlights: ['Landmarks', 'Culture', 'Food', 'Nature', 'Shopping'],
      bestTime: 'Year-round',
      language: 'Local',
      currency: 'Local',
    }
  }
}
