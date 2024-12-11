import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY, dangerouslyAllowBrowser: true
});

export const getRecommendations = async (userFavorites) => {
    const prompt = `
        Based on these favorite movies: ${JSON.stringify(userFavorites)},
        recommend 10 similar movies with brief descriptions.
        Use JSON format: [{ "title": "Movie Title", "description": "Brief description" }].
    `;

    try {
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: prompt }],
        });

        // Parse and return JSON response
        return JSON.parse(response.choices[0].message.content);
    } catch (error) {
        console.error("Error fetching recommendations from OpenAI:", error);
        return [];
    }
};
