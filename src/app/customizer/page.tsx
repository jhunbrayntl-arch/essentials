import { ModelProvider } from '@/contexts/ModelContext';
import ModelPreview from '@/components/customizer/ModelPreview';

export default function CustomizerPage() {
  return (
    <ModelProvider>
      <ModelPreview />
    </ModelProvider>
  );
}
