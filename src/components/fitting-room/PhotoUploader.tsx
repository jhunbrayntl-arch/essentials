'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';

interface PhotoUploaderProps {
  onPhotoUpload: (photoUrl: string) => void;
}

export default function PhotoUploader({ onPhotoUpload }: PhotoUploaderProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
        startAnalysis();
      };
      reader.readAsDataURL(file);
    }
  };

  const startAnalysis = () => {
    setIsAnalyzing(true);
    // Simulate AI analysis
    setTimeout(() => {
      setIsAnalyzing(false);
      if (preview) {
        onPhotoUpload(preview);
      }
    }, 2500);
  };

  const handleCameraCapture = () => {
    fileInputRef.current?.click();
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
        startAnalysis();
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {!preview ? (
        <div
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          className="border-2 border-dashed border-neutral-600 rounded-3xl p-12 text-center hover:border-purple-500 transition-colors cursor-pointer bg-neutral-900/50"
          onClick={handleCameraCapture}
        >
          <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Upload Your Photo</h3>
          <p className="text-neutral-400 mb-6">
            Drag and drop or click to upload
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:opacity-90 transition-opacity">
              Choose Photo
            </button>
          </div>
          <p className="text-neutral-500 text-sm mt-4">
            Supports: JPG, PNG, WEBP • Max 10MB
          </p>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
        </div>
      ) : (
        <div className="relative rounded-3xl overflow-hidden bg-neutral-900/50">
          {isAnalyzing ? (
            <div className="aspect-[3/4] flex flex-col items-center justify-center">
              <div className="relative w-48 h-48 mb-6">
                <div className="absolute inset-0 border-4 border-purple-500/30 rounded-full animate-ping" />
                <div className="absolute inset-4 border-4 border-pink-500/30 rounded-full animate-pulse" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src={preview}
                    alt="Analyzing"
                    width={200}
                    height={200}
                    className="rounded-full object-cover opacity-50"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">AI Analysis in Progress</h3>
              <p className="text-neutral-400">Detecting body measurements...</p>
              <div className="mt-4 flex gap-1">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          ) : (
            <div className="aspect-[3/4] relative">
              <Image
                src={preview}
                alt="Your photo"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-green-400 font-semibold mb-1">✓ Photo Ready</p>
                    <p className="text-white text-sm">AI has analyzed your body type</p>
                  </div>
                  <button
                    onClick={() => {
                      setPreview(null);
                      onPhotoUpload('');
                    }}
                    className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-colors"
                  >
                    Change Photo
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
