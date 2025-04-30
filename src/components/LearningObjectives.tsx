
import React from 'react';

interface LearningObjectivesProps {
  objectives: string[];
}

const LearningObjectives: React.FC<LearningObjectivesProps> = ({ objectives }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Lesson 1 Learning Objectives</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        {objectives.map((objective, index) => (
          <li key={index}>{objective}</li>
        ))}
      </ul>
    </div>
  );
};

export default LearningObjectives;
