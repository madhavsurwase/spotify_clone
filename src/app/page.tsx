import { MusicCard } from '@/components/music-card';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const dummyData = {
  dailyDiscoveries: [
    {
      title: 'Cosmic Echoes',
      artist: 'Stellar Drifters',
      imageUrl: 'https://placehold.co/300x300.png',
      dataAiHint: 'abstract space',
    },
    {
      title: 'Midnight City Drive',
      artist: 'Synthwave Surfers',
      imageUrl: 'https://placehold.co/300x300.png',
      dataAiHint: 'neon city',
    },
    {
      title: 'Forest Lullaby',
      artist: 'Whispering Willows',
      imageUrl: 'https://placehold.co/300x300.png',
      dataAiHint: 'enchanted forest',
    },
     {
      title: 'Ocean Deep',
      artist: 'Tidal Waves',
      imageUrl: 'https://placehold.co/300x300.png',
      dataAiHint: 'underwater coral',
    },
  ],
  playlists: [
    {
      title: 'Chill Vibes',
      description: 'Relax and unwind with these calming tracks.',
      imageUrl: 'https://placehold.co/300x300.png',
      dataAiHint: 'calm lake',
    },
    {
      title: 'Focus Flow',
      description: 'Instrumental beats to help you concentrate.',
      imageUrl: 'https://placehold.co/300x300.png',
      dataAiHint: 'modern library',
    },
    {
      title: 'Workout Beats',
      description: 'High-energy tracks to power your workout.',
      imageUrl: 'https://placehold.co/300x300.png',
      dataAiHint: 'gym workout',
    },
    {
      title: 'Indie Hits',
      description: 'The best of independent music.',
      imageUrl: 'https://placehold.co/300x300.png',
      dataAiHint: 'concert crowd',
    },
  ],
  albums: [
    {
      title: 'The Dark Side of the Moon',
      artist: 'Pink Floyd',
      imageUrl: 'https://placehold.co/300x300.png',
      dataAiHint: 'prism light',
    },
    {
      title: 'Abbey Road',
      artist: 'The Beatles',
      imageUrl: 'https://placehold.co/300x300.png',
      dataAiHint: 'crosswalk street',
    },
    {
      title: 'Rumours',
      artist: 'Fleetwood Mac',
      imageUrl: 'https://placehold.co/300x300.png',
      dataAiHint: 'vintage couple',
    },
    {
      title: 'To Pimp a Butterfly',
      artist: 'Kendrick Lamar',
      imageUrl: 'https://placehold.co/300x300.png',
      dataAiHint: 'protest crowd',
    },
  ],
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-t from-background to-primary/20 text-foreground p-4 md:p-8 space-y-8">
      <header className="flex justify-between items-center">
        <h1 className="text-4xl font-headline font-bold">Good Evening</h1>
        <div className="relative w-full max-w-xs">
          <Input
            type="search"
            placeholder="Search for songs, artists, playlists..."
            className="pl-10 bg-card border-none"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        </div>
      </header>

      <section>
        <h2 className="text-2xl font-headline font-semibold mb-4">
          Daily Discovery
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {dummyData.dailyDiscoveries.map((song) => (
            <MusicCard
              key={song.title}
              title={song.title}
              description={song.artist}
              imageUrl={song.imageUrl}
              dataAiHint={song.dataAiHint}
            />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-headline font-semibold mb-4">
          Curated Playlists
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {dummyData.playlists.map((playlist) => (
            <MusicCard
              key={playlist.title}
              title={playlist.title}
              description={playlist.description}
              imageUrl={playlist.imageUrl}
              dataAiHint={playlist.dataAiHint}
            />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-headline font-semibold mb-4">Top Albums</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {dummyData.albums.map((album) => (
            <MusicCard
              key={album.title}
              title={album.title}
              description={album.artist}
              imageUrl={album.imageUrl}
              dataAiHint={album.dataAiHint}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
