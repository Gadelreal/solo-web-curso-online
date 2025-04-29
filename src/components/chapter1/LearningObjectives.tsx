
import React from 'react';
import { Card } from '@/components/ui/card';

const LearningObjectives = () => {
  return (
    <Card className="mb-8 p-6">
      <h2 className="text-2xl font-semibold mb-4">Lesson 1 Learning Objectives</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>Appreciate the complexity of human beings</li>
        <li>Understand the human need for social connection</li>
        <li>Evaluate the role and paradox of human biases</li>
      </ul>
    </Card>
  );
};

export default LearningObjectives;
