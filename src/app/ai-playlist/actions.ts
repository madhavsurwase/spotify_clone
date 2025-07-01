'use server';

import { generateAiPlaylist, GenerateAiPlaylistOutput } from '@/ai/flows/generate-ai-playlist';
import { z } from 'zod';

const formSchema = z.object({
  mood: z.string().min(3, { message: "Your mood description should be at least 3 characters." }).max(100),
});

type State = {
  message?: string | null;
  errors?: {
    mood?: string[];
  } | null;
  data?: GenerateAiPlaylistOutput | null;
}

export async function createPlaylistAction(
  prevState: State,
  formData: FormData
): Promise<State> {
  const validatedFields = formSchema.safeParse({
    mood: formData.get('mood'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Validation failed. Please check your input.',
    };
  }

  try {
    const listeningHistory = "User enjoys indie rock (e.g., Arctic Monkeys, The Strokes), some classic soul (e.g., Aretha Franklin), and occasionally listens to lo-fi hip hop for focus.";
    const trendingMusic = "Currently trending: Viral pop hits from TikTok, revival of 80s synth-pop, and ambient electronic music is gaining popularity.";
    
    const result = await generateAiPlaylist({
      mood: validatedFields.data.mood,
      listeningHistory,
      trendingMusic,
    });
    
    return { message: "Playlist generated successfully!", data: result };

  } catch (error) {
    console.error(error);
    return { message: "An error occurred while generating the playlist. Please try again." };
  }
}
