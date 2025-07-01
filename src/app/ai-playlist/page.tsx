import AiPlaylistForm from '@/components/ai-playlist-form';

export default function AiPlaylistPage() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-bold font-headline mb-4 bg-gradient-to-r from-primary via-accent to-primary-foreground text-transparent bg-clip-text">
          AI Playlist Generator
        </h1>
        <p className="text-lg text-muted-foreground">
          Craft the perfect playlist for any moment. Just tell our AI your current mood,
          and we'll curate a unique selection of tracks based on your listening history
          and what's hot right now.
        </p>
      </div>
      <AiPlaylistForm />
    </div>
  );
}
