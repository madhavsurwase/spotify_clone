'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating personalized music playlists using AI.
 *
 * The flow takes into account the user's listening history, mood input, and trending music to create a tailored playlist.
 * It exports the `generateAiPlaylist` function, along with the `GenerateAiPlaylistInput` and `GenerateAiPlaylistOutput` types.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateAiPlaylistInputSchema = z.object({
  listeningHistory: z
    .string()
    .describe('The user listening history. Should contain song titles, artists and genres.'),
  mood: z.string().describe('The current mood of the user.'),
  trendingMusic: z
    .string()
    .describe('Trending music information, including song titles, artists and genres.'),
});
export type GenerateAiPlaylistInput = z.infer<typeof GenerateAiPlaylistInputSchema>;

const GenerateAiPlaylistOutputSchema = z.object({
  playlistDescription: z
    .string()
    .describe('A description of the generated playlist, including the mood and general style.'),
  songTitles: z.array(z.string()).describe('An array of song titles in the generated playlist.'),
  artistNames: z.array(z.string()).describe('An array of artist names in the generated playlist.'),
  genres: z.array(z.string()).describe('An array of genres in the generated playlist.'),
});
export type GenerateAiPlaylistOutput = z.infer<typeof GenerateAiPlaylistOutputSchema>;

export async function generateAiPlaylist(input: GenerateAiPlaylistInput): Promise<GenerateAiPlaylistOutput> {
  return generateAiPlaylistFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateAiPlaylistPrompt',
  input: {schema: GenerateAiPlaylistInputSchema},
  output: {schema: GenerateAiPlaylistOutputSchema},
  prompt: `You are a world-class music curator that generates playlists for users.

  Based on the user's listening history, mood, and trending music, create a playlist that is tailored to their taste and mood. Try to come up with a creative name based on the user's mood.

  User Listening History: {{{listeningHistory}}}
  User Mood: {{{mood}}}
  Trending Music: {{{trendingMusic}}}

  Return a description of the playlist, a list of song titles, a list of artist names, and a list of genres. Follow the schema's Zod descriptions closely.
  `,
});

const generateAiPlaylistFlow = ai.defineFlow(
  {
    name: 'generateAiPlaylistFlow',
    inputSchema: GenerateAiPlaylistInputSchema,
    outputSchema: GenerateAiPlaylistOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
