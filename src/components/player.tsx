"use client";

import { useState } from 'react';
import Image from 'next/image';
import {
  Shuffle,
  SkipBack,
  Play,
  Pause,
  SkipForward,
  Repeat,
  Volume2,
  ListMusic,
} from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

export default function Player() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState([50]);

  return (
    <footer className="h-24 bg-sidebar/80 backdrop-blur-md border-t border-sidebar-border text-foreground p-4 flex items-center justify-between z-50">
      <div className="w-1/4 flex items-center gap-4">
        <Image
          src="https://placehold.co/64x64.png"
          alt="Album Art"
          width={64}
          height={64}
          className="rounded-md"
          data-ai-hint="album cover"
        />
        <div>
          <h4 className="font-semibold font-headline">Starlight</h4>
          <p className="text-sm text-muted-foreground">Muse</p>
        </div>
      </div>

      <div className="w-1/2 flex flex-col items-center justify-center gap-2">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <Shuffle className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <SkipBack className="h-6 w-6" />
          </Button>
          <Button
            variant="default"
            size="icon"
            onClick={() => setIsPlaying(!isPlaying)}
            className="h-12 w-12 rounded-full bg-primary hover:bg-primary/90"
          >
            {isPlaying ? (
              <Pause className="h-6 w-6 fill-primary-foreground" />
            ) : (
              <Play className="h-6 w-6 fill-primary-foreground" />
            )}
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <SkipForward className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <Repeat className="h-5 w-5" />
          </Button>
        </div>
        <div className="w-full flex items-center gap-2">
          <span className="text-xs text-muted-foreground">1:23</span>
          <Slider
            defaultValue={[33]}
            max={100}
            step={1}
            className="flex-1"
          />
          <span className="text-xs text-muted-foreground">3:45</span>
        </div>
      </div>

      <div className="w-1/4 flex items-center justify-end gap-4">
        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
          <ListMusic className="h-5 w-5" />
        </Button>
        <div className="flex items-center gap-2 w-32">
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <Volume2 className="h-5 w-5" />
          </Button>
          <Slider
            defaultValue={volume}
            onValueChange={(value) => setVolume(value)}
            max={100}
            step={1}
            className="flex-1"
          />
        </div>
      </div>
    </footer>
  );
}
