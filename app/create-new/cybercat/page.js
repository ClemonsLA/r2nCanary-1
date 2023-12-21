import { AddInterviewForm, AddImageGeneratorForm, AddDalleImage, AddanotherImageGeneratorForm } from '@/app/add-form';


export default async function CybercatPage() {
  return (
    <div className="flex flex-col items-center h-full w-full flex-grow box-border">
      <AddanotherImageGeneratorForm />
    </div>
  );
}