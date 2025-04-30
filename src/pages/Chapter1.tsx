
import React from 'react';
import Layout from '../components/Layout';
import ChapterNavigation from '../components/ChapterNavigation';
import { BookOpen, Book } from "lucide-react";

// Import the newly created components
import LearningObjectives from '../components/chapter1/LearningObjectives';
import VideoSection from '../components/chapter1/VideoSection';
import ReadingsSection from '../components/chapter1/ReadingsSection';
import ReflectionActivity from '../components/chapter1/ReflectionActivity';

const Chapter1 = () => {
  // Esta función activará el modal de feedback al final del capítulo
  const triggerFeedback = () => {
    document.dispatchEvent(new CustomEvent('ie-feedback-widget-openModal'));
  };
  
  // Define the reflection questions
  const reflectionQuestions = [
    {
      id: 'social-network-impact',
      text: 'How does your social network impact your performance, health, and well-being?'
    },
    {
      id: 'technology-impact',
      text: 'How does technology impact your social connections? Do you think technology can lead to distancing and loneliness, or does it enhance our relationships?'
    },
    {
      id: 'self-discovery',
      text: 'What methods mentioned in the article "Your Journey to Self-Discovery" resonate with you most as you embark on your path of self-discovery?'
    }
  ];

  // Common subtitles configuration for videos
  const commonSubtitles = [
    {
      src: "/subtitles/es.vtt",
      srclang: "es",
      label: "Español",
      default: true
    }, 
    {
      src: "/subtitles/en.vtt",
      srclang: "en",
      label: "English"
    }
  ];
  
  // Required readings data
  const requiredReadings = [
    {
      title: "Why a strong social network improves performance, health, and well-being",
      url: "https://www.ie.edu/center-for-health-and-well-being/blog/why-a-strong-social-network-improves-performance-health-and-well-being/"
    },
    {
      title: "Your journey to self-discovery",
      url: "https://www.ie.edu/center-for-health-and-well-being/blog/your-journey-to-self-discovery/"
    }
  ];

  // Optional readings data
  const optionalReadings = [
    {
      title: "Warmth and Competence Model",
      url: "https://www.sciencedirect.com/science/article/abs/pii/S0065260107000020"
    },
    {
      title: "Human Connection in the Age of AI",
      url: "https://www.ie.edu/insights/articles/human-connection-in-the-age-of-ai/"
    }
  ];
  
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-blue-600">LESSON 1: Being Human</h1>
        
        <LearningObjectives />
        
        <VideoSection 
          title="What Does It Mean to be Human?"
          videoTitle="Video 1.1: What Does It Mean to be Human?"
          keyPoint="As humans, we are programmed for survival. This instinct is still relevant in our lives today, 
            even if we do not often face life-threatening situations. As a result, our brains may interpret 
            certain events, such as an email or an exam, as a threat, even though these things are not 
            life-threatening. Recognizing these kinds of 'primitive' responses as part of our human identity 
            is a crucial step toward self-awareness and, ultimately, flourishing."
          videoSrc="https://iep-media.ie.edu/trailers/example-video/hls.m3u8"
          videoPoster="/video-poster.jpg"
          subtitles={commonSubtitles}
        />
        
        <VideoSection 
          title="Being Human: The Interconnection of Body, Mind, and Soul"
          videoTitle="Video 1.2: Being Human: The Interconnection of Body, Mind, and Soul"
          keyPoint="Understanding the interconnection of the body, mind, and soul is key to promoting well-being. 
            For example, by understanding the relationship between the amygdala and the prefrontal cortex 
            and how physical exercise can affect that relationship, we can take more informed actions to 
            promote our overall health."
          videoSrc="https://iep-media.ie.edu/trailers/example-video/hls.m3u8"
          videoPoster="/video-poster.jpg"
          subtitles={commonSubtitles}
        />
        
        <VideoSection 
          title="The Importance of Human Social Connection"
          videoTitle="Video 1.3: The Importance of Human Social Connection"
          keyPoint="As humans, we are wired for social connection. Research shows that meaningful social 
            connection contributes to our happiness. In contrast, feelings of loneliness can have 
            a significant detrimental impact on our well-being."
          videoSrc="https://iep-media.ie.edu/trailers/example-video/hls.m3u8"
          videoPoster="/video-poster.jpg"
          subtitles={commonSubtitles}
        />
        
        <ReadingsSection 
          title="Readings"
          icon={<BookOpen className="mr-2 h-6 w-6 text-blue-500" />}
          description="Please complete the readings below to engage with the following activities:"
          readings={requiredReadings}
        />
        
        <ReflectionActivity 
          title="Activity: Reflecting on Your Social Connections"
          description="In light of what you've learned and read so far, please reflect on the following questions:"
          questions={reflectionQuestions}
        />
        
        <VideoSection 
          title="Human Biases"
          videoTitle="Video 1.4: Human Biases"
          keyPoint="As humans, we all have biases. These biases are rooted in the need for survival and exist 
            as a way for our brains to make quick, efficient decisions; however, they can also negatively 
            affect our well-being. By understanding our biases and how they function, we can better 
            cultivate practices that contribute to our flourishing."
          videoSrc="https://iep-media.ie.edu/trailers/example-video/hls.m3u8"
          videoPoster="/video-poster.jpg"
          subtitles={commonSubtitles}
        />
        
        <VideoSection 
          title="Leading Self for Greater Impact in What We Do"
          videoTitle="Video 1.5: Leading Self for Greater Impact in What We Do"
          videoSrc="https://iep-media.ie.edu/trailers/example-video/hls.m3u8"
          videoPoster="/video-poster.jpg"
          subtitles={commonSubtitles}
          titleColor=""
        />
        
        <VideoSection 
          title="Closing Meditation: Lesson 1"
          videoTitle="Video 1.6: Embracing the Fullness of Being Human"
          videoSrc="https://iep-media.ie.edu/trailers/example-video/hls.m3u8"
          videoPoster="/video-poster.jpg"
          subtitles={commonSubtitles}
          titleColor=""
        />
        
        <ReadingsSection 
          title="Optional Reading"
          icon={<Book className="mr-2 h-6 w-6 text-gray-500" />}
          description="Please complete the following readings if they are of interest to you!"
          readings={optionalReadings}
        />
        
        <div className="mt-12 mb-8"></div>
        
        <ChapterNavigation onComplete={triggerFeedback} />
      </div>
    </Layout>
  );
};

export default Chapter1;
