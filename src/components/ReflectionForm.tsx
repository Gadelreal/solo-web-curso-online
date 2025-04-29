
import React, { useState } from 'react';
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FileText } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface Question {
  id: string;
  text: string;
}

interface ReflectionFormProps {
  questions: Question[];
  maxCharacters?: number;
}

const ReflectionForm: React.FC<ReflectionFormProps> = ({ 
  questions, 
  maxCharacters = 1500 
}) => {
  const [answers, setAnswers] = useState<Record<string, string>>(
    questions.reduce((acc, question) => ({ ...acc, [question.id]: '' }), {})
  );

  const handleChange = (id: string, value: string) => {
    if (value.length <= maxCharacters) {
      setAnswers(prev => ({ ...prev, [id]: value }));
    }
  };

  const handleReset = (id: string) => {
    setAnswers(prev => ({ ...prev, [id]: '' }));
  };

  const handleSubmit = (id: string) => {
    if (!answers[id].trim()) {
      toast({
        title: "Required field",
        description: "Please write your reflection before submitting.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Reflection submitted",
      description: "Your reflection has been saved successfully.",
    });
    
    // Here you would typically send the answer to a backend
    console.log(`Submitted answer for question ${id}:`, answers[id]);
  };

  return (
    <div className="space-y-8">
      {questions.map((question) => (
        <Card key={question.id} className="p-6">
          <div className="mb-4 flex items-start gap-3">
            <FileText className="h-6 w-6 mt-1 flex-shrink-0 text-blue-600" />
            <h3 className="text-lg font-medium">{question.text}</h3>
          </div>
          
          <div className="relative">
            <Textarea
              placeholder="Write here your answer"
              value={answers[question.id]}
              onChange={(e) => handleChange(question.id, e.target.value)}
              className="min-h-32 resize-none"
            />
            <div className="mt-2 text-right text-sm text-gray-500">
              {answers[question.id].length} of {maxCharacters} characters
            </div>
          </div>
          
          <div className="mt-4 flex justify-end gap-3">
            <Button 
              variant="outline" 
              onClick={() => handleReset(question.id)}
            >
              Reset
            </Button>
            <Button 
              onClick={() => handleSubmit(question.id)}
            >
              Submit
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ReflectionForm;
