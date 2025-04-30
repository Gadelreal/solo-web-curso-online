
import React from 'react';
import VideoPlayer from './VideoPlayer';
import { Brain } from "lucide-react";

interface VideoSectionProps {
  title: string;
  videoTitle: string;
  keyPointText: string;
}

const VideoSection: React.FC<VideoSectionProps> = ({ 
  title, 
  videoTitle, 
  keyPointText 
}) => {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-semibold mb-4 text-yellow-500">{title}</h2>
      
      <div className="mb-6">
        <h3 className="text-xl font-medium mb-3">{videoTitle}</h3>
        <div className="mb-4">
          <VideoPlayer 
            src="/Test video.mp4" 
            type="video/mp4" 
            poster="/lovable-uploads/f61d8aad-7e54-4ad4-baf4-5d81ac0eb07b.png" 
            subtitles={[{
              src: "/subtitles/es.vtt",
              srclang: "es",
              label: "Español",
              default: true
            }, {
              src: "/subtitles/en.vtt",
              srclang: "en",
              label: "English"
            }]} 
          />
        </div>
      </div>
      
      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-4">
        <h4 className="text-lg font-semibold mb-2 flex items-center">
          <Brain className="mr-2 h-5 w-5 text-yellow-500" />
          Key Point
        </h4>
        <p className="text-gray-700">
          {keyPointText}
        </p>
      </div>
    </div>
  );
};

export default VideoSection;
