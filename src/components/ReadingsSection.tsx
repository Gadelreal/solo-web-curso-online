
import React from 'react';
import { BookOpen } from "lucide-react";

interface ReadingItem {
  title: string;
  url: string;
}

interface ReadingsSectionProps {
  readings: ReadingItem[];
}

const ReadingsSection: React.FC<ReadingsSectionProps> = ({ readings }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 flex items-center">
        <BookOpen className="mr-2 h-6 w-6 text-blue-500" />
        Readings
      </h2>
      <p className="text-gray-700 mb-4">
        Please complete the readings below to engage with the following activities:
      </p>
      <ul className="list-disc pl-6 space-y-4 text-gray-700">
        {readings.map((reading, index) => (
          <li key={index}>
            <strong>{reading.title}</strong>
            <div className="mt-1">
              <a 
                href={reading.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-500 hover:text-blue-700 flex items-center"
              >
                <span className="mr-1">Visit link</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReadingsSection;
