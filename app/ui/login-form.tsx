'use client';

import { lusitana } from '@/app/ui/fonts';
import { Button } from '@/app/ui/button';
import { useFormState } from 'react-dom';
import { authenticate } from '@/app/lib/actions';

export default function LoginForm() {  // ← PASTIKAN ADA INI
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  return (
    <form action={dispatch} className="space-y-3">
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className={`${lusitana.className} mb-3 text-2xl`}>
          Welcome to Dashboard
        </h1>
        
        <Button type="submit" className="mt-4 w-full">
          Enter Dashboard
        </Button>
        
        {errorMessage && (
          <p className="text-sm text-red-500 mt-2">{errorMessage}</p>
        )}
      </div>
    </form>
  );
}