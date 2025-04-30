
import React from 'react';
import Layout from '../components/Layout';
import ChapterNavigation from '../components/ChapterNavigation';
import { Card } from '@/components/ui/card';
import VideoSection from '../components/VideoSection';
import ReadingsSection from '../components/ReadingsSection';
import OptionalReadingsSection from '../components/OptionalReadingsSection';
import LearningObjectives from '../components/LearningObjectives';
import ReflectionActivity from '../components/ReflectionActivity';
import VideoPlayer from '../components/VideoPlayer';

const Chapter1 = () => {
  // This function will trigger the feedback modal at the end of the chapter
  const triggerFeedback = () => {
    document.dispatchEvent(new CustomEvent('ie-feedback-widget-openModal'));
  };
  
  // Learning objectives
  const learningObjectives = [
    "Appreciate the complexity of human beings",
    "Understand the human need for social connection",
    "Evaluate the role and paradox of human biases"
  ];
  
  // Readings
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
  
  // Optional readings
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
  
  // Video section content
  const videoSections = [
    {
      title: "What Does It Mean to be Human?",
      videoTitle: "Video 1.1: What Does It Mean to be Human?",
      keyPointText: "As humans, we are programmed for survival. This instinct is still relevant in our lives today, even if we do not often face life-threatening situations. As a result, our brains may interpret certain events, such as an email or an exam, as a threat, even though these things are not life-threatening. Recognizing these kinds of \"primitive\" responses as part of our human identity is a crucial step toward self-awareness and, ultimately, flourishing."
    },
    {
      title: "Being Human: The Interconnection of Body, Mind, and Soul",
      videoTitle: "Video 1.2: Being Human: The Interconnection of Body, Mind, and Soul",
      keyPointText: "Understanding the interconnection of the body, mind, and soul is key to promoting well-being. For example, by understanding the relationship between the amygdala and the prefrontal cortex and how physical exercise can affect that relationship, we can take more informed actions to promote our overall health."
    },
    {
      title: "The Importance of Human Social Connection",
      videoTitle: "Video 1.3: The Importance of Human Social Connection",
      keyPointText: "As humans, we are wired for social connection. Research shows that meaningful social connection contributes to our happiness. In contrast, feelings of loneliness can have a significant detrimental impact on our well-being."
    }
  ];
  
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-blue-600">LESSON 1: Being Human</h1>
        
        <Card className="mb-8 p-6">
          <LearningObjectives objectives={learningObjectives} />
        </Card>
        
        {/* First three video sections */}
        {videoSections.map((section, index) => (
          <Card className="mb-8 p-6" key={index}>
            <VideoSection 
              title={section.title} 
              videoTitle={section.videoTitle} 
              keyPointText={section.keyPointText} 
            />
          </Card>
        ))}
        
        <Card className="mb-8 p-6">
          <ReadingsSection readings={requiredReadings} />
        </Card>
        
        <Card className="mb-8 p-6">
          <ReflectionActivity 
            title="Activity: Reflecting on Your Social Connections" 
            description="In light of what you've learned and read so far, please reflect on the following questions:" 
            questions={reflectionQuestions} 
          />
        </Card>
        
        <Card className="mb-8 p-6">
          <VideoSection 
            title="Human Biases" 
            videoTitle="Video 1.4: Human Biases" 
            keyPointText="As humans, we all have biases. These biases are rooted in the need for survival and exist as a way for our brains to make quick, efficient decisions; however, they can also negatively affect our well-being. By understanding our biases and how they function, we can better cultivate practices that contribute to our flourishing." 
          />
        </Card>
        
        <Card className="mb-8 p-6">
          <h2 className="text-2xl font-semibold mb-4">Leading Self for Greater Impact in What We Do</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-medium mb-3">Video 1.5: Leading Self for Greater Impact in What We Do</h3>
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
        </Card>
        
        <Card className="mb-8 p-6">
          <h2 className="text-2xl font-semibold mb-4">Closing Meditation: Lesson 1</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-medium mb-3">Video 1.6: Embracing the Fullness of Being Human</h3>
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
        </Card>
        
        <Card className="mb-8 p-6">
          <OptionalReadingsSection readings={optionalReadings} />
        </Card>
        
        <div className="mt-12 mb-8"></div>
        
        <ChapterNavigation onComplete={triggerFeedback} />
      </div>
    </Layout>
  );
};

export default Chapter1;
