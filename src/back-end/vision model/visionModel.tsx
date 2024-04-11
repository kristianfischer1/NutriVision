import axios from 'axios'


  const fetchAIResponse = async () => {
    const apiKey = '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'
    try {
      const result = await axios.post(
        'https://api.openai.com/v1/engines/davinci-codex/completions',
        {
          "model": "gpt-4-vision-preview",
          "messages": [
            {
              "role": "user",
              "content": [
                {
                  "type": "text",
                  "text": ""
                },
                {
                  "type": "image_url",
                  "image_url": {
                    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Gfp-wisconsin-madison-the-nature-boardwalk.jpg/2560px-Gfp-wisconsin-madison-the-nature-boardwalk.jpg"
                  }
                }
              ]
            }
          ],
          "max_tokens": 300
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
          },
        },
      )
      return result.data.choices[0].text
    } catch (error) {
      console.error('Error fetching AI response:', error)
    }
  }
export default fetchAIResponse;