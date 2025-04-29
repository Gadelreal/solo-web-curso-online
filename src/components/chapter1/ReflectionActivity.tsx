
import React from 'react';
import { Card } from '@/components/ui/card';
import ReflectionForm from '@/components/ReflectionForm';

interface Question {
  id: string;
  text: string;
}

interface ReflectionActivityProps {
  title: string;
  description: string;
  questions: Question[];
}

const ReflectionActivity: React.FC<ReflectionActivityProps> = ({
  title,
  description,
  questions
}) => {
  return (
    <Card className="mb-8 p-6">
      <h2 className="text-2xl font-semibold mb-4 text-yellow-500">{title}</h2>
      <p className="text-gray-700 mb-6">
        {description}
      </p>
      
      <ReflectionForm questions={questions} />
    </Card>
  );
};

export default ReflectionActivity;
