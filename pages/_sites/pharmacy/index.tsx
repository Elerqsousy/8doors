import React from 'react';
import { useRouter } from 'next/router';

export default function PharmacyPage() {
  const router = useRouter();
  const site = router.query.site;
  console.log(router);
  return <h1>THIS IS A PHARMACY</h1>;
}
