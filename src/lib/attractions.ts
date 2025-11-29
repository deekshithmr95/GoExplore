// Fetch attractions using OpenStreetMap Overpass API
export async function fetchTopAttractionsOSM(lat: number, lon: number, radius: number = 5000) {
  try {
    // Using Overpass API to fetch nearby attractions
    const query = `
      [out:json];
      (
        node["tourism"="attraction"](around:${radius},${lat},${lon});
        way["tourism"="attraction"](around:${radius},${lat},${lon});
      );
      out center;
    `

    const response = await fetch('https://overpass-api.de/api/interpreter', {
      method: 'POST',
      body: query,
    })

    const data = await response.json()

    if (data.elements && data.elements.length > 0) {
      return data.elements.slice(0, 6).map((el: any, idx: number) => ({
        id: el.id,
        name: el.tags?.name || `Attraction ${idx + 1}`,
        type: el.tags?.tourism || 'Attraction',
        description: el.tags?.description || 'Popular tourist attraction',
        lat: el.center?.lat || el.lat,
        lon: el.center?.lon || el.lon,
        rating: Math.floor(Math.random() * 3) + 4, // Mock rating
      }))
    }
    return getDefaultAttractions()
  } catch (error) {
    console.error('Error fetching attractions:', error)
    return getDefaultAttractions()
  }
}

function getDefaultAttractions() {
  return [
    { id: 1, name: 'Historic City Center', type: 'attraction', description: 'UNESCO World Heritage site', rating: 4.8 },
    { id: 2, name: 'Central Park', type: 'park', description: 'Beautiful green space', rating: 4.7 },
    { id: 3, name: 'National Museum', type: 'museum', description: 'Rich cultural heritage', rating: 4.6 },
    { id: 4, name: 'Ancient Temple', type: 'religious', description: 'Historic monument', rating: 4.9 },
    { id: 5, name: 'Botanical Gardens', type: 'park', description: 'Stunning gardens', rating: 4.5 },
    { id: 6, name: 'Art Gallery', type: 'gallery', description: 'Contemporary art', rating: 4.4 },
  ]
}

// Fetch events using a public API
export async function fetchEventsForCity(city: string) {
  try {
    // Using EventBrite-like API or a public events calendar
    // For now, returning mock data since EventBrite requires authentication
    return getMockEvents(city)
  } catch (error) {
    console.error('Error fetching events:', error)
    return getMockEvents(city)
  }
}

function getMockEvents(city: string) {
  const months = ['January', 'February', 'March', 'April', 'May', 'June']
  const events = [
    'International Music Festival',
    'Food & Wine Expo',
    'Art Exhibition',
    'Marathon',
    'Tech Conference',
    'Cultural Carnival',
  ]

  return events.slice(0, 6).map((event, idx) => ({
    id: idx + 1,
    title: `${event}`,
    date: `${months[idx]} ${15 + idx}`,
    time: `${10 + idx}:00 AM`,
    location: `${city} Convention Center`,
    category: ['music', 'food', 'art', 'sports', 'tech', 'culture'][idx],
    attendees: Math.floor(Math.random() * 5000) + 1000,
    price: '$' + (Math.floor(Math.random() * 8) + 1) * 10,
  }))
}

// Fetch weather information
export async function fetchWeatherData(lat: number, lon: number) {
  try {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto`
    )
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching weather:', error)
    return null
  }
}
