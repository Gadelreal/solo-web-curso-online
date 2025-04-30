import React, { useState } from 'react';
import Layout from '../components/Layout';
import ChapterNavigation from '../components/ChapterNavigation';
import VideoPlayer from '../components/VideoPlayer';
import ReflectionForm from '../components/ReflectionForm';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Brain, BookOpen, Users, Video, Book } from "lucide-react";
import { Link } from 'react-router-dom';

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
  
  return <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-blue-600">LESSON 1: Being Human</h1>
        
        <Card className="mb-8 p-6">
          <h2 className="text-2xl font-semibold mb-4">Lesson 1 Learning Objectives</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Appreciate the complexity of human beings</li>
            <li>Understand the human need for social connection</li>
            <li>Evaluate the role and paradox of human biases</li>
          </ul>
        </Card>
        
        <Card className="mb-8 p-6">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-500">What Does It Mean to be Human?</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-medium mb-3">Video 1.1: What Does It Mean to be Human?</h3>
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
              As humans, we are programmed for survival. This instinct is still relevant in our lives today, 
              even if we do not often face life-threatening situations. As a result, our brains may interpret 
              certain events, such as an email or an exam, as a threat, even though these things are not 
              life-threatening. Recognizing these kinds of "primitive" responses as part of our human identity 
              is a crucial step toward self-awareness and, ultimately, flourishing.
            </p>
          </div>
        </Card>
        
        <Card className="mb-8 p-6">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-500">Being Human: The Interconnection of Body, Mind, and Soul</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-medium mb-3">Video 1.2: Being Human: The Interconnection of Body, Mind, and Soul</h3>
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
              Understanding the interconnection of the body, mind, and soul is key to promoting well-being. 
              For example, by understanding the relationship between the amygdala and the prefrontal cortex 
              and how physical exercise can affect that relationship, we can take more informed actions to 
              promote our overall health.
            </p>
          </div>
        </Card>
        
        <Card className="mb-8 p-6">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-500">The Importance of Human Social Connection</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-medium mb-3">Video 1.3: The Importance of Human Social Connection</h3>
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
              As humans, we are wired for social connection. Research shows that meaningful social 
              connection contributes to our happiness. In contrast, feelings of loneliness can have 
              a significant detrimental impact on our well-being.
            </p>
          </div>
        </Card>
        
        <Card className="mb-8 p-6">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <BookOpen className="mr-2 h-6 w-6 text-blue-500" />
            Readings
          </h2>
          <p className="text-gray-700 mb-4">
            Please complete the readings below to engage with the following activities:
          </p>
          <ul className="list-disc pl-6 space-y-4 text-gray-700">
            <li>
              <strong>Why a strong social network improves performance, health, and well-being</strong>
              <div className="mt-1">
                <a href="https://www.ie.edu/center-for-health-and-well-being/blog/why-a-strong-social-network-improves-performance-health-and-well-being/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 flex items-center">
                  <span className="mr-1">Visit link</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </li>
            <li>
              <strong>Your journey to self-discovery</strong>
              <div className="mt-1">
                <a href="https://www.ie.edu/center-for-health-and-well-being/blog/your-journey-to-self-discovery/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 flex items-center">
                  <span className="mr-1">Visit link</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </li>
          </ul>
        </Card>
        
        <Card className="mb-8 p-6">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-500">Activity: Reflecting on Your Social Connections</h2>
          <p className="text-gray-700 mb-6">
            In light of what you've learned and read so far, please reflect on the following questions:
          </p>
          
          <ReflectionForm questions={reflectionQuestions} />
        </Card>
        
        <Card className="mb-8 p-6">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-500">Human Biases</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-medium mb-3">Video 1.4: Human Biases</h3>
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
              As humans, we all have biases. These biases are rooted in the need for survival and exist 
              as a way for our brains to make quick, efficient decisions; however, they can also negatively 
              affect our well-being. By understanding our biases and how they function, we can better 
              cultivate practices that contribute to our flourishing.
            </p>
          </div>
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
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Book className="mr-2 h-6 w-6 text-gray-500" />
            Optional Reading
          </h2>
          <p className="text-gray-700 mb-4">
            Please complete the following readings if they are of interest to you!
          </p>
          <ul className="list-disc pl-6 space-y-4 text-gray-700">
            <li>
              <strong>Warmth and Competence Model</strong>
              <div className="mt-1">
                <a href="https://www.sciencedirect.com/science/article/abs/pii/S0065260107000020" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 flex items-center">
                  <span className="mr-1">Visit link</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </li>
            <li>
              <strong>Human Connection in the Age of AI</strong>
              <div className="mt-1">
                <a href="https://www.ie.edu/insights/articles/human-connection-in-the-age-of-ai/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 flex items-center">
                  <span className="mr-1">Visit link</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </li>
          </ul>
        </Card>
        
        <div className="mt-12 mb-8">
          
        </div>
        
        <ChapterNavigation onComplete={triggerFeedback} />
      </div>
    </Layout>;
};

export default Chapter1;
