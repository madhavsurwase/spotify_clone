'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { createPlaylistAction } from '@/app/ai-playlist/actions';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Label } from './ui/label';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Music, AlertCircle, Sparkles } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full" size="lg">
      {pending ? (
        <>
          <Sparkles className="mr-2 h-4 w-4 animate-spin" />
          Crafting your mix...
        </>
      ) : (
        <>
          <Sparkles className="mr-2 h-4 w-4" />
          Generate Playlist
        </>
      )}
    </Button>
  );
}

export default function AiPlaylistForm() {
  const initialState = { message: null, errors: null, data: null };
  const [state, dispatch] = useFormState(createPlaylistAction, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message && !state.errors) {
       if (state.data) {
        toast({
          title: "Playlist Ready!",
          description: state.message,
        });
        formRef.current?.reset();
      }
    } else if (state.message && state.errors) {
       toast({
        variant: 'destructive',
        title: "Uh oh! Something went wrong.",
        description: state.message,
      });
    }
  }, [state, toast]);

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="bg-card/50">
        <form ref={formRef} action={dispatch}>
          <CardHeader>
            <CardTitle className="font-headline text-2xl">Describe Your Vibe</CardTitle>
            <CardDescription>
              What's your mood? e.g., "Relaxing after a long day," "Hyped for a night out," or "Melancholic rainy afternoon."
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="mood">Your Mood</Label>
              <Textarea
                id="mood"
                name="mood"
                placeholder="e.g., Upbeat and energetic for a morning run"
                required
                className="min-h-[100px]"
              />
              {state.errors?.mood && (
                <p className="text-sm text-destructive mt-1">{state.errors.mood[0]}</p>
              )}
            </div>
          </CardContent>
          <CardFooter>
            <SubmitButton />
          </CardFooter>
        </form>
      </Card>

      {state.message && state.errors && (
         <Alert variant="destructive" className="mt-8">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{state.message}</AlertDescription>
        </Alert>
      )}

      {state.data && (
        <div className="mt-12">
            <Card className="bg-card/50">
                <CardHeader>
                    <div className='flex items-center gap-4'>
                        <Music className="h-8 w-8 text-primary" />
                        <div>
                            <CardTitle className="font-headline text-3xl">{state.data.playlistDescription}</CardTitle>
                            <CardDescription>Your AI-curated playlist is ready. Enjoy!</CardDescription>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[50px]">#</TableHead>
                                <TableHead>Title</TableHead>
                                <TableHead>Artist</TableHead>
                                <TableHead>Genre</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {state.data.songTitles.map((title, index) => (
                                <TableRow key={index} className="hover:bg-muted/50">
                                    <TableCell className="font-medium">{index + 1}</TableCell>
                                    <TableCell className="font-semibold">{title}</TableCell>
                                    <TableCell>{state.data?.artistNames[index]}</TableCell>
                                    <TableCell className="text-muted-foreground">{state.data?.genres[index]}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
      )}
    </div>
  );
}
