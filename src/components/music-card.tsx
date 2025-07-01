import Image from 'next/image';
import { Play } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface MusicCardProps {
  title: string;
  description: string;
  imageUrl: string;
  dataAiHint?: string;
  className?: string;
}

export function MusicCard({
  title,
  description,
  imageUrl,
  dataAiHint,
  className,
}: MusicCardProps) {
  return (
    <Card
      className={cn(
        'group relative w-full overflow-hidden rounded-lg border-none bg-card/60 hover:bg-card/80 transition-colors duration-300 cursor-pointer',
        className
      )}
    >
      <CardContent className="p-4">
        <div className="relative mb-4 aspect-square">
          <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
            data-ai-hint={dataAiHint}
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md"></div>
          <button className="absolute bottom-2 right-2 h-12 w-12 bg-primary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-4 transition-all duration-300 shadow-lg hover:scale-105">
            <Play className="h-6 w-6 text-primary-foreground fill-primary-foreground" />
          </button>
        </div>
        <h3 className="font-headline text-lg font-semibold truncate">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground truncate">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
