
import React from 'react';
import { Card } from '@/components/ui/card';
import { Brain } from "lucide-react";
import VideoPlayer from '../VideoPlayer';

interface VideoSectionProps {
  title: string;
  videoTitle: string;
  keyPoint?: string;
  videoSrc: string;
  videoPoster: string;
  subtitles: Array<{
    src: string;
    srclang: string;
    label: string;
    default?: boolean;
  }>;
  titleColor?: string;
}

const VideoSection: React.FC<VideoSectionProps> = ({
  title,
  videoTitle,
  keyPoint,
  videoSrc,
  videoPoster,
  subtitles,
  titleColor = "text-yellow-500"
}) => {
  return (
    <Card className="mb-8 p-6">
      <h2 className={`text-2xl font-semibold mb-4 ${titleColor}`}>{title}</h2>
      
      <div className="mb-6">
        <h3 className="text-xl font-medium mb-3">{videoTitle}</h3>
        <div className="mb-4">
          <VideoPlayer 
            src={videoSrc} 
            poster={videoPoster} 
            subtitles={subtitles} 
          />
        </div>
      </div>
      
      {keyPoint && (
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-4">
          <h4 className="text-lg font-semibold mb-2 flex items-center">
            <Brain className="mr-2 h-5 w-5 text-yellow-500" />
            Key Point
          </h4>
          <p className="text-gray-700">
            {keyPoint}
          </p>
        </div>
      )}
    </Card>
  );
};

export default VideoSection;
