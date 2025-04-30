
import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

interface VideoPlayerProps {
  src: string;
  type?: string;
  poster?: string;
  className?: string;
  subtitles?: Array<{
    src: string;
    srclang: string;
    label: string;
    default?: boolean;
  }>;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ 
  src, 
  type, 
  poster = '',
  className = '', 
  subtitles = []
}) => {
  const videoRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    const videoElement = document.createElement('video-js');
    videoElement.classList.add('video-js');
    videoElement.classList.add('vjs-big-play-centered');
    videoElement.classList.add('vjs-16-9');
    if (className) {
      className.split(' ').forEach(cls => videoElement.classList.add(cls));
    }
    
    videoRef.current.appendChild(videoElement);

    // Determine appropriate video type if not specified
    const videoType = type || (
      src.endsWith('.mp4') ? 'video/mp4' : 
      src.endsWith('.m3u8') ? 'application/x-mpegURL' :
      'video/mp4' // Default to mp4 if type can't be determined
    );

    const player = playerRef.current = videojs(videoElement, {
      controls: true,
      playbackRates: [0.75, 1, 1.25, 1.5, 2],
      fluid: true,
      poster: poster,
      sources: [{
        src: src,
        type: videoType
      }],
      responsive: true,
      preload: 'auto'
    });

    // Add subtitles if they exist
    if (subtitles && subtitles.length > 0) {
      subtitles.forEach(subtitle => {
        player.addRemoteTextTrack({
          kind: 'subtitles',
          src: subtitle.src,
          srclang: subtitle.srclang,
          label: subtitle.label,
          default: subtitle.default
        }, false);
      });
    }

    // Log when a video error occurs
    player.on('error', function() {
      const error = player.error();
      console.error('Video player error:', error);
    });

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [src, type, poster, className, subtitles]);

  return (
    <div data-vjs-player>
      <div ref={videoRef} />
    </div>
  );
};

export default VideoPlayer;
