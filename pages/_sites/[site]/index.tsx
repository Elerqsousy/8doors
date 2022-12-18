import React from 'react';
import { useRouter } from 'next/router';

export async function getStaticPaths() {
  const paths = [{ params: { site: 'pharmacy' } }, { params: { site: 'clinic' } }];

  return {
    paths: paths,
    fallback: 'blocking',
  };
}

export const getStaticProps = async (context: any) => {
  const data = [
    { domain: 'clinic', data: 'My Clinic app' },
    { domain: 'pharmacy', data: 'My Pharmacy app' },
  ];

  const project = data.find((p) => p.domain === context.params.site);

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: { project },
  };
};

export default function Index({ project }: any) {
  const router = useRouter();
  const site = router.query.site;
  return (
    <h1>
      {project.data} {site}
    </h1>
  );
}
