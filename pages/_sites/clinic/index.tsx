import React from 'react';
import { useRouter } from 'next/router';

export default function ClinicPage() {
  const router = useRouter();
  const site = router.query.site;

  return <h1 className="text-4xl">It is CLINIC</h1>;
}
